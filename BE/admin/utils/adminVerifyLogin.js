const { handleJwtToken } = require("../../user/utils/handleJwtToken");
const jwtSecret = process.env.ADMIN_JWT;

function adminVerifyLogin(req, res, next) {
    try {
        if (req?.headers?.authorization) {
            const jwtToken = handleJwtToken().verifyJwtToken(req.headers.authorization,jwtSecret);
            if (jwtToken?.id) {
                next();
            } else {
                return res.status(401).json({
                    message: "invalid-token"
                });
            }
        } else {
            return res.status(401).json({
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
