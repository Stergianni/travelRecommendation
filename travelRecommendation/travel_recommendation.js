// Function to fetch recommendations from the JSON file
async function fetchRecommendations() {
    try {
      const response = await fetch('travel_recommendation_api.json');
      const data = await response.json();
      return data; // Return all the data (countries, temples, beaches)
    } catch (error) {
      console.error('Error fetching the recommendations:', error);
      return {};
    }
  }
  
  // Function to display the recommendations based on the keyword
  async function displayRecommendations(keyword) {
    const data = await fetchRecommendations();
    const resultsContainer = document.getElementById('recommendationResults');
    resultsContainer.innerHTML = ''; // Clear previous results
  
    // Normalize the keyword to lowercase for case-insensitive comparison
    const normalizedKeyword = keyword.toLowerCase();
    
    // Filter data based on the keyword (beach, temple, or country)
    let filteredResults = [];
  
    if (normalizedKeyword === 'beach') {
      filteredResults = data.beaches || [];
    } else if (normalizedKeyword === 'temple') {
      filteredResults = data.temples || [];
    } else if (normalizedKeyword === 'country') {
      filteredResults = data.countries || [];
    }
  
    // If results are found, display them
    if (filteredResults.length > 0) {
      filteredResults.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('recommendation-item');
        resultItem.innerHTML = `
          <h3>${item.name}</h3>
          <img src="${item.imageUrl}" alt="${item.name}" />
          <p>${item.description}</p>
        `;
        resultsContainer.appendChild(resultItem);
      });
    } else {
      resultsContainer.innerHTML = 'No recommendations found for the given keyword.';
    }
  }
  
  // Function to handle the search button click
  function handleSearch() {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput) {
      displayRecommendations(searchInput);
    } else {
      document.getElementById('recommendationResults').innerHTML = 'Please enter a valid keyword to search.';
    }
  }
  
  // Function to clear the search results when the clear button is clicked
  function clearResults() {
    document.getElementById('searchInput').value = ''; // Clear the search input
    document.getElementById('recommendationResults').innerHTML = ''; // Clear the results container
  }
  
  // Event listener for the search button
  document.getElementById('searchBtn').addEventListener('click', handleSearch);
  
  // Event listener for the reset button (optional, if you have a reset button)
  document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    document.getElementById('recommendationResults').innerHTML = '';
  });
  
  // Event listener for the clear button (new functionality)
  document.getElementById('clearBtn').addEventListener('click', clearResults);
  