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

  app.get("api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
