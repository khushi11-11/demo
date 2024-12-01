// orders (in route) = membership
// order = mship

require("dotenv").config();
const express = require('express');
const Razorpay = require("razorpay");
const router = express.Router();

router.post("/membership/:amt", async (req, res) => {
    console.log("Amount="+req.params.amt)
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID ,
            key_secret: process.env.RAZORPAY_SECRET
        });

        // const amountInPaise = req.params.amt * 100; // Convert to paise
        const options = {
            // amount: amountInPaise,
            amount : req.params.amt,
            currency: "INR",
            receipt: "receipt_order_74394"
        };

        const mship = await instance.orders.create(options);
        
        if (!mship) {
            console.error("Membership failed:", mship); // Log response if membership is undefined
            return res.status(500).send("Error: Unable to give membership.");
        }

        res.json(mship);  // Return the Razorpay membership object
    } catch (error) {
        console.error("Error creating Razorpay order (membership):", error.message, error.stack); // Log detailed error message
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});


// success page 
router.post('/success', async (req, res) => {
    //transaction details
    res.send("Payment Successfully Done! Congrats for your premium membership..");
    res.end();
});

module.exports = router;