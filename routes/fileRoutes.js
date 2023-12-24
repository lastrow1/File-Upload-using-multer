import express from 'express';
import upload from '../utils/multerConfig.js'
const routes = express.Router();


// get => /

routes.get('/', async (req,res)=>{
    res.status(200).json({msg:'Hiii'})
})


// upload = upload.single('myfile')
routes.post('/',upload.single('myfile'), async (req,res)=>{

    if(!req.file){
       return res.json({error:'please upload valid files!.'})
    }
    return res.json({msg:"File Uploaded Successfully"})

    
    
})
export default routes;