abstract class DynamicObject {
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;

    constructor() {
        this.x = 0;
        this.y = 0;
        this.speed = 1;
    }

    abstract draw(): void;

    moveUp(): void { this.y -= this.speed; }
    moveDown(): void { this.y += this.speed; }
    moveRight(): void { this.x += this.speed; }
    moveLeft(): void { this.x -= this.speed; }
    
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