require('dotenv').config();

module.exports = {
  server: {
    PORT: parseInt(process.env.PORT, 10),
  },
  db: {
    DB_NAME: '',
    DB_USER: '',
    DB_PASSWORD: '',
  },
  jwt: {
  },
};
