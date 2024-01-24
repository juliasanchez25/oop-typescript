export class Car {
  private readonly motor = new Motor();
  start(): void {
    this.motor.start;
  }

  accelerate(): void {
    this.motor.accelerate;
  }

  stop(): void {
    this.motor.stop;
  }

  turnOff(): void {
    this.motor.turnOff;
  }
}

export class Motor {
  start(): void {
    console.log('Motor is starting the car');
  }

  accelerate(): void {
    console.log('Motor is accelerating the car');
  }

  stop(): void {
    console.log('Motor is stopping car');
  }

  turnOff(): void {
    console.log('Motor is turning off the car');
  }
}

const car = new Car();
car.start();
car.accelerate();
car.stop();
car.turnOff();
