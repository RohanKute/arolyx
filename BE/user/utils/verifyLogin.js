const { handleJwtToken } = require("./handleJwtToken");


function verifyLogin(req, res, next){
    try {
        const jwtToken = handleJwtToken.verifyToken(req.headers.authorization);
        if(jwtToken.number){
            next();
        }
        res.status(301).json({
            messege : "login-required"
        })
    } catch (error) {
        console.log(error)
        res.json(500).json({
            messege : "internal-server-error"
        })
    }
}

module.exports = { verifyLogin };