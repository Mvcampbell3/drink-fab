const router = require("express").Router();

router.get("/test", (req,res) => {
  res.json("working here at api/recipe/test");
})

module.exports = router;