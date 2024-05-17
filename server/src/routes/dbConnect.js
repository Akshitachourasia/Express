const {default:mongoose} = require('mongoose');

const dbConnect =  async() => {
  try {
let conn = await mongoose.connect("mongodb+srv://akshitacbrainerhub:a@cluster0.a33aefi.mongodb.net/")
  } catch (error) {
    console.log(error)
    process.exit()
  }
}


 module.exports = dbConnect