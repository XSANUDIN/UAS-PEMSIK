import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../Redux/PostSlice";
import Swal from "sweetalert2";

const PostFormModal = ({ post, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: post?.title || "",
    content: post?.content || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (post) {
        await dispatch(updatePost({ id: post.id, formData })).unwrap();
        Swal.fire("Success", "Post updated successfully!", "success");
      } else {
        await dispatch(createPost(formData)).unwrap();
        Swal.fire("Success", "Post created successfully!", "success");
      }
      onClose();
    } catch (error) {
      Swal.fire("Error", error, "error");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h3 className="text-xl font-bold mb-4">
          {post ? "Edit Post" : "Create New Post"}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Content:</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              rows="4"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-500"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              {post ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostFormModal;
