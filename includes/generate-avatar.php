<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Get the image data from the POST request
    $imageData = $_POST['image'];

    // Convert the base64-encoded image data to binary
    $binaryData = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $imageData));

    // Generate a unique name for the image file using a timestamp
    $timestamp = time();
    $imageName = "pixels_{$timestamp}.png";

    // Save the image to a file
    file_put_contents("../public/pixels-image/{$imageName}", $binaryData);

    
    // Send back the image name to the client
    // echo json_encode(['imageName' => $imageName]);

} else {
    // Handle other types of requests if needed
    echo json_encode(['error' => 'Invalid request method']);
    header("Location: ../index.php");

}

header("Location: ../index.php");

?>
