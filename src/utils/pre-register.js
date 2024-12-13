import axios from "axios";

// MongoDB Data API Configuration
const API_URL =
  "https://ap-south-1.aws.data.mongodb-api.com/app/data-gzmokpb/endpoint/data/v1/action/insertOne";
const API_KEY =
  "rE22auBU5um6fZOzccwg81DnHvC4AFLJrTSs12tr4OZC29MEBKEWk5geLL9CizLq";

/**
 * Sends an email to the MongoDB collection via the Data API.
 * @param {string} email - The email to be added to the database.
 * @returns {Promise<Object>} - The response from the MongoDB Data API.
 */
export const sendEmailToDB = async (email) => {
  if (!email || typeof email !== "string") {
    throw new Error("Invalid email: A valid email string is required.");
  }

  const payload = {
    collection: "emails",
    database: "pre-register",
    dataSource: "Cluster0",
    document: { email },
  };

  try {
    const response = await axios.post(API_URL, payload, {
      headers: {
        "Content-Type": "application/json",
        "api-key": API_KEY,
      },
    });

    console.log("[INFO] Email sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "[ERROR] Failed to send email to DB:",
      error.response?.data || error.message
    );
    throw error;
  }
};
