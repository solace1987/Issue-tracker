import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema({
    user: {
        type: String,
        trim: true,
            },
    dept: {
        type: String,
        trim: true,
    },
    email:{
        type:String,
        trim:true,
    },

    request: {
        type: String,
        trim: true,        
    },

    timeReported: {
      type: Date,
      default: Date.now
     
  },
    timeExecuted:{
        type: String,
        trim: true,       
    },
    
    status: {
        type: String,
        trim: true,       
    },
    remark: {
        type: String,
        trim: true,       
    },
    cartegory: {
        type:String,
        trim:true
    }
        
})

export default mongoose.model('Request', RequestSchema)