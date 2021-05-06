const express = require("express");
const router = express.Router();
const auth = require("../middleware/mAuth");
const User = require("../models/User");

//@route  - GET api/profile
//@desc   - Get profile
//@access - Private
router.get("/", auth, async (req, res) => {
  try {
    const client = await User.findById(req.user.id).select("-password");

    if (!client) {
      return res.status(400).json({ msg: "There is no user" });
    }

    res.json(client);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
