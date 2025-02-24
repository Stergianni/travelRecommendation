// travel_recommendation.js

document.getElementById('searchBtn').addEventListener('click', function () {
    fetchData();
});

document.getElementById('clearBtn').addEventListener('click', function () {
    document.getElementById('searchInput').value = '';
    document.getElementById('results').innerHTML = '';
});

async function fetchData() {
    const response = await fetch('travelRecommendation/travel_recommendation_api.json');
    const data = await response.json();
    handleSearch(data);
}

function handleSearch(data) {
    const query = document.getElementById('searchInput').value.toLowerCase();
    let resultsHTML = '';

    if (query.includes('beach')) {
        resultsHTML += displayRecommendations(data.beaches);
    }
    if (query.includes('temple')) {
        resultsHTML += displayRecommendations(data.temples);
    }
    if (query.includes('country')) {
        resultsHTML += displayRecommendations(data.countries);
    }
    
    document.getElementById('results').innerHTML = resultsHTML;
}

function displayRecommendations(items) {
    return items.map(item => `
        <div class="card mb-3">
            <img src="resources/${item.imageUrl}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
            </div>
        </div>
    `).join('');
}
