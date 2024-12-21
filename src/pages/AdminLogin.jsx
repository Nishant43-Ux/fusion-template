import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const adminPassword = "admin123"; // Hardcoded password for simplicity
    if (password === adminPassword) {
      localStorage.setItem("adminToken", "authenticated");
      navigate("/admin");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        paddingTop: "100px", // Added padding to avoid overlap with the header
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
        Admin Login
      </h1>
      <form
        onSubmit={handleLogin}
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          background: "#1a0000",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 10px #8b0000",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontSize: "16px",
              color: "#ff4d4d",
            }}
          >
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              background: "#2b0000",
              color: "#fff",
              border: "1px solid #700000",
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            background: "linear-gradient(145deg, #ff4d4d, #8b0000)",
            color: "#fff",
            border: "none",
            padding: "10px",
            width: "100%",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
