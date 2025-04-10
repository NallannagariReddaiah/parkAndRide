import express from "express";

import { login,signup,logout } from "../controller/userAuth.controller.js";
const router=express.Router();
router.post('/signup',signup);
router.post('/login',login);
router.get('/logout',logout);

export default router;