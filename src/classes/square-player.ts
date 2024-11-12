class SquarePlayer {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    label: string;
    speed: number;
    
    private ctx: CanvasRenderingContext2D;
    
    constructor(private canvas: HTMLCanvasElement){
        this.initDefaultValues();
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    }

    private initDefaultValues(): void {
        this.x = 0;
        this.y = 0;
        this.width = 100;
        this.height = 100;
        this.speed = 1;
        this.color = `rgb(
            ${Math.floor(Math.random()*255)},
            ${Math.floor(Math.random()*255)},
            ${Math.floor(Math.random()*255)}
        )`;
    }

    moveRight(): void { this.x += this.speed; }
    moveLeft(): void { this.x -= this.speed; }
    moveUp(): void { this.y -= this.speed; }
    moveDown(): void { this.y += this.speed; }

    draw(): void {
        this.ctx.fillStyle = this.color;
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

    

    

    setPosition(position: Coordinate): void {
        this.x = position.x;
        this.y = position.y;
    }

    getPosition(): Coordinate {
        return {
            x: this.x,
            y: this.y
        }
    }
}