
var jugando;

$(document).ready(inicio);
$(document).keydown(capturaTeclado);

function inicio() {
    jugando = true;
    canvas = $("#canvas")[0];
    ctx = canvas.getContext("2d");
    buffer = document.createElement("canvas");
    //balon = new Balon();
    player = new Player();

    run();

}

function capturaTeclado(event) {
    if (event.which == 38 || event.which == 87)
        player.actualizar("up");
    if (event.which == 40 || event.which == 83)
        player.actualizar("down");
    if (event.which == 39 || event.which == 68)
        player.actualizar("right");
    if (event.which == 37 || event.which == 65)
        player.actualizar("left");
}

function run() {
    buffer.width = canvas.width;
    buffer.height = canvas.height;
    ctxBuffer = buffer.getContext("2d");

    if (jugando) {
        ctxBuffer.clearRect(0, 0, buffer.width, buffer.height);
        ctxBuffer.drawRect

        //balon.actualizar(ctxBuffer);
        player.dibujar(ctxBuffer, buffer.width / 2, buffer.height / 2);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgb(0,0,0)'
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(buffer, 0, 0);
        setTimeout("run()", 20);

    } else {
        ctxBuffer.clearRect(0, 0, buffer.width, buffer.height);
        ctxBuffer.fillStyle = "#ffffff";
        ctxBuffer.font = "50px sans-serif";
        ctxBuffer.fillText("GAMEOVER", 300, 440);
        ctxBuffer.fillStyle = "#ff0000";
        ctxBuffer.font = "15px sans-serif";
        ctxBuffer.fillText("try again", 550, 460);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(buffer, 0, 0);
    }

}