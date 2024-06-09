

document.getElementById('generateButton').addEventListener('click', function () {

    // Create a canvas and get its context
    const canvasSize = 200;
    const pixelSize = 20;
    const numPixels = canvasSize / pixelSize;

    var canvas = document.getElementById('avatarCanvas');
    var context = canvas.getContext('2d');

    // Function to generate a random color
    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    // Function to draw a pixel
    function drawPixel(x, y, color) {
        context.fillStyle = color;
        context.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    }

    // Function to draw a symmetric pixel
    function drawSymmetricPixel(x, y, color) {
        drawPixel(x, y, color);
        drawPixel(numPixels - 1 - x, y, color);
        drawPixel(x, numPixels - 1 - y, color);
        drawPixel(numPixels - 1 - x, numPixels - 1 - y, color);
    }

    // Generate the avatar with symmetry
    for (var x = 0; x < numPixels / 2; x++) {
        for (var y = 0; y < numPixels / 2; y++) {
            var isWhite = Math.random() > 0.5;
            var pixelColor = isWhite ? '#ffffff' : getRandomColor();
            drawSymmetricPixel(x, y, pixelColor);
        }
    }

    // Convert the canvas to a data URL
    let dataURL = canvas.toDataURL('image/png');


    var formData = new FormData();
    formData.append('image', dataURL);

    
    // Send the FormData to the server
    fetch('./includes/generate-avatar.php', {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Image saved:', data.imageName);
            // location.reload();
            // window.location.href="/pixels"
        })
        // .catch(error => console.log('Error saving image:', error)); */
});

