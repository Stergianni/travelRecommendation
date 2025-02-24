// This will attempt to fetch the JSON data and handle any errors
fetch('travel_recommendation_api.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Fetched data:', data);  // Log the data for debugging
    if (data && data.recommendations) {
      displayRecommendations(data.recommendations);
    } else {
      console.log('No recommendations found.');
    }
  })
  .catch(error => {
    console.error('Error fetching the recommendations:', error);
  });

function displayRecommendations(recommendations) {
  // If the recommendations array is valid, loop through it
  if (Array.isArray(recommendations)) {
    recommendations.forEach(rec => {
      // Display each recommendation here, for example:
      console.log('Recommendation:', rec.name);
      // You could also dynamically update the DOM with the recommendations
    });
  } else {
    console.log('No valid recommendations array found.');
  }
}
