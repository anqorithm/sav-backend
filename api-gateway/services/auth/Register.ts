import { UserData } from "../../interfaces/UserInterface";

export async function registerUser(user: UserData) {
  try {
    console.log(process.env.AUTHENTICATION_MICROSERVICE_API_ENDPOINT);
    const response = await fetch(
      "http://auth-microservice:9000" + "/api/v1/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const contentType = response.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Response is not in JSON format");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to register user with microservice 2");
  }
}
