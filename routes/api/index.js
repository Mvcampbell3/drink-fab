const router = require("express").Router();
const userRoute = require("./userRoute");
const recipeRoute = require("./recipeRoute");

// When User goes to "/api/posts", use routes defined in postsRoute.js
router.use("/user", userRoute);
router.use("/recipe", recipeRoute)


module.exports = router;
