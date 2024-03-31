import app from "./app.js";
import connectDB from "./db/index.js";



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port ${process.env.PORT}`);
    })
})
.then(()=>{
    app.on("error", (error)=>{
        console.log("ERROR", error);
        throw error
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed !!", err);
})