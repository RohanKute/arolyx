const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

function handleJwtToken() {
  function setJwtToken(email, jwtSecret) {
    return jwt.sign({ email }, jwtSecret, { expiresIn: '24h' });
  }

  function verifyJwtToken(token, jwtSecret) {
    try {
      const decoded = jwt.verify(token, jwtSecret);
      return decoded;
    } catch (error) {
      console.log(error);
      return null; 
    }
  }

  return {
    setJwtToken,
    verifyJwtToken
  };
}

module.exports = { handleJwtToken };
