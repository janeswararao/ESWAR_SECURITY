const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router(); // ✅ THIS WAS MISSING

/******** SIGNUP ********/
router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({
            name,
            email,
            password: hashedPassword,
        });

        await user.save();
        res.json({ msg: "Signup successful" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
});

/******** LOGIN (USERNAME OR EMAIL) ********/
router.post("/login", async (req, res) => {
    const { identifier, username, email, name, password } = req.body;
    const loginInput = identifier || username || email || name;

    try {
        const user = await User.findOne({
            $or: [
                { email: loginInput },
                { name: loginInput },
            ],
        });

        if (!user) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        const token = jwt.sign(
            { userId: user._id },
            "local_secret_key",
            { expiresIn: "1h" }
        );

        res.json({
            token,
            user: {
                name: user.name,
                email: user.email,
            },
            msg: "Login successful",
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router; // ✅ EXPORT ROUTER
