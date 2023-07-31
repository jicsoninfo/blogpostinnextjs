import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
    {
        title:{
            type:String,
            required: true,
        },
        desc:{
            type:String,
            required : true,
        },
        img:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            required:true,
        },
        usernama:{
            type: String,
            required:true,
        },
    },
    { timestamps: true}
);
//If the psot collect does not exist create a new one.
export default mongoose.models.post || mongoose.model("post", postSchema);