
// Unsplash API
const count = 10;
const apiKey = 'wScw-AG7Wq6bZK2JvT0_8LRp7d-R9u5YecsuLy52w7Y'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getPhotos();