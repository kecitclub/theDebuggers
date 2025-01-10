// Simulated static data for spam strikes
let spamStrikes: { userId: string; reasons: string[]; timestamp: Date }[] = [];

export const SpamProtection = {
  async processPost(data: any, userId: string) {
    try {
      const response = await fetch("/api/spam-check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: data, userId }),
      });

      const result = await response.json();

      // Ensure the API response contains the isSpam field
      if (result && typeof result.isSpam === "boolean") {
        return result.isSpam; // Return true or false based on the isSpam field
      } else {
        console.error("Invalid response from spam detection API", result);
        return false; // Default to false if the response format is incorrect
      }
    } catch (error) {
      console.error("Error checking for spam", error);
      return false; // Return false if an error occurs during the spam check
    }
  },
};
