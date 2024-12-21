import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://fusion-backend-jzdm.onrender.com";

function AdminPanel() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("preRegistered");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (!adminToken) {
      navigate("/login");
    }
  }, [navigate]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/admin/data`);
      const responseData = response.data.data;
      setData(
        activeTab === "preRegistered"
          ? responseData.preRegistered
          : responseData.ContactMessages
      );
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);

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
      </div>

      {loading ? (
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              margin: "10px auto",
              border: "4px solid #f3f3f3",
              borderTop: "4px solid #3498db",
              borderRadius: "50%",
              width: "24px",
              height: "24px",
              animation: "spin 0.8s linear infinite",
            }}
          ></div>
          <style>
            {`
              @keyframes spin {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
            `}
          </style>
        </div>
      ) : (
        <div
          style={{
            background: "#1a0000",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2
            style={{
              color: "#ff4d4d",
              textShadow: "0 0 10px red",
              marginBottom: "20px",
            }}
          >
            {activeTab === "preRegistered"
              ? "Pre-Registrations"
              : "Contact Messages"}
          </h2>
          {data.length === 0 ? (
            <p style={{ textAlign: "center" }}>No data available.</p>
          ) : activeTab === "preRegistered" ? (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                color: "#fff",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "10px",
                      borderBottom: "2px solid #700000",
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      padding: "10px",
                      borderBottom: "2px solid #700000",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "10px",
                      borderBottom: "2px solid #700000",
                    }}
                  >
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item._id}>
                    <td
                      style={{
                        padding: "10px",
                        borderBottom: "1px solid #700000",
                      }}
                    >
                      {item.email}
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        borderBottom: "1px solid #700000",
                      }}
                    >
                      {item.name}
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        borderBottom: "1px solid #700000",
                      }}
                    >
                      {new Date(item.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {data.map((item) => (
                <li
                  key={item._id}
                  style={{
                    marginBottom: "20px",
                    background: "#2c0000",
                    padding: "15px",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px #8b0000",
                  }}
                >
                  <p>
                    <strong>Email:</strong> {item.email}
                  </p>
                  {item.name && (
                    <p>
                      <strong>Name:</strong> {item.name}
                    </p>
                  )}
                  {item.message && (
                    <p>
                      <strong>Message:</strong> {item.message}
                    </p>
                  )}
                  <p>
                    <strong>Created At:</strong>{" "}
                    {new Date(item.createdAt).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
