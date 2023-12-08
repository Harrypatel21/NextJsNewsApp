const API_KEY = 'e1fbb205eb904fd9a44c2514f6700824'; // Replace with your actual API key

const fetchNews = async () => {
  try {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=3b55cf92e16474eddf1f81cdd1b2e37f`
    );

    if (!response.status=="ok") {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export { fetchNews };
