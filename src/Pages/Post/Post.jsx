// PostForm.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, resetState } from "../Redux/PostSlice";

function PostForm() {
  const dispatch = useDispatch();
  const { loading, success, error, post } = useSelector((state) => state.posts);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (success) {
      setTitle("");
      setText("");
      setImage(null);
    }
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", text);  
    if (image) formData.append("image", image);

    dispatch(createPost(formData));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Buat Ingfo Terbaru</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
       
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="title">
              Judul
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Post Title"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="text">
              Ingfonya
            </label>
            <textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Write your post..."
              rows="5"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="image">
              Image
            </label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 text-white rounded-md ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Post"}
          </button>

          {success && <p className="text-green-500 text-center mt-4">Post created successfully!</p>}
          {error && <p className="text-red-500 text-center mt-4">Error: {error}</p>}
        </form>
      </div>
    </div>
  );
}

export default PostForm;
