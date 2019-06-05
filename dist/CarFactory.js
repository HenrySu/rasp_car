"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WheelMotorController_1 = __importDefault(require("./hardwareControllers/WheelMotorController"));
const CarController_1 = __importDefault(require("./hardwareControllers/CarController"));
class CarFactory {
    createZhiyuCar() {
        const leftWheel = new WheelMotorController_1.default({ ForwardPinNum: 22, BackwardPinNum: 27, PwmPinNum: 18 });
        const rightWheel = new WheelMotorController_1.default({ ForwardPinNum: 25, BackwardPinNum: 24, PwmPinNum: 23 });
        return new CarController_1.default(leftWheel, rightWheel);
    }
}
exports.default = CarFactory;
//# sourceMappingURL=CarFactory.js.map