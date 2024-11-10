class SquarePlayer {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    label: string;
    speed: number;
    movementKeys: MovementKeysInterface;
    private keyPressed: { [key: string]: boolean };
    private keyFunctions: { [key: string]: Function };
    private ctx: CanvasRenderingContext2D;
    

    constructor(private canvas: HTMLCanvasElement){
        this.initDefaultValues();
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    }

    private initDefaultValues(): void {
        this.x = 0;
        this.y = 0;
        this.width = 30;
        this.height = 30;
        this.speed = 1;
        this.movementKeys = {
            up: 'ArrowUp',
            down: 'ArrowDown',
            left: 'ArrowLeft',
            right: 'ArrowRight',
        };
        this.color = `rgb(
            ${Math.floor(Math.random()*255)},
            ${Math.floor(Math.random()*255)},
            ${Math.floor(Math.random()*255)}
        )`;
        this.keyPressed = {};
        this.keyFunctions = {};
    }

    moveRight(): void { this.x += this.speed; }
    moveLeft(): void { this.x -= this.speed; }
    moveUp(): void { this.y -= this.speed; }
    moveDown(): void { this.y += this.speed; }

    draw(): void {
        this.ctx.fillStyle = this.color;
        this.updatePositionByKeyPressed();
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        if(this.label) this.drawLabel();
    }

    private drawLabel(): void {
        const ctxLabel = this.canvas.getContext('2d');
        const horizontalCenter = this.x + (this.width/2) - 8;
        const verticalCenter = this.y + (this.height/2) + 5;
        ctxLabel.fillStyle = 'black'
        ctxLabel.font = "20px arial"
        ctxLabel.fillText(this.label, horizontalCenter, verticalCenter);
    }

    private updatePositionByKeyPressed(): void {
        for(let key in this.keyPressed){
            if(!this.keyPressed[key] || !this.keyFunctions[key]){ continue; }
            this.keyFunctions[key]();
        }
    }

    AddKeyListeners(): void {
        this.initKeyFunctions();
        document.addEventListener("keydown", (event) => this.keyPressed[event.key] = true);
        document.addEventListener("keyup", (event) => delete this.keyPressed[event.key]);
    }

    private initKeyFunctions(): void {
        this.keyFunctions = {};
        this.keyFunctions[this.movementKeys.up] = (() => this.moveUp());
        this.keyFunctions[this.movementKeys.down] = (() => this.moveDown());
        this.keyFunctions[this.movementKeys.left] = (() => this.moveLeft());
        this.keyFunctions[this.movementKeys.right] = (() => this.moveRight());
    }
}