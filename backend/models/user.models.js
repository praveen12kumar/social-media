import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:[true, "Please enter a name"]
    },
    avatar:{
        public_id:String,
        url:String
    },
    email:{
        type:String,
        required:[true, "Please enter an email"],
        unique:[true, "Email already exists"]
    },
    password:{
        type:String,
        required:[true, "Please enter Password"],
        minLength:[6, "Password must be atleast 6 characters"],
        select:false,
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post"
        }
    ],
    followers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    following:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],


})