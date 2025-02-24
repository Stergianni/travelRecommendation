// Sample data for recommendations (can be fetched from the JSON file)
const recommendations = [
    { name: 'Beach Resort', category: 'beach', description: 'A beautiful sandy beach resort.' },
    { name: 'Ancient Temple', category: 'temple', description: 'A historical temple with rich culture.' },
    { name: 'Tropical Island', category: 'beach', description: 'A peaceful tropical island with stunning beaches.' },
    { name: 'Golden Temple', category: 'temple', description: 'A sacred golden temple in the mountains.' },
    { name: 'Paris', category: 'country', description: 'The capital city of France, known for its culture and landmarks.' },
    { name: 'New York', category: 'country', description: 'A major city in the USA with a rich cultural history.' }
  ];
  
  // Function to search recommendations based on user input
  function searchRecommendations() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase(); // Capture user input
    const resultsContainer = document.getElementById('recommendationResults');
    resultsContainer.innerHTML = ''; // Clear previous results
  
    if (!searchInput) {
      resultsContainer.innerHTML = 'Please enter a keyword to search.';
      return;
    }
  
    // Normalize variations of keywords (e.g., pluralization)
    const keywords = ['beach', 'temple', 'country'];
    const normalizedInput = searchInput.toLowerCase();
  
    const filteredRecommendations = recommendations.filter(rec => {
      // Check if the category or name contains the keyword
      return (
        rec.name.toLowerCase().includes(normalizedInput) || 
        rec.category.toLowerCase().includes(normalizedInput)
      );
    });
  
    if (filteredRecommendations.length > 0) {
      filteredRecommendations.forEach(rec => {
        // Create and display result items
        const resultItem = document.createElement('div');
        resultItem.classList.add('recommendation-item');
        resultItem.innerHTML = `
          <h3>${rec.name}</h3>
          <p><strong>Category:</strong> ${rec.category}</p>
          <p>${rec.description}</p>
        `;
        resultsContainer.appendChild(resultItem);
      });
    } else {
      resultsContainer.innerHTML = 'No recommendations found for the given keyword.';
    }
  }
  
  // Function to reset search results
  function resetSearch() {
    document.getElementById('searchInput').value = ''; // Clear the input field
    document.getElementById('recommendationResults').innerHTML = ''; // Clear the results
  }
  
  // Event listeners for buttons
  document.getElementById('searchBtn').addEventListener('click', searchRecommendations);
  document.getElementById('resetBtn').addEventListener('click', resetSearch);
  