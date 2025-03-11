require("dotenv").config();
const router = require("express").Router();
const controller = require("../../controller/clients");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

//router to singup new client
router.post("/signup", async (req, res, next) => {
  try {
    await controller.createClient(
      req.body.first_name,
      req.body.last_name,
      req.body.address1,
      req.body.address2,
      req.body.state,
      req.body.city,
      req.body.zip_code,
      req.body.primary_phone,
      req.body.cell1,
      req.body.cell2,
      req.body.email,
      req.body.password_hash
    );
    res.status(200).json({
      message: "Client created successfully",
    });
  } catch (err) {
    console.error("Error inserting client credentials:", err);
    res
      .status(500)
      .json({ message: "Error creating client", error: err.message });
  }
});

// router to login
router.post("/login", async (req, res, next) => {
  try {
    const { user } = await controller.confirmClient(
      req,
      req.body.email,
      req.body.password
    );

    const token = jwt.sign({ client_id: user.client_id }, SECRET_KEY);
    req.session.token = token;

    let userInfo = await controller.getClientInfo(user.client_id);

    res.status(200).json({
      message: "User confirmed successfully",
      token: req.session.token,
      client_id: user.client_id,
      userInfo: userInfo,
    });
  } catch (err) {
    console.error("Error confirming user credentials:", err);
    res
      .status(500)
      .json({ message: "Error confirming user", error: err.message });
  }
});

// router.get("/logout", (req, res, next) => {
//   req.session.destroy((err) => {
//     if (err) {
//       res.status(400).send("Unable to logout");
//     } else {
//       res.redirect("/login");
//     }
//   });
// });

module.exports = router;
