import { useState } from "react";

export function useInsertShoe() {
  const [loading1, setLoading] = useState(false); // To track loading state
  const [error1, setError] = useState(null); // To store any error message
  const [success, setSuccess] = useState(false); // To track if the request was successful

  const insertShoe = async (shoeData, isNewItem) => {
    setLoading(true); // Start loading
    setError(null); // Reset previous error
    setSuccess(false); // Reset success state before making the request

    try {
      const requestComponents = isNewItem
        ? {
            url: "https://673b0d30339a4ce4451a586f.mockapi.io/MyShop/shoesItems",
            method: "POST",
          }
        : {
            url: `https://673b0d30339a4ce4451a586f.mockapi.io/MyShop/shoesItems/${shoeData.id}`,
            method: "PUT",
          };

      // API endpoint where the shoe data will be posted
      const response = await fetch(requestComponents.url, {
        method: requestComponents.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shoeData),
      });

      if (!response.ok) {
        throw new Error("Failed to insert shoe data");
      }

      const data = await response.json(); // Parse response JSON

      // If the request was successful, update state
      setSuccess(true);
      console.log("Inserted shoe data:", data); // You can handle success, or return it
    } catch (err) {
      // If an error occurs, set the error state
      setError(err.message);
    } finally {
      setLoading(false); // Finish loading
    }
  };

  return { insertShoe, loading1, error1, success };
}
