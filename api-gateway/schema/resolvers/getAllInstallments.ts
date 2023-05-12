const MICROSERVICE3_API_ENDPOINT = process.env.MICROSERVICE3_API_ENDPOINT;

export async function getAllInstallments() {
  try {
    const response = await fetch(
      MICROSERVICE3_API_ENDPOINT + "/api/v1/installments"
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
    return [];
  }
}