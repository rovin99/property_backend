// config.js
module.exports = {
  
  production: {
    use_env_variable: "DATABASE_URL", // this indicates that you want to use the DATABASE_URL environment variable for production
    dialect: "mysql",
    // other production configurations
  }
};
