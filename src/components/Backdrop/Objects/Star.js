export class Star {
  constructor(size, color, x, y, ctx) {
    const opacityCalc = (100 / y) * 4.2;
    if (opacityCalc > 0.8) {
      this.opacity = opacityCalc > 1 ? 1 : opacityCalc;
    } else if (opacityCalc < 0.2) {
      this.opacity = 0.2;
    } else {
      this.opacity = opacityCalc;
    }
    this.then = Date.now();
    this.ctx = ctx;
    this.color = color;
    this.size = size;
    this.x = x;
    this.y = y;
    this.sizeChange = 0.0015;
    this.speed = 600;
  }

  draw = () => {
    this.ctx.beginPath();
    this.ctx.moveTo(this.y, this.y);
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
    this.ctx.fillStyle = `${this.color},${this.opacity})`;
    this.ctx.closePath();
    this.ctx.fill();
  };

  update = () => {
    if (this.size > 1.5 || this.size < 0.9) {
      this.sizeChange = -this.sizeChange;
    }
    this.size += this.sizeChange;
  };
}
