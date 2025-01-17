import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost, resetState } from "../Redux/PostSlice";
import Swal from "sweetalert2";
import PostFormModal from "./Modal";

const Table = () => {
  const dispatch = useDispatch();
  const { posts, loading, error, success } = useSelector((state) => state.posts);
  const [showModal, setShowModal] = useState(false);
  const [editPost, setEditPost] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts());
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePost(id))
          .unwrap()
          .then(() => {
            Swal.fire("Deleted!", "The post has been deleted.", "success");
          })
          .catch((err) => {
            Swal.fire("Error!", err, "error");
          });
      }
    });
  };

  const handleEdit = (post) => {
    setEditPost(post);
    setShowModal(true);
  };

  const handleCreate = () => {
    setEditPost(null);
    setShowModal(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Manajemen Post</h2>
      </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleCreate}
        >
          Create New Post
        </button>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post.id}>
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{post.title}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-green-600"
                  onClick={() => handleEdit(post)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <PostFormModal
          post={editPost}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Table;
