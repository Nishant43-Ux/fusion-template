import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://fusion-backend-jzdm.onrender.com";

function PreRegistrationsComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPreRegistrations = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/admin/data`);
      setData(response.data.data.preRegistered);
    } catch (error) {
      console.error("Failed to fetch pre-registrations:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPreRegistrations();
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
        Pre-Registrations
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <p>No pre-registrations available.</p>
      ) : (
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
                style={{ padding: "10px", borderBottom: "2px solid #700000" }}
              >
                Email
              </th>
              <th
                style={{ padding: "10px", borderBottom: "2px solid #700000" }}
              >
                Name
              </th>
              <th
                style={{ padding: "10px", borderBottom: "2px solid #700000" }}
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
      )}
    </div>
  );
}

export default PreRegistrationsComponent;
