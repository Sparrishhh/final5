let recommendations = [
    { 
        title: 'Mahabodhi Temple, Bihar, India',
        description: 'A sacred site where Buddha attained enlightenment, an architectural marvel.',
        imageUrl: 'temple2.png',
        keywords: ['temple', 'history']
    },
    { 
        title: 'Angkor Wat, Cambodia',
        description: 'A UNESCO World Heritage site and the largest religious monument in the world.',
        imageUrl: 'Temple.png',
        keywords: ['temple', 'history']
    },
    { 
        title: 'Plockton, Scotland',
        description: 'A picturesque village known for its stunning coastal views and traditional Scottish charm.',
        imageUrl: 'country2.png',
        keywords: ['country', 'scotland']
    },
    { 
        title: 'Arlesford, England',
        description: 'A charming village with scenic landscapes and historical architecture.',
        imageUrl: 'country.png',
        keywords: ['country', 'england']
    },
    { 
        title: 'Fulhadhoo, Maldives',
        description: 'An idyllic island with crystal-clear waters, perfect for a serene beach getaway.',
        imageUrl: 'beach.png',
        keywords: ['beach', 'maldives']
    },
    { 
        title: 'Hāʻena Beach Park, Kauai',
        description: 'Renowned for its stunning natural beauty and ideal for swimming and surfing.',
        imageUrl: 'beach2.png',
        keywords: ['beach', 'kauai']
    }
];

function searchRecommendations() {
    let searchInput = document.getElementById('search-input').value.toLowerCase();
    let dropdown = document.getElementById('dropdown');
    dropdown.innerHTML = ''; // Clear previous results

    if (searchInput) {
        recommendations.filter(function(recommendation) {
            return recommendation.title.toLowerCase().includes(searchInput) || 
                   recommendation.description.toLowerCase().includes(searchInput) || 
                   recommendation.keywords.some(keyword => keyword.toLowerCase().includes(searchInput));
        }).forEach(function(recommendation) {
            let div = document.createElement('div');
            div.textContent = `${recommendation.title}: ${recommendation.description}`;
            dropdown.appendChild(div);
        });
        dropdown.style.display = 'block'; // Show dropdown
    } else {
        dropdown.style.display = 'none'; // Hide dropdown if no input
    }
}

function clearSearch() {
    document.getElementById('search-input').value = '';
    document.getElementById('dropdown').style.display = 'none';
}
