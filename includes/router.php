<?php

$request = $_SERVER["REQUEST_URI"];

switch ($request) {

    case "/":

    case "":

        require __DIR__ . "../index.php";


    default:

        http_response_code(404);

        require __DIR__ . "./includes/404.php";

        break;

}

?>