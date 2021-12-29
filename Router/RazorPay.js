const express = require("express");
const router = express.Router();
const RazorPay = require('razorpay')
const request = require('request')
const keys = require('../keys')

const RazorInstance = new RazorPay({
    key_id: keys.razorIdKey,
    key_secret: keys.razorSecretKey
})
router.get("/order", (req, res) => {
    try {
        const options = {
            amount: 10000,
            currency: "INR",
            receipt: "receipt#1",
            payment_capture: 1, //1

        };
        RazorInstance.orders.create(options, async function (err, order) {
            if (err) {
                return res.status(500).json({
                    message: "Something error!s"
                })
            }
            return res.status(200).json(order)
        });
    }
    catch (err) {
        return res.status(500).json({
            message: "Something error!s"
        })
    }
});

router.post("/capture/:paymentId", (req, res) => {
    try {
        return request(
            {
                method: "POST",
                url: `https://${keys.razorIdKey}:${keys.razorSecretKey}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
                form: {
                    amount: 10000,
                    currency: "INR"
                },
            },
            async function (err, response, body) {
                if (err) {
                    return res.status(500).json({
                        message: "Something error!s"
                    })
                }
                return res.status(200).json(body)
            }
        )
    }
    catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
})

module.exports = router;