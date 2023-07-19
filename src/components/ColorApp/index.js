import React, { Component } from "react";
import styles from "./ColorApp.module.css";
export default class ColorApp extends Component {
  constructor() {
    super();
    this.state = {
      colorList: [
        "red",
        "green",
        "purple",
        "pink",
        "blue",
        "yellow",
        "black",
        "gray",
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  getRandomColor() {
    const { colorList } = this.state;
    const randomIndex = Math.floor(Math.random() * colorList.length);
    return colorList[randomIndex];
  }

  handleClick(index) {
    const newColors = [...this.state.colorList];
    newColors[index] = this.getRandomColor();
    this.setState({ colorList: newColors });
  }
  render() {
    return (
      <>
        {this.state.colorList.map((color, index) => (
          <div
            key={index}
            onClick={() => this.handleClick(index)}
            className={styles["color-box"]}
            style={{ background: color }}
          ></div>
        ))}
      </>
    );
  }
}
