const { handleJwtToken } = require("./handleJwtToken");


function verifyLogin(req, res, next) {
    try {
        if(req.headers?.authorization){
            const jwtToken = handleJwtToken().verifyJwtToken(req.headers.authorization);
            if (jwtToken?.number) {
                 next();
            } else {
                 return res.status(301).json({
                    messege: "login-required"
                })
            }
        }

    } catch (error) {
        console.log(error)
        return res.json(500).json({
            messege: "internal-server-error"
        })
    }
}

module.exports = { verifyLogin };