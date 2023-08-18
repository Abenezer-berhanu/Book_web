import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'name is required']
    },
    email : {
        type : String,
        required : [true, 'email is required'],
        unique : true,
        lowercase : true
    },
    password : {
        type : String,
        required : [true, 'password is required']
    },
    user_id: {
        type : String,
        required : true
    },
    isAdmin : {
        type : String,
        default : false
    }
}, {timestamps : true})

export default mongoose.model('User', UserSchema)