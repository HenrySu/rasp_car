import WheelController from "./hardwareControllers/WheelController";
import CarController from "./hardwareControllers/CarController";

export default class CarFactory {
    createZhiyuCar() {
        const leftWheel = new WheelController({ ForwardPinNum: 22, BackwardPinNum: 27, PwmPinNum: 18 });
        const rightWheel = new WheelController({ ForwardPinNum: 25, BackwardPinNum: 24, PwmPinNum: 23 });
        return new CarController(leftWheel, rightWheel);
    }
}