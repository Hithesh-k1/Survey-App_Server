const passport = require("passport");

module.exports = (app) => {
  /**
   * Foward users request to google
   */
  app.get(
    "auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  /**
   * After Google grants permission
   */
  app.get("/auth/google/callback", passport.authenticate("google"));
};
