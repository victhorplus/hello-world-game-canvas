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
const player3: SquarePlayer = new SquarePlayer(canvas);
const player4: SquarePlayer = new SquarePlayer(canvas);
const player5: SquarePlayer = new SquarePlayer(canvas);
const player6: SquarePlayer = new SquarePlayer(canvas);

function main(): void {
    player1.label = 'P1';
    player1.speed = 2;
    player1.detectableObjects = objects;
    
    player2.label = 'P2';
    player2.x = 110;
    player2.speed = 5;
    player2.detectableObjects = objects;

    player3.label = 'P3';
    player4.label = 'P4';
    player5.label = 'P5';
    player6.label = 'P6';

    player3.x = 220;
    player4.x = 330;
    player5.x = 440;
    player6.x = 550;

    objects.push(player1);
    objects.push(player2);
    objects.push(player3);
    objects.push(player4);
    objects.push(player5);
    objects.push(player6);
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