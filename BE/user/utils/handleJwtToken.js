const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

function handleJwtToken() {
  function setJwtToken(email) {
    return jwt.sign({ email }, jwtSecret, { expiresIn: '24h' });
  }
  function verifyJwtToken(token) {
    try {
        if(token){
          const decoded = jwt.verify(token, jwtSecret);
          if(token){
             return decoded
          }
        }
    } catch (error) {
      console.log(error)
      return error;
    }
  }
  return {
    setJwtToken,
    verifyJwtToken
  };
}

module.exports = {handleJwtToken}