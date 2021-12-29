const express = require("express");
const cors = require('cors');
const app = express();
const RazorPay = require('./Router/RazorPay')
const path = require("path")

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV == 'production') {
    app.use(express.static("client/build"))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.use(cors())
app.use('/razorPay', RazorPay)
app.get("/", (req, res) => {
    return res.json({ message: 'Success' });
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT} 🔥`));