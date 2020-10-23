const d = document;

let x = 0,
    y = 0;

export const moveBall = (e, ball, stage) => {

    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    const limitBall = $ball.getBoundingClientRect();
    const limitStage = $stage.getBoundingClientRect();
    // console.log(e.keyCode);
    // console.log(e.key);

    // console.log(limitBall, limitSatge);

    switch (e.keyCode) {
        // Izquierda
        case 37:
            if (limitBall.left > limitStage.left) x--;
            e.preventDefault();
            break;
        case 65:
            if (limitBall.left > limitStage.left) x--;
            break;
            // Arriba
        case 38:
            if (limitBall.top > limitStage.top) {

                y--;
                e.preventDefault();
            }
            break;
        case 87:
            if (limitBall.top > limitStage.top) y--;
            break;
            // derecha
        case 39:
            if (limitBall.right < limitStage.right) x++;
            e.preventDefault();
            break;
        case 68:
            if (limitBall.right < limitStage.right) x++;
            break;
            //abajo
        case 83:
            if (limitBall.bottom < limitStage.bottom) y++;
            break;
        case 40:
            if (limitBall.bottom < limitStage.bottom) {

                y++;
                e.preventDefault();
            }
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;



}

export const shortcuts = (e) => {
    // console.log(e);
    // console.log(e.type);
    // console.log(e.keyCode);
    // console.log(e.key);
    // console.log(e.ctrlKey);
    // console.log(e.altKey);
    // console.log(e.shiftKey);

    if (e.key === 'a' && e.altKey) {
        alert("Has lanzado una alerta con el teclado");
    }

    if (e.key === 'p' && e.altKey) {
        prompt("Has lanzado una promt");
    }

    if (e.key === 'c' && e.altKey) {
        confirm("Has lanzado una ventana de confirmación");
    }
}