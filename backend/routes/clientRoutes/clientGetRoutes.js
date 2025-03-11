const router = require("express").Router();
const controller = require("../../controller/clients");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

router.get("/check_auth", (req, res) => {
  try {
    if (req.session && req.session.token) {
      const decoded = jwt.verify(req.session.token, SECRET_KEY);
      return res
        .status(200)
        .json({ message: "Authenticated", user_id: Number(decoded.user_id) });
    }
    res.status(401).json({ message: "Unauthorized" });
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

router.get("/get_client_info", async (req, res, next) => {
  try {
    const { client_id } = req.query;
    const data = await controller.getClientInfo(client_id);
    res.status(200).json(data);
  } catch (err) {
    console.error("Error getting client credentials:", err);
    res
      .status(500)
      .json({ message: "Error getting client", error: err.message });
  }
});

router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(400).send("Unable to logout");
    } else {
      res.status(200).json({ message: "Logged out successfully" });
    }
  });
});

module.exports = router;
