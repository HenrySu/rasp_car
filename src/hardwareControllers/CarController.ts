import WheelController from "./WheelController";

export default class CarController {

    constructor(leftWheel: WheelController, rightWheel: WheelController) {
        this._leftWheel = leftWheel;
        this._rightWheel = rightWheel;
    }

    private _leftWheel: WheelController;
    private _rightWheel: WheelController;
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
    setSpeed(speed: number) {
        this._leftWheel.speed = speed;
        this._rightWheel.speed = speed;
    }
}

module.exports = CarController;