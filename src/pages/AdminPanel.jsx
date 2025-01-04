import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PreRegistrationsComponent from "./admin-components/pre-registration";
import PostsComponent from "./admin-components/PostComponent";
import ContactMessagesComponent from "./admin-components/ContactMessagesComponent";

function AdminPanel() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("preRegistered");

  // Check if user is logged in
  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (!adminToken) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/login");
  };

  return (
    <div
      style={{
        padding: "20px",
        paddingTop: "100px", // Space for the header
        color: "#fff",
        fontFamily: "Cinzel, serif",
        minHeight: "100vh",
        backgroundColor: "#121212",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#ff4d4d",
          textShadow: "0 0 10px red",
        }}
      >
        Admin Panel
      </h1>
      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <button
          onClick={handleLogout}
          style={{
            background: "linear-gradient(145deg, #ff4d4d, #8b0000)",
            color: "#fff",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Logout
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => setActiveTab("preRegistered")}
          style={{
            background: activeTab === "preRegistered" ? "#700000" : "#2c0000",
            color: "#fff",
            border: "1px solid #8b0000",
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "5px",
            margin: "5px",
          }}
        >
          Pre-Registrations
        </button>
        <button
          onClick={() => setActiveTab("ContactMessages")}
          style={{
            background: activeTab === "ContactMessages" ? "#700000" : "#2c0000",
            color: "#fff",
            border: "1px solid #8b0000",
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "5px",
            margin: "5px",
          }}
        >
          Contact Messages
        </button>
        <button
          onClick={() => setActiveTab("posts")}
          style={{
            background: activeTab === "posts" ? "#700000" : "#2c0000",
            color: "#fff",
            border: "1px solid #8b0000",
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "5px",
            margin: "5px",
          }}
        >
          Posts
        </button>
      </div>

      {activeTab === "preRegistered" && <PreRegistrationsComponent />}
      {activeTab === "ContactMessages" && <ContactMessagesComponent />}
      {activeTab === "posts" && <PostsComponent />}
    </div>
  );
}

export default AdminPanel;
