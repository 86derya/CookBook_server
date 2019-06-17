const dbUser = "86derya";
const dbPassword = "%40e8srxwkp";

const config = {
  port: 8080,
  dbUser,
  dbPassword,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@cluster0-pobfy.mongodb.net/test?retryWrites=true&w=majority`
};

module.exports = config;
