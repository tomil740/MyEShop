import repository from "../repository";


export default async function getAllShoes(goOnline) {
  try {
    // Call the repository to fetch user data
    const userData = await repository.fetchAPIData();
    // You could add business logic here if necessary (e.g., data transformation)
    // For example, filtering or formatting the user data before returning

    return userData; // Return the data to the UI
  } catch (error) {
    // Handle business-related errors here if needed
    console.error("Error in use case:", error);
    throw error; // Propagate error to the UI layer
  }
}