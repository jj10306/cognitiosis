const jwt = require("jsonwebtoken");
const config = require("config");

const auth = (req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token) return res.status(401).json({msg: 'No token, unauthorized user'});


    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        //Add user from payoad to request body
        req.user = decoded;
        next();
    } catch(exception) {
        return res.status(400).json({msg: "token is not valid"})
    }

}

module.exports = auth;