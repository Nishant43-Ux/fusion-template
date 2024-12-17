import axios from "axios";

// New API Configuration
const API_URL = "https://fusion-backend-jzdm.onrender.com/pre-register";

/**
 * Sends an email to the backend API for pre-registration.
 * @param {Object} data - The pre-registration data (e.g., email, username, reason).
 * @returns {Promise<Object>} - The response from the API.
 */
export const sendEmailToDB = async (data) => {
  // Validation
  if (!data || typeof data.email !== "string") {
    throw new Error("Invalid input: A valid email is required.");
  }

  try {
    const response = await axios.post(API_URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("[INFO] Pre-registration successful:", response.data);
    return response;
  } catch (error) {
    console.error(
      "[ERROR] Failed to send pre-registration data:",
      error.response?.data || error.message
    );
    throw error;
  }
};
