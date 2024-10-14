async function fetchImages() {
    try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
        const response = await fetch('https://dog.ceo/api/breeds/image/random/10');
        const images = await response.json();
        console.log(images);
        // displayImages(images);
        displayImages(images.message);
    } catch (error) {
        console.error('Erreur lors du fetch:', error);
    }
}

function displayImages(images) {
    const gallery = document.getElementById('gallery');
    images.forEach(image => {
        const imgElement = document.createElement('img');
        // imgElement.src = image.url;
        imgElement.src = image;
        gallery.appendChild(imgElement);
    });
}

fetchImages();
