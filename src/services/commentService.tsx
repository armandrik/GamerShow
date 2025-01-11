export const sendComment = async (comment: {
    name: string;
    body: string;
    productID: string;
  }) => {
    try {
      const response = await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });
  
      // Check if the response is ok (status is in the range 200–299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      return response; // Return the response object
    } catch (error) {
      console.error("Error sending comment:", error);
      throw error; // Propagate the error to handle it later
    }
  };
  