const { handleJwtToken } = require("./handleJwtToken");


function verifyLogin(req, res, next){
    try {
        const jwtToken = handleJwtToken().verifyJwtToken(req.headers.authorization);
        if(jwtToken.number){
            next();
        } else res.status(301).json({
            messege : "login-required"
        })
    } catch (error) {
        res.json(500).json({
            messege : "internal-server-error"
        })
    }
}

module.exports = { verifyLogin };