import React from "react";
import styles from "./tictactoe.module.css";

function Tictactoe() {
  function calculateWinner(mat) {
    for (let i = 0; i < 3; i++) {
      let bag = "";
      let bag2 = "";
      for (let j = 0; j < 3; j++) {
        bag = bag + mat[i][j];
        bag2 = bag2 + mat[j][i];
      }
      if (bag === "OOO" || bag2 === "OOO") {
        return "2";
      } else if (bag === "XXX" || bag2 === "XXX") {
        return 1;
      }
    }

    let bag = "";
    let bag2 = "";
    for (let i = 0; i < 3; i++) {
      bag = bag + mat[i][i];
      bag2 = bag2 + mat[mat.length - 1 - i][i];
    }
    if (bag === "OOO" || bag2 === "OOO") {
      return 2;
    } else if (bag === "XXX" || bag2 === "XXX") {
      return 1;
    }

    return false;
  }

  const [count, setCount] = React.useState(0);
  const [winner, setWinner] = React.useState(false);
  const [mat, setMat] = React.useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);
  const [turn, setTurn] = React.useState(1);

  function handleClick(i, j, id) {
    if (mat[i][j] === 0) {
      if (turn === 1) {
        mat[i][j] = "X";
        setMat(mat);
        setTurn(2);
        let img = document.querySelector(`#${id} > img`);
        img.src =
          "https://www.pinclipart.com/picdir/big/99-992857_inner-page-closing-comments-tic-tac-toe-x.png";
        img.alt = "x";
        setCount(count + 1);
      } else {
        mat[i][j] = "O";
        setMat(mat);
        setTurn(1);
        let img = document.querySelector(`#${id} > img`);
        img.src =
          "https://media.geeksforgeeks.org/wp-content/uploads/20201230114434/o-300x300.png";
        img.alt = "0";
        setCount(count + 1);
      }
      let ans = calculateWinner(mat);
      setWinner(ans);
    }
  }

  function restart() {
    setCount(0);
    setMat([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]);
    setTurn(1);
    setWinner(false);
  }
  return !winner && count !== 9 ? (
    <>
      <h3 style={{ color: "red" }}>Current Player: {turn}</h3>
      <div className={styles.container}>
        <div id="first" onClick={() => handleClick(0, 0, "first")}>
          <img />
        </div>
        <div id="second" onClick={() => handleClick(0, 1, "second")}>
          <img />
        </div>

        <div id="third" onClick={() => handleClick(0, 2, "third")}>
          <img />
        </div>

        <div id="fourth" onClick={() => handleClick(1, 0, "fourth")}>
          <img />
        </div>

        <div id="fifth" onClick={() => handleClick(1, 1, "fifth")}>
          <img />
        </div>

        <div id="sixth" onClick={() => handleClick(1, 2, "sixth")}>
          <img />
        </div>

        <div id="seventh" onClick={() => handleClick(2, 0, "seventh")}>
          <img />
        </div>

        <div id="eighth" onClick={() => handleClick(2, 1, "eighth")}>
          <img />
        </div>

        <div id="ninth" onClick={() => handleClick(2, 2, "ninth")}>
          <img />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          background: "whitesmoke",
          justifyContent: "space-around",
          width: "470px",
          margin: "auto",
          color: "green"
        }}
      >
        <p>Player 1 is X</p>
        <p>Player 2 is O</p>
      </div>
    </>
  ) : count === 9 ? (
    <>
      <h1>Tie</h1>
      <button onClick={() => restart()}>Restart</button>
    </>
  ) : (
    <>
      <h1>Winner: Player {winner}</h1>
      <button onClick={() => restart()}>Restart</button>
    </>
  );
}

export default Tictactoe;
