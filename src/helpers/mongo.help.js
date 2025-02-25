import mongoose from "mongoose";

const connectMongo = async (MONGO_URL) => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Conectado a MongoDB correctamente");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB", error);
  }
};

export default connectMongo;
