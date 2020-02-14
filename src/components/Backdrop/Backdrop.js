import React, { Component } from "react";
import { Meteor } from "./Objects/Meteor";
import { Star } from "./Objects/Star";
import styles from "./Backdrop.module.scss";
export default class Backdrop extends Component {
    constructor(props){
        super(props);
        this.canvasRef = React.createRef();
    }
  ctx = null;
  stars = [];
  meteors = [];
  starPositions = [];

  componentDidMount = () => {
    window.addEventListener("resize", this.updateCanvasDimensions);
    this.setupCanvas();
  };

  updateCanvasDimensions = () => {
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
    console.log("resizing");
  };

  setupCanvas = () => {
    this.ctx = this.canvasRef.current.getContext("2d");
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
    this.seedStars(1000);
    window.requestAnimationFrame(() => this.animationLoop());
  };

  seedStars = starNumber => {
    for (let i = 0; i < starNumber; i++) {
      const x = this.getRandint(1, 2400);
      const y = this.getRandint(1, 1000);
      const startX = x;
      const startY = y;
      const radius = Math.random() * 0.8 + 0.2;
      const star = new Star(
        radius,
        "rgb(255,255,255",
        x,
        y,
        startX,
        startY,
        this.ctx
      );
      this.starPositions.push([x, y]);
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
    for (let i = 0; i < this.stars.length; i++) {
      //star in reach of mouse
      this.stars[i].update();
    }
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
    let x;
    if (this.ctx.canvas.width < 500) {
      x = this.getRandint(1, 800);
    } else {
      x = this.getRandint(1, this.ctx.canvas.width);
    }
    const y = 1;
    if (this.getRandint(0, 800) < 5) {
      this.meteors.push(new Meteor(4000, 3, "rgb(0,100,100", x, y, this.ctx));
    }
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].draw();
    }
    for (let i = 0; i < this.meteors.length; i++) {
      if (!this.meteors[i].remove) {
        this.meteors[i].setDelta();
        this.meteors[i].draw();
      }
    }
    window.requestAnimationFrame(() => this.animationLoop());
  };

  render() {
    return <canvas className={styles.canvas} ref={this.canvasRef}></canvas>;
  }
}
