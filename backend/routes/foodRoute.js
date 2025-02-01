import  express  from "express";
import { addFood } from "../controllers/foodController.js";
import multer from "multer"; //using this create image storage system

const foodRouter = express.Router() ;


//Image Storage Engine
const storage = multer.diskStorage({
    destination:"uploads",
    //cb is call back function
    filename : (req, file, cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

//using this we can store the image in the upload folder
const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood) ;

export default foodRouter ;