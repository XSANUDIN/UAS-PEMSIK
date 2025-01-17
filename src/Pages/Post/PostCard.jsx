import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Redux/PostSlice";

function PostCard() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!posts || posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
      <div className="container mx-auto px-20">
          {posts.map((post) => (
      <div className="bg-gray-100 p-6">
          <div key={post.id} className="space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0">
            <a href="#" className="group">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  className="object-cover shadow-lg rounded-lg group-hover:opacity-75"
                  src={post.image}
                  
                />
              </div>
            </a>

            <div className="sm:col-span-2">

              <div className="mt-2">
                <h4 className="text-lg leading-6 font-semibold font-sans text-skin-inverted">
                  {post.title}
                </h4>
                <p className="mt-1 text-sm font-normal text-skin-base leading-5">{post.content}</p>
              </div>
            </div>
          </div>
      </div>
        ))}
    </div>
  );
}

export default PostCard;
