"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pigpio_1 = __importDefault(require("pigpio"));
// const Gpio = process.env.NODE_ENV !== "production" ? 
//     require("pigpio-mock").Gpio : 
//     require("pigpio").Gpio;
const Gpio = pigpio_1.default.Gpio;
class WheelMotorController {
    constructor(wheelConfig) {
        this.Speed = 0;
        this.setupGpios(wheelConfig);
        this.Speed = 0;
    }
    setupGpios(wheelConfig) {
        this._forwardGpio = new Gpio(wheelConfig.ForwardPinNum, { mode: Gpio.OUTPUT });
        this._backwardGpio = new Gpio(wheelConfig.BackwardPinNum, { mode: Gpio.OUTPUT });
        this._pwmGpio = new Gpio(wheelConfig.PwmPinNum, { mode: Gpio.OUTPUT });
    }
    get speed() {
        return this._dutyCycle;
    }
    set speed(dutyCycle) {
        this._dutyCycle = dutyCycle;
        this._pwmGpio.pwmWrite(this._dutyCycle);
    }
    forward() {
        this._forwardGpio.digitalWrite(1);
        this._backwardGpio.digitalWrite(0);
    }
    backward() {
        this._forwardGpio.digitalWrite(0);
        this._backwardGpio.digitalWrite(1);
    }
    stop() {
        this._forwardGpio.digitalWrite(0);
        this._backwardGpio.digitalWrite(0);
    }
}
exports.default = WheelMotorController;
//# sourceMappingURL=WheelMotorController.js.map