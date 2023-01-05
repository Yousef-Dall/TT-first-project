import React, { Component } from "react";
import "./game.css";

export default class Games extends Component {
  render() {
    return (
      <div className="game">
        <div className="sidebar">
          <div className="icons">
            <img className="icon" src="./imgs/Game-two (游戏).png" alt="" />
            <div className="three">
              <img className="icon" src="./imgs/Like (喜欢).png" alt="" />
              <img
                className="icon"
                src="./imgs/Setting-two (设置).png"
                alt=""
              />
              <img className="icon" src="./imgs/Puzzle (拼图).png" alt="" />
            </div>
            <div className="theme">
              <img className="themeicons" src="./imgs/Moon (月亮).png" alt="" />
              <img
                className="themeicons"
                src="./imgs/Sun-one (太阳1).png"
                alt=""
              />
            </div>
          </div>
          <img className="border" src="./imgs/Rectangle 5.png" alt="" />
        </div>
        <div className="contain">
          <div className="wel-back">
            <div>
              <p>welcome back</p>
              <p>jenny</p>
            </div>
            <img src="./imgs/Property 1=Default (3).png" alt="" />
          </div>
          <p className="newgames">NEW GAMES </p>
          <div className="imgs-con">
            <img
              className="game-img"
              src="./imgs/Property 1=Default (2).png"
              alt=""
            />
            <img
              className="game-img"
              src="./imgs/Property 1=Default (2).png"
              alt=""
            />
            <img
              className="game-img"
              src="./imgs/Property 1=Default (2).png"
              alt=""
            />
            <img
              className="game-img"
              src="./imgs/Property 1=Default (2).png"
              alt=""
            />
          </div>
          <div className="lastcon">
            <div>
              <p>Last played</p>
              <div className="last">
                <img src="./imgs/Property 1=Default (5).png" alt="" />
                <p>Hogwarts Legacy 50%</p>
              </div>
              <div className="last">
                <img src="./imgs/Property 1=Default (5).png" alt="" />
                <p>Hogwarts Legacy 50%</p>
              </div>
              <div className="last">
                <img src="./imgs/Property 1=Default (5).png" alt="" />
                <p>Hogwarts Legacy 50%</p>
              </div>
              <div className="last">
                <img src="./imgs/Property 1=Default (5).png" alt="" />
                <p>Hogwarts Legacy 50%</p>
              </div>
            </div>
            <div>
              <p>most recent trophy</p>
              <div className="gg">
                <img className="kl" src="./imgs/Rectangle 11.png" alt="" />
                <img className="gree" src="./imgs/Ellipse 1 (1).png" alt="" />
                <img
                  className="troph"
                  src="./imgs/png-clipart-disgaea-3-playstation-3-playstation-4-xbox-360-trophy-golden-cup-game-medal 1.png"
                  alt=""
                />
              </div>
            </div>
            <div>
              <p>friends</p>
              <img className="friends" src="./imgs/2023-01-05.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
