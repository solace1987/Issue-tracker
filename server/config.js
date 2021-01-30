const config = {
    env: process.env.NODE_ENV|| 'development',
    port: process.env.PORT || 3200,
    jwtSecret: process.env.JWT_SECRET || "ashanmghlkbchdktlcoesnrtncksgkto",
    mongoUri:'mongodb+srv://sholaadmin:Ashanti1987@issue-tracker.zljrm.mongodb.net/issue-tracker'
}

module.exports = config