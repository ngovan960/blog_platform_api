import mongoose from "mongoose";

// 1. Định nghĩa Schema
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Yêu cầu trường này không được để trống
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tags: {
      type: [String], // Đây là một mảng chứa các String
    },
  },
  {
    // 2. Tùy chọn để tự động thêm createdAt và updatedAt
    timestamps: true,
  }
);

// 3. Tạo Model từ Schema và export nó
// Mongoose sẽ tự động tạo một collection tên là 'posts' (số nhiều, chữ thường)
export const Post = mongoose.model("Post", postSchema);
