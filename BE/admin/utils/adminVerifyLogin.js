const { handleJwtToken } = require("../../user/utils/handleJwtToken");
const jwtSecret = process.env.ADMIN_JWT;

function adminVerifyLogin(req, res, next) {
    console.log('token' , req?.headers?.authorization);
    try {
        if (req.headers.authorization !== "null") {
            const jwtToken = handleJwtToken().verifyJwtToken(req.headers.authorization,jwtSecret);
            if (jwtToken?.id) {
                next();
            } else {
                return res.status(200).json({
                    message: "invalid-token"
                });
            }
        } else {
            return res.status(200).json({
                message: "login-required"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "internal-server-error"
        });
    }
}

module.exports = { adminVerifyLogin };
