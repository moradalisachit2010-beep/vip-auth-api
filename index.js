const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const validKeys = {
    "VIP-KEY-100": { status: "active" },
    "MY-SECRET-KEY": { status: "active" }
};

app.get('/login', (req, res) => {
    const key = req.query.key;

    if (!key) {
        return res.json({ status: "error", message: "Enter Key" });
    }

    if (validKeys[key]) {
        return res.json({
            status: "success",
            token: "AUTH_TOKEN_SUCCESS",
            auth: "AUTH_TOKEN_SUCCESS",
            message: "Success"
        });
    } else {
        return res.json({
            status: "error",
            message: "Invalid Key"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
