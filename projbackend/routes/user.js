const express = require("express");
const router = express.Router();

const { getUserByID, getUser,updateUser,userPurchaseList } = require("../controllers/user");
const {
  isSignenedIn,
  isAuthenticated,
  isAdmin,
} = require("../controllers/auth");

router.param("userId", getUserByID);

router.get("/user/:userId", isSignenedIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignenedIn, isAuthenticated, updateUser);
router.get("/orders/user/:userId", isSignenedIn, isAuthenticated, userPurchaseList);

module.exports = router;
