import pigpio from "pigpio";
import WheelConfig from "./WheelConfig";
// const Gpio = process.env.NODE_ENV !== "production" ?
//     require("pigpio-mock").Gpio :
//     require("pigpio").Gpio;
const Gpio = pigpio.Gpio;

export default class WheelController {
    constructor(wheelConfig: WheelConfig) {
        this.setupGpios(wheelConfig);
        this.Speed = 0;
    }
    public Speed: number = 0;
    private _forwardGpio: pigpio.Gpio;
    private _backwardGpio: pigpio.Gpio;
    private _pwmGpio: pigpio.Gpio;
    private _dutyCycle: number;

    setupGpios(wheelConfig: WheelConfig) {
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
