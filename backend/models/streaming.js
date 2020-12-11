const mongoose = require("mongoose");
const Schema = mongoose.Schema;



  const questionasn={
    question: { type: String},
    answer: { type: String},
  
  }
 


const streamingSchema = new Schema(
  
  {
    questionAnswer: [questionasn],
    name: {
      type: String,
      required: true,
    },


    description: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
    },

    streamcode: {
      type: String,
      required: true,
    },
    allqueries: [],
    processedqueries: {
      type: [],
    },

  },
  {
    timestamps: true,
  }
);

var Streamings = mongoose.model("Streamings", streamingSchema);

module.exports = Streamings;
