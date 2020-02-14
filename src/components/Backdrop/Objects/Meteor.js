export class Meteor {
  constructor(
    speed,
    size,
    color,
    x,
    y,
    ctx // CanvasRenderingContext2D
  ) {
    this.then = Date.now();
    this.ctx = ctx;
    this.color = color;
    this.size = size;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.remove = false;
    this.opacity = 1;
    this.linex = this.x + 1000;
    this.liney = this.y - 2000;
    this.inversey = this.y + 2000;
    this.now = undefined;
    this.then = undefined;
    this.delta = undefined;
  }
 
  getAngle = () => {
    const dy = this.liney - this.y;
    const dx = this.linex - this.x;
    let theta = Math.atan2(-dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
  };

  update = () => {
    const tempThen = this.then;
    this.now = Date.now();
    const distance = this.speed * ((this.now - tempThen) / 1000);
    this.then = this.now;
    const angle = this.getAngle(); //angle in degrees
    const angleRad = angle * (Math.PI / 180);
    this.x -= distance * Math.cos(angleRad);
    this.y += distance * Math.sin(angleRad);
    this.inversey -= distance * Math.sin(angleRad);
    this.opacity = (this.inversey / distance) * 0.01;
    if (this.inversey <= 0) {
      this.remove = true;
    }
  };

  setDelta = () => {
    this.now = Date.now();
    this.delta = (this.now - this.then) / 1000;
    this.then = this.now;
  };

  draw = () => {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
    this.ctx.fillStyle = this.color + ", " + this.opacity + ")";
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.linex, this.liney);
    this.ctx.strokeStyle = this.color + ", " + this.opacity + ")";
    this.ctx.stroke();
    this.ctx.closePath();
  };
}
