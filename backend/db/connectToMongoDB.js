import mongoose from "mongoose";

const connectToMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Conntect to MongoDB");
    } catch (error) {
        console.log("Erro connectiong to MongoDB",error.message);
    }
}

export default connectToMongoDB;