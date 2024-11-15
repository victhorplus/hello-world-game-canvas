class SquarePlayer extends DynamicObject {
    color: string;
    private ctx: CanvasRenderingContext2D;
    
    constructor(private canvas: HTMLCanvasElement){
        super();
        this.initDefaultValues();
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    }

    private initDefaultValues(): void {
        this.width = 100;
        this.height = 100;
        this.color = `rgb(
            ${Math.floor(Math.random()*255)},
            ${Math.floor(Math.random()*255)},
            ${Math.floor(Math.random()*255)}
        )`;
    }

    draw(): void {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        if(this.label) this.drawLabel();
    }

    private drawLabel(): void {
        const ctxLabel = this.canvas.getContext('2d');
        const horizontalCenter = this.x + (this.width/2) - 8;
        const verticalCenter = this.y + (this.height/2) + 5;
        ctxLabel.fillStyle = 'black';
        ctxLabel.font = "20px arial";
        ctxLabel.fillText(this.label, horizontalCenter, verticalCenter);
    }

    hasColision(newPosition: ICoordinate, object: SquarePlayer): boolean {
        let hasColision: boolean = false;
        for(let x = object.x; x <= (object.x + object.width); x++){
        for(let y = object.y; y <= (object.y + object.height); y++){
            const isInsideX: boolean = (newPosition.x <= x) && (x <= newPosition.x + this.width);
            const isInsideY: boolean = (newPosition.y <= y) && (y <= newPosition.y + this.height);
            if(isInsideX && isInsideY){
                hasColision = true;
                break;
            }
        }
        }
        return hasColision;
    }
}