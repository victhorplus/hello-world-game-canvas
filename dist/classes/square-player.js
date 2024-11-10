class SquarePlayer {
    constructor(canvas) {
        this.canvas = canvas;
        this.initDefaultValues();
        this.ctx = canvas.getContext('2d');
    }
    initDefaultValues() {
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
            ${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)}
        )`;
        this.keyPressed = {};
        this.keyFunctions = {};
    }
    moveRight() { this.x += this.speed; }
    moveLeft() { this.x -= this.speed; }
    moveUp() { this.y -= this.speed; }
    moveDown() { this.y += this.speed; }
    draw() {
        this.ctx.fillStyle = this.color;
        this.updatePositionByKeyPressed();
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        if (this.label)
            this.drawLabel();
    }
    drawLabel() {
        const ctxLabel = this.canvas.getContext('2d');
        const horizontalCenter = this.x + (this.width / 2) - 8;
        const verticalCenter = this.y + (this.height / 2) + 5;
        ctxLabel.fillStyle = 'black';
        ctxLabel.font = "20px arial";
        ctxLabel.fillText(this.label, horizontalCenter, verticalCenter);
    }
    updatePositionByKeyPressed() {
        for (let key in this.keyPressed) {
            if (!this.keyPressed[key] || !this.keyFunctions[key]) {
                continue;
            }
            this.keyFunctions[key]();
        }
    }
    AddKeyListeners() {
        this.initKeyFunctions();
        document.addEventListener("keydown", (event) => this.keyPressed[event.key] = true);
        document.addEventListener("keyup", (event) => delete this.keyPressed[event.key]);
    }
    initKeyFunctions() {
        this.keyFunctions = {};
        this.keyFunctions[this.movementKeys.up] = (() => this.moveUp());
        this.keyFunctions[this.movementKeys.down] = (() => this.moveDown());
        this.keyFunctions[this.movementKeys.left] = (() => this.moveLeft());
        this.keyFunctions[this.movementKeys.right] = (() => this.moveRight());
    }
}
