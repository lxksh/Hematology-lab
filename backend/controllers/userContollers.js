const users = require("../models/userSchema");
const userotp = require("../models/userOtp");
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');
const twilio = require('twilio'); 

// email config
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
})

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

exports.userregister = async (req, res) => {
    const { fname, email, password, phone } = req.body;

    if (!fname || !email || !password || !phone ) {
        res.status(400).json({ error: "Please Enter All Input Data" })
    }

    try {
        const presuer = await users.findOne({ email: email });

        if (presuer) {
            res.status(400).json({ error: "This User Already exists" })
        } else {
            const userregister = new users({
                fname, email, password, phone
            });

            // here password hashing

            const storeData = await userregister.save();
            res.status(200).json(storeData);
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }

};



// user send otp
exports.userOtpSend = async (req, res) => {
    const {email,password} = req.body;
    const user= await users.findOne({email})
    
    if (!email) {
        res.status(400).json({ error: "Please Enter Your Email" })
    }
    if(!password){
        res.status(400).json({ error: "Please enter your Password" })
    }
    else{
        const cpass= await bcrypt.compare(password, user.password)
        if(!cpass){
            res.status(400).json({error:"Invalid Password"})
        }
        try {
            const presuer = await users.findOne({ email: email });
            if (presuer) {
                const OTP = Math.floor(100000 + Math.random() * 900000);

                const existEmail = await userotp.findOne({ email: email });


                if (existEmail) {
                    const updateData = await userotp.findByIdAndUpdate({ _id: existEmail._id }, {
                        otp: OTP
                    }, { new: true }
                    );
                    await updateData.save();

                    const mailOptions = {
                        //from: 'myrtice95@ethereal.email',
                        from: process.env.USER,
                        to: email,
                        subject: "Sending Email For Otp Validation",
                        text: `OTP:- ${OTP}`
                    }


                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            console.log("error", error);
                            res.status(400).json({ error: "email not send" })
                        } else {
                            console.log("Email sent", info.response);
                            res.status(200).json({ message: "Email sent Successfully" })
                        }
                    })
                    await client.messages.create({
                        body: `Your OTP is: ${OTP}`,
                        to:`+91${user.phone}`,
                        from: process.env.TWILIO_PHONE_NUMBER,
                    });

                } else {

                    const saveOtpData = new userotp({
                        email, otp: OTP
                    });

                    await saveOtpData.save();
                    const mailOptions = {
                        //from: 'myrtice95@ethereal.email',
                        from: process.env.USER,
                        to: email,
                        subject: "Sending Email For Otp Validation",
                        text: `OTP:- ${OTP}`
                    }

                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            console.log("error", error);
                            res.status(400).json({ error: "email not sent" })
                        } else {
                            console.log("Email sent", info.response);
                            res.status(200).json({ message: "Email sent Successfully" })
                        }
                    })
                }
            } else {
                res.status(400).json({ error: "This User Does Not Exist" })
            }
        } catch (error) {
            res.status(400).json({ error: "Invalid Details", error })
        }
    }
};
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET_KEY, { expiresIn: '3d' })
}

exports.userLogin = async(req,res)=>{
    const {email,otp} = req.body;

    if(!otp || !email){
        res.status(400).json({ error: "Please Enter Your OTP and email" })
    }

    try {
        const otpverification = await userotp.findOne({email:email});

        if(otpverification.otp === otp){
            const preuser = await users.findOne({email:email});

            // token generate
            
            const token = createToken(preuser._id)
            res.status(200).json({email, token})

        }else{
            res.status(400).json({error:"Invalid Otp"})
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
}

