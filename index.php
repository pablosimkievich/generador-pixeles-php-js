<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./public/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css" />
    <link rel="stylesheet" href="./public/css/styles.css">
    <title>Pixeles</title>
</head>

<body>



    <h1>Pixeles</h1>

    <div class="container">

        <canvas class="canvas" style="opacity:0.3;" id="myCanvas"></canvas>

        <div class="card">
            <?php
            $files = scandir("./public/pixels-image", $sorting_order = SCANDIR_SORT_DESCENDING);
            ?>
            <div>
                <img src="./public/pixels-image/<?php echo $files[0] ?>" alt="" class="image" width="200"
                    height="200" />
            </div>

            <canvas class=" " id="avatarCanvas" width="200" height="200" hidden> </canvas>

            <p> </p>


            <!-- Generar pixels !-->
            
                <button onClick="setTimeout( () => {
                    window.location.href='/pixels'}, 1000)"
                    id="generateButton">Generar Pixeles
                </button>
        


            <p>El archivo creado aparecerá a <br> 
                la derecha, primero en la lista.
            </p>
            <p id="generateText"></p>

        </div>
        <?php



        for ($i = 0; $i < count($files) - 2; $i++) { ?>
            <div class="card">

                <div class="">
                    <img class="image" src="./public/pixels-image/<?php echo $files[$i] ?>" alt="img">
                </div>

                <p class="">
                    <!-- Mostramos el nombre del archivo !-->
                    File:
                    <?php echo $files[$i]; ?>
                </p>
                <div>
                    <!-- Descargar Archivo PNG !-->
                    <a href="./public/pixels-image/<?php echo $files[$i]; ?>" download="<?php echo $files[$i]; ?>">
                        <button id="<?php echo $i ?>" class="download-png-button">Descargar archivo PNG</button>
                    </a>
                </div>

                <p id="<?php echo $i ?>" class="validations"> </p>

            </div>
            <?php
        } ?>

    </div>

    <script src="./public/js/hover.js" ></script>
    <script src="./public/js/script.js"></script>
    <script src="./public/js/validations.js"></script>
 
</body>

</html>