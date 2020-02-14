export class Star {
  constructor(size, color, x, y, startX, startY, ctx) {
    const opacityCalc = (100 / this.y) * 4.2;
    if (opacityCalc > 0.8) {
      this.opacity = opacityCalc > 1 ? 1 : opacityCalc;
    } else if (opacityCalc < 0.2) {
      this.opacity = 0.2;
    } else {
      this.opacity = opacityCalc;
    }
    this.currentX = startX;
    this.currentY = startY;
    this.then = Date.now();
    this.ctx = ctx;
    this.color = color;
    this.size = size;
    this.x = x;
    this.y = y;

  }
  opacity;
  sizeInc;
  sizeChange = 0.0015;
  mouseX = 0;
  mouseY = 0;
  currentX;
  currentY;
  speed = 600;
  now;
  then;
  counter = 1;
  getAngle = () => {
    const dy = this.startY - this.y;
    const dx = this.startX - this.x;
    let theta = Math.atan2(-dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
  };

  draw = () => {
    this.ctx.beginPath();
    this.ctx.moveTo(this.currentX, this.currentY);
    this.ctx.arc(this.currentX, this.currentY, this.size, 0, Math.PI * 2, true);
    this.ctx.fillStyle = this.color + ", " + this.opacity + ")";
    this.ctx.closePath();
    this.ctx.fill();
  };
 
  update = () => {
    const tempThen = this.then;
    this.now = Date.now();
    const distance = this.speed * ((this.now - tempThen) / 1000);
    this.then = this.now;
    this.counter++;

    if (this.currentY < this.y) {
      this.currentY += distance;
    }
    if (this.currentY > this.y) {
      this.currentY -= distance;
    }

    if (this.size > 1.5 || this.size < 0.9) {
      this.sizeChange = -this.sizeChange;
    }
    this.size += this.sizeChange;
  };
}
