import mongoose from "mongoose";

const IncidentSchema = new mongoose.Schema({
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

    issue: {
        type: String,
        trim: true,        
    },

    timeReported: {
      type: Date,
      default: Date.now
     
  },
    cause:{
        type: String,
        trim: true,       
    },
    resolution: {
        type: String,
        trim: true,       
    },

    status: {
        type: String,
        trim: true,       
    },
  
    update: [String]
        
})

export default mongoose.model('Incident', IncidentSchema)