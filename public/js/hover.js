
    document.addEventListener("DOMContentLoaded", function () {
        const canvas = document.getElementById("myCanvas");
        console.log(canvas)
        const ctx = canvas.getContext("2d");
    
        canvas.width = window.innerWidth -20;
        canvas.height = document.body.scrollHeight;
    
        canvas.addEventListener("mousemove", function (e) {
            const squareSize = 20;
            const x = e.clientX;
            const y = e.clientY + window.scrollY;
    
            ctx.fillStyle = getRandomColor();
            ctx.fillRect(Math.floor(x / squareSize) * squareSize, Math.floor(y / squareSize) * squareSize, squareSize, squareSize);
        });
    
        function getRandomColor() {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    })



