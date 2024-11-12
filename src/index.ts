const canvas: HTMLCanvasElement = document.getElementById("main") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
const objects: Array<SquarePlayer> = [];
const player1: SquarePlayer = new SquarePlayer(canvas);
const player1Controller: KeyboardControl = new KeyboardControl(player1);
const player2: SquarePlayer = new SquarePlayer(canvas);
const player2Controller: KeyboardControl = new KeyboardControl(player2, {
    up: 'w',
    down: 's',
    left: 'a',
    right: 'd',
});

function main(): void {
    player1.label = 'P1';
    player1.speed = 2;
    
    player2.label = 'P2';
    player2.speed = 3;

    objects.push(player1);
    objects.push(player2);
    setInterval(update, 10);
}

function update(): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player1Controller.updatePositionByKeyPressed();
    player2Controller.updatePositionByKeyPressed();
    for(let object of objects){
        object.draw();
    }
}


main();