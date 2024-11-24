import { useState, useEffect } from "react";



// Custom Hook to get shoe by ID
export function useGetShoeById(shoeId) {

  const [shoe, setShoe] = useState(null); // Local state for shoe data
  const [error, setError] = useState(null); // To store any error that occurs during fetching
  const [loading, setLoading] = useState(true); // To track loading state

  useEffect(() => {
    // Check if shoe is already in localStorage
    const cachedShoe = JSON.parse(localStorage.getItem("currentShoe"));
    if (cachedShoe) {
      // If shoe data exists in localStorage, set it and stop loading
      setShoe(cachedShoe);
      setLoading(false);
    } else {
      //use the matched selector
      fetchShoeById(shoeId);
    }

    // Cleanup function to clear localStorage when leaving the page
    return () => {
      localStorage.removeItem("currentShoe"); // Remove the shoe data from localStorage when the component is unmounted
    };
  }, [shoeId]);


  // Function to fetch shoe data by ID
  const fetchShoeById = async (id) => {
    try {
      setLoading(true); // Set loading to true while fetching
      const response = await fetch(
        `https://673b0d30339a4ce4451a586f.mockapi.io/MyShop/shoesItems/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch shoe data");
      }
      const data = await response.json();

      // Update localStorage with the fetched data
      localStorage.setItem(id, JSON.stringify(data));

      // Set the shoe data in state
      setShoe(data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (err) {

      setError(err.message);
      setLoading(false); // Set loading to false on error
    }
  };

  return { shoe, error, loading };
}
