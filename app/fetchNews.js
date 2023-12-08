const API_KEY = 'e1fbb205eb904fd9a44c2514f6700824'; // Replace with your actual API key

const fetchNews = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );

    if (!response.status=="ok") {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export { fetchNews };
