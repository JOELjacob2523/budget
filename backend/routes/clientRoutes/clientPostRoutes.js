const router = require("express").Router();
const controller = require("../../controller/clients");

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

module.exports = router;
