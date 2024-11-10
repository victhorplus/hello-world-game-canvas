const canvas: HTMLCanvasElement = document.getElementById("main") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
const player1: SquarePlayer = new SquarePlayer(canvas);
const player2: SquarePlayer = new SquarePlayer(canvas);
const objects: Array<SquarePlayer> = [];

function main(): void {
    player1.label = 'P1';
    player1.width = 100;
    player1.height = 100;
    player1.speed = 2;
    player1.AddKeyListeners();
    
    player2.label = 'P2';
    player2.width = 100;
    player2.height = 100;
    player2.speed = 3;
    player2.movementKeys = {
        up: 'w',
        down: 's',
        left: 'a',
        right: 'd',
    };
    player2.AddKeyListeners();

    objects.push(player1);
    objects.push(player2);
    setInterval(update, 10);
}

function update(): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let object of objects){
        object.draw();
    }
}

main();