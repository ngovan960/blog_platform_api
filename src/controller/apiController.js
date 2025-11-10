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

export const gettAllPost = async (req, res) => {
  try {
    const searchTerm = req.query.term;

    let query = {};

    if (searchTerm) {
      query = {
        $or: [
          { title: { $regex: searchTerm, $options: "i" } },
          { content: { $regex: searchTerm, $options: "i" } },
          { category: { $regex: searchTerm, $options: "i" } },
        ],
      };
    }

    const posts = await Post.find(query);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);
    if (post) {
      return res.status(200).json(post);
    }
    return res
      .status(404)
      .json({ message: "Không tìm thấy bài post với ID này." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const updatePost = await Post.findByIdAndUpdate(id, updates, { new: true });
    if (updatePost) {
      return res.status(200).json(updatePost);
    }

    return res
      .status(404)
      .json({ message: "Không tìm thấy bài post với ID này." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const delPost = async (req, res) => {
  try {
    const id = req.params.id;
    const delPost = await Post.findByIdAndDelete(id);
    if (delPost) {
      return res.status(200).json(delPost);
    }

    return res
      .status(404)
      .json({ message: "Không tìm thấy bài post với ID này." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
