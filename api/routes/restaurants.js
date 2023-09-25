import express from "express"
import {getRest} from "../controllers/restaurants.js"


const router = express.Router()

router.get("/", getRest);

export default router