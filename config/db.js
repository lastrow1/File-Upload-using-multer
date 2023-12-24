import mongoose from "mongoose";


const conncetDB = ()=>{
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/fileUploadDemo');
        console.log('Databse Connected!..');
    } catch (err) {
        console.log(`Can not Connect to database ${err.message}`);
    }
}

export default conncetDB