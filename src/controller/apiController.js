import { Post } from "../services/post_schema.js";

export const createPost = async (req, res) => {
  try {
    // Tao bai viet moi
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      tags: req.body.tags,
    });

    //luu bai viet vao db

    const savePost = await newPost.save();

    res.status(201).json(savePost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const gettAllPost = (req, res) => {};

export const getPost = (req, res) => {};

export const updatePost = (req, res) => {};

export const delPost = (req, res) => {};
