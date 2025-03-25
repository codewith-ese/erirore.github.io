// select the DOM elements for output
const yearPara = document.querySelector("#year");
const dateModifiedPara = document.querySelector("#date-modified");

// using the date object
const today = new Date();

// This code will display current year in first paragraph
yearPara.innerHTML = `©️: <span class="highlight">${today.getFullYear()}</span> 🗽Monday Erirore Eseinone 🗽 Nigeria Lagos🗽`;

// This code will display date modified in second paragraph
dateModifiedPara.innerHTML = `Date Modified: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short"
	}
).format(today)} ${today.toLocaleTimeString()}</span>`;


// This code will generate images dianamically 
const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	  templeName: "Dallas Texas Temple",
	  location: "Dallas, Texas, United States",
	  dedicated: "1984, October, 19-24",
	  area: 44207,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-1809-icon.jpg"
	},
	{
	  templeName: "Manila Philippines Temple",
	  location: "Greenmeadows Subdivision UGONG NORTE",
	  dedicated: "1984, September, 25-27",
	  area: 26683,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-44346.jpg"
	},
	{
	  templeName: "Grand Junction Colorado Temple",
	  location: "Colorado, United State",
	  dedicated: "2022, April 16",
	  area: 25000,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/grand-junction-colorado-temple/grand-junction-colorado-temple-53957.jpg"
	},
	{
	  templeName: "Nauvoo Illinois Temple",
	  location: "Nauvoo, Illinois, United State",
	  dedicated: "2022, June 27-30",
	  area: 54000,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-42923.jpg"
	},
	{
	  templeName: "Billings Montana Temple",
	  location: "Billings, Montana, United State",
	  dedicated: "1999, November, 20-21",
	  area: 54000,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/billings-montana-temple/billings-montana-temple-31624.jpg"
	},
	// Add more temple objects here...
  ];



  // create a container element to hold the cards
  const cardContainer = document.getElementById('card-container');
  
  // loop through the array and create a card for each image
  temples.forEach((imageUrl) => {
	const card = document.createElement('div');
	card.className = 'card';
  
	const imageElement = document.createElement('img');
	imageElement.src = imageUrl.imageUrl;
	imageElement.alt = imageUrl.templeName;
	imageElement.loading = "lazy";
  
	const titleElement = document.createElement('h2');
	titleElement.textContent = imageUrl.templeName;
  
	const locationElement = document.createElement('p');
	locationElement.textContent = `Location: ${imageUrl.location}`;

	const dedicatedElement = document.createElement('p');
	dedicatedElement.textContent = `Dedicated: ${imageUrl.dedicated}`;

	const areaElement = document.createElement('p');
	areaElement.textContent = `Area: ${imageUrl.area}`;
  
	card.appendChild(imageElement);
	card.appendChild(titleElement);
	card.appendChild(locationElement);
	card.appendChild(dedicatedElement);
	card.appendChild(areaElement);
  
	cardContainer.appendChild(card);
  });

