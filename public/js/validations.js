console.log("Hola Validations");

const downloadPNGbuttons = document.querySelectorAll(".download-png-button");
const validationTexts = document.querySelectorAll(".validations");

const generateButton = document.querySelector("#generateButton");
const generateText = document.querySelector("#generateText");


generateButton.addEventListener("click", (e) => {
        console.log(generateText)
        generateText.style.color = "limegreen";
        generateText.innerText = "Generando Imagen";
        setTimeout(function() {
            generateText.innerText = " ";
        }, 4000) 
    
})



for ( let button of downloadPNGbuttons) {
    button.addEventListener("click", (e) => {
        console.log(e.target)
        console.log(button.id)
        for (let validation of validationTexts) {
            if (validation.id === button.id) {
                validation.style.color = "limegreen";
                validation.innerText = "Archivo PNG descargado con éxito"
                setTimeout(function() {
                    validation.innerText = " ";
                }, 4000)
            }
        }
    })
}


