const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ msg: "No token, access denied" });
    }

    try {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, "local_secret_key");
        req.userId = decoded.userId;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Invalid token" });
    }
};

module.exports = authMiddleware;
