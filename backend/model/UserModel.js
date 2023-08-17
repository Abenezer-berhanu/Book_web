import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'name is required']
    },
    email : {
        type : String,
        required : [true, 'email is required'],
        unique : true
    },
    password : {
        type : String,
        required : [true, 'password is required']
    },
    userProduct : [{
        type : mongoose.Types.ObjectId,
        ref : 'Products',
        required : 'true'
    }]
}, {timestamps : true})

export default mongoose.model('User', UserSchema)