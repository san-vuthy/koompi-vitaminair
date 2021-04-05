const Link = require("../model/link");
const express = require("express");
const router = express.Router();

// router.post("/", async (req, res) => {
//   const { link } = req.body;
//   try {
//     const newLink = new Link({
//       link,
//     });
//     const links = await newLink.save();

//     res.json({
//       success: 1,
//       meta: links,
//     });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server Error");
//   }
// });

router.get("/", async (req, res) => {
  try {
    const links = await Link.find({}).sort({ create_at: -1 });
    res.json({
      success: 1,
      meta: links,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
