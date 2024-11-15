const searchGithub = async (searchTerm: string) => {
  try {
    console.log("Search Term in API:", searchTerm); // Log to check if the searchTerm is passed correctly
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchTerm}&per_page=10`, // Use GitHub search API for users
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`, // Ensure this token is set correctly
        },
      }
    );

    if (!response.ok) {
      throw new Error('Invalid API response');
    }

    const data = await response.json();
    console.log("API Response Data:", data); // Log API response to check if we get the user data

    // Save results to localStorage
    localStorage.setItem('candidates', JSON.stringify(data.items));
    return data.items;
  } catch (err) {
    console.error("Error fetching candidates:", err);
    return [];
  }
};

export { searchGithub };
