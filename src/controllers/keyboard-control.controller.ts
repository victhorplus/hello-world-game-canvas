class KeyboardControl {
    movementKeys: MovementKeysInterface;
    private keyPressed: { [key: string]: boolean };
    private keyFunctions: { [key: string]: Function };
    private object: DynamicObject

    constructor(object: DynamicObject, movementKeys?: MovementKeysInterface) {
        this.object = object;
        this.movementKeys = {
            up:     'ArrowUp',
            down:   'ArrowDown',
            left:   'ArrowLeft',
            right:  'ArrowRight',
            ...movementKeys
        }
        this.keyPressed = {};
        this.keyFunctions = {};
        this.AddKeyListeners();
    }
    
    updatePositionByKeyPressed(): void {
        for(let key in this.keyPressed){
            if(!this.keyPressed[key] || !this.keyFunctions[key]){ continue; }
            this.keyFunctions[key]();
        }
    }

    private AddKeyListeners(): void {
        this.initKeyFunctions();
        document.addEventListener("keydown", (event) => this.keyPressed[event.key] = true);
        document.addEventListener("keyup", (event) => delete this.keyPressed[event.key]);
    }

    private initKeyFunctions(): void {
        this.keyFunctions[this.movementKeys.up] = (() => this.object.moveUp());
        this.keyFunctions[this.movementKeys.down] = (() => this.object.moveDown());
        this.keyFunctions[this.movementKeys.left] = (() => this.object.moveLeft());
        this.keyFunctions[this.movementKeys.right] = (() => this.object.moveRight());
    }
}