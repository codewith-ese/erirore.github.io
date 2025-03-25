const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


// Cache the list and the items
const list = document.querySelector('.navigation');
const links = list.querySelectorAll('a');

// Add one listener to the list element
list.addEventListener('click', handleClick);

// Handle link clicks
function handleClick(e) {
    if (e.target.matches('a')) {
        e.preventDefault(); // Prevent the default anchor behavior
        links.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
        
        // Optionally, navigate to the link's href after a short delay
        setTimeout(() => {
            window.location.href = e.target.href;
        }, 200); // Adjust the delay as needed
    }
}