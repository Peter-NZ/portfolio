import React, { Component } from "react";
import { Meteor } from "./Objects/Meteor";
import { Star } from "./Objects/Star";
import styles from "./Backdrop.module.scss";
export default class Backdrop extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.ctx = null;
    this.stars = [];
    this.meteors = [];
    this.meteorResetCount = 0;
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.updateCanvasDimensions);
    this.setupCanvas();
  };

  updateCanvasDimensions = () => {
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
  };

  setupCanvas = () => {
    this.ctx = this.canvasRef.current.getContext("2d");
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
    this.seedStars(1000);
    window.requestAnimationFrame(this.animationLoop);
  };

  seedStars = starNumber => {
    for (let i = 0; i < starNumber; i++) {
      const x =
        window.innerWidth > 2600
          ? this.getRandint(1, window.innerWidth)
          : this.getRandint(1, 2600);
      const y =
        window.innerHeight > 1000
          ? this.getRandint(1, window.innerHeight)
          : this.getRandint(1, 1000);
      const radius = Math.random() * 0.8 + 0.2;
      const star = new Star(radius, "rgb(255,255,255", x, y, this.ctx);
      this.stars.push(star);
      star.draw();
    }
  };
  getRandint = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  update() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.stars.forEach(star => {
      star.draw();
    });
    for (let i = 0; i < this.meteors.length; i++) {
      this.meteors[i].update();
      if (this.meteors[i].remove) {
        //garbage collection
        this.meteors.splice(i, 1);
      }
    }
  }
  animationLoop = () => {
    this.update();
    const x =
      this.ctx.canvas.width < 500
        ? this.getRandint(1, 600)
        : this.getRandint(1, this.ctx.canvas.width);
    const y = 1;
    this.meteorResetCount++;
    console.log(this.meteorResetCount);
    if(this.meteorResetCount > 1000 || (this.getRandint(0, 200) < 5 && this.meteorResetCount > 100)){
      this.meteorResetCount = 0;
      this.meteors.push(new Meteor(4000, 3, "rgb(0,100,100", x, y, this.ctx));
    }

    this.stars.forEach(star => {
      star.draw();
    });
    this.meteors.forEach(meteor => {
      if (!meteor.remove) {
        meteor.setDelta();
        meteor.draw();
      }
    });
    window.requestAnimationFrame(this.animationLoop);
  };

  render() {
    return <canvas className={styles.canvas} ref={this.canvasRef}></canvas>;
  }
}
