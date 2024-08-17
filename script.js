const menuItems = {
    all: [
        { category: 'breakfast', title: 'Pancakes', description: 'Fluffy pancakes with syrup', price: '$5.99', image: 'pancakes.jpg' },
        { category: 'lunch', title: 'Burger', description: 'Juicy beef burger with fries', price: '$9.99', image: 'burger.jpg' },
        { category: 'shakes', title: 'Chocolate Shake', description: 'Rich chocolate shake', price: '$4.99', image: 'shake.jpg' },
        // Add more items as needed
    ],
    breakfast: [
        { title: 'Pancakes', description: 'Fluffy pancakes with syrup', price: '$5.99', image: 'pancakes.jpg' }
        // Add more breakfast items
    ],
    lunch: [
        { title: 'Burger', description: 'Juicy beef burger with fries', price: '$9.99', image: 'burger.jpg' }
        // Add more lunch items
    ],
    shakes: [
        { title: 'Chocolate Shake', description: 'Rich chocolate shake', price: '$4.99', image: 'shake.jpg' }
        // Add more shakes
    ]
};

function showCategory(category) {
    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = '';
    
    menuItems[category].forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <span>${item.price}</span>
        `;
        
        menuContainer.appendChild(itemDiv);
    });
}

// Show all items by default
showCategory('all');
