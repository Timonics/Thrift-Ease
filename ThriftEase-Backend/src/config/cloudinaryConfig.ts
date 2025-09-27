import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "thriftease",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  } as any,
});

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});
