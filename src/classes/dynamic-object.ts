abstract class DynamicObject {
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;
    label: string;
    detectableObjects: Array<DynamicObject>;

    constructor() {
        this.x = 0;
        this.y = 0;
        this.speed = 1;
    }

    abstract draw(): void;

    hasColision(newPosition: ICoordinate, object?: unknown): boolean { return false; }

    moveUp(): void {
        const newPosition: ICoordinate = {
            x: this.x,
            y: this.y - this.speed
        }
        if(this.detectColision(newPosition)){ return; }
        this.setPosition(newPosition);
    }
    moveDown(): void {
        const newPosition: ICoordinate = {
            x: this.x,
            y: this.y + this.speed
        }
        if(this.detectColision(newPosition)){ return; }
        this.setPosition(newPosition);
    }
    moveRight(): void { 
        const newPosition: ICoordinate = {
            x: this.x + this.speed,
            y: this.y
        }
        if(this.detectColision(newPosition)){ return; }
        this.setPosition(newPosition);
     }
    moveLeft(): void { 
        const newPosition: ICoordinate = {
            x: this.x - this.speed,
            y: this.y
        }
        if(this.detectColision(newPosition)){ return; }
        this.setPosition(newPosition);
    }
    
    setPosition(position: ICoordinate): void {
        this.x = position.x;
        this.y = position.y;
    }

    getPosition(): ICoordinate {
        return {
            x: this.x,
            y: this.y
        }
    }

    detectColision(newPosition: ICoordinate): boolean {
        let hasColision: boolean;
        this.detectableObjects
            ?.filter(object => object.label != this.label)
            ?.find(object => {
                hasColision = this.hasColision(newPosition, object);
                if(hasColision){
                    console.log("Colisão com: ", object.label);
                }
                return hasColision;
            });

        return hasColision;
    }
}