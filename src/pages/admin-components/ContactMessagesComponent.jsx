import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://fusion-backend-jzdm.onrender.com";

function ContactMessagesComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchContactMessages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/admin/data`);
      setData(response.data.data.contactMessages);
    } catch (error) {
      console.error("Failed to fetch contact messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContactMessages();
  }, []);

  return (
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
        Contact Messages
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <p>No contact messages available.</p>
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
  );
}

export default ContactMessagesComponent;
