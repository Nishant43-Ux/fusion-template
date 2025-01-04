import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://fusion-backend-jzdm.onrender.com";

function PostsComponent() {
  const [posts, setPosts] = useState([]);
  const [postForm, setPostForm] = useState({
    title: "",
    body: "",
    mediaHash: "",
    links: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editPostId, setEditPostId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch posts from the API
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/posts`);
      setPosts(response.data.data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Handle post submission (create or update)
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...postForm, links: postForm.links.split(",") };

    try {
      if (editMode) {
        // Update an existing post
        await axios.put(`${BASE_URL}/posts/${editPostId}`, payload);
        alert("Post updated successfully!");
        setEditMode(false);
        setEditPostId(null);
      } else {
        // Create a new post
        await axios.post(`${BASE_URL}/posts`, payload);
        alert("Post created successfully!");
      }

      setPostForm({ title: "", body: "", mediaHash: "", links: "" });
      fetchPosts();
    } catch (error) {
      console.error("Failed to submit post:", error);
      alert("Error submitting post.");
    }
  };

  // Populate form with the selected post's data for editing
  const handleEditPost = (post) => {
    setPostForm({
      title: post.title,
      body: post.body,
      mediaHash: post.mediaHash,
      links: post.links.join(","),
    });
    setEditMode(true);
    setEditPostId(post._id);
  };

  // Delete a post
  const handleDeletePost = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/posts/${id}`);
      alert("Post deleted successfully!");
      fetchPosts();
    } catch (error) {
      console.error("Failed to delete post:", error);
      alert("Error deleting post.");
    }
  };

  // Cancel edit mode
  const handleCancelEdit = () => {
    setEditMode(false);
    setEditPostId(null);
    setPostForm({ title: "", body: "", mediaHash: "", links: "" });
  };

  return (
    <div
      style={{
        background: "#1a0000",
        padding: "20px",
        borderRadius: "8px",
        color: "#fff",
      }}
    >
      <h2
        style={{
          color: "#ff4d4d",
          textShadow: "0 0 10px red",
          marginBottom: "20px",
        }}
      >
        {editMode ? "Edit Post" : "Create Post"}
      </h2>
      <form onSubmit={handlePostSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Title:</label>
          <input
            type="text"
            value={postForm.title}
            onChange={(e) =>
              setPostForm({ ...postForm, title: e.target.value })
            }
            required
            style={{
              width: "100%",
              padding: "10px",
              margin: "5px 0",
              borderRadius: "5px",
              border: "1px solid #8b0000",
              backgroundColor: "#2c0000",
              color: "#fff",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Media Hash:</label>
          <input
            type="text"
            value={postForm.mediaHash}
            onChange={(e) =>
              setPostForm({ ...postForm, mediaHash: e.target.value })
            }
            required
            style={{
              width: "100%",
              padding: "10px",
              margin: "5px 0",
              borderRadius: "5px",
              border: "1px solid #8b0000",
              backgroundColor: "#2c0000",
              color: "#fff",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Links (comma-separated):</label>
          <input
            type="text"
            value={postForm.links}
            onChange={(e) =>
              setPostForm({ ...postForm, links: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              margin: "5px 0",
              borderRadius: "5px",
              border: "1px solid #8b0000",
              backgroundColor: "#2c0000",
              color: "#fff",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Body:</label>
          <textarea
            value={postForm.body}
            onChange={(e) => setPostForm({ ...postForm, body: e.target.value })}
            required
            rows={10} // Larger textarea
            style={{
              width: "100%",
              padding: "10px",
              margin: "5px 0",
              borderRadius: "5px",
              border: "1px solid #8b0000",
              backgroundColor: "#2c0000",
              color: "#fff",
              resize: "vertical", // Allow resizing vertically
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            background: "#8b0000",
            color: "#fff",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          {editMode ? "Update Post" : "Create Post"}
        </button>
        {editMode && (
          <button
            type="button"
            onClick={handleCancelEdit}
            style={{
              background: "#700000",
              color: "#fff",
              border: "none",
              padding: "10px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <h2
        style={{
          color: "#ff4d4d",
          textShadow: "0 0 10px red",
          marginTop: "20px",
        }}
      >
        Posts List
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            color: "#fff",
            marginTop: "10px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{ borderBottom: "2px solid #700000", padding: "10px" }}
              >
                Title
              </th>
              <th
                style={{ borderBottom: "2px solid #700000", padding: "10px" }}
              >
                Created At
              </th>
              <th
                style={{ borderBottom: "2px solid #700000", padding: "10px" }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td
                  style={{
                    borderBottom: "1px solid #700000",
                    padding: "10px",
                  }}
                >
                  {post.title}
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #700000",
                    padding: "10px",
                  }}
                >
                  {new Date(post.createdAt).toLocaleString()}
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #700000",
                    padding: "10px",
                  }}
                >
                  <button
                    onClick={() => handleEditPost(post)}
                    style={{
                      background: "#ff4d4d",
                      color: "#fff",
                      border: "none",
                      padding: "5px 10px",
                      marginRight: "5px",
                      cursor: "pointer",
                      borderRadius: "5px",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeletePost(post._id)}
                    style={{
                      background: "#8b0000",
                      color: "#fff",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                      borderRadius: "5px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PostsComponent;
