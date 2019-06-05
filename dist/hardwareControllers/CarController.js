"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CarController {
    constructor(leftWheel, rightWheel) {
        this._leftWheel = leftWheel;
        this._rightWheel = rightWheel;
    }
    // todo: use async and make all wheels move simutaniously
    moveForward() {
        this._leftWheel.forward();
        this._rightWheel.forward();
    }
    moveBackward() {
        this._leftWheel.backward();
        this._rightWheel.backward();
    }
    turnLeft() {
        this._leftWheel.backward();
        this._rightWheel.forward();
    }
    turnRight() {
        this._rightWheel.backward();
        this._leftWheel.forward();
    }
    stop() {
        this._rightWheel.stop();
        this._leftWheel.stop();
    }
    setSpeed(speed) {
        this._leftWheel.speed = speed;
        this._rightWheel.speed = speed;
    }
}
exports.default = CarController;
module.exports = CarController;
//# sourceMappingURL=CarController.js.map