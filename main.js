const Gameboard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", "",]

  const render = () => {
    let boardHTML = "";
    gameboard.forEach((square, index) => {
      boardHTML += `<div class="square" id=square-${index}">${square}</div>`
    })
  }
  document.querySelector("#gameboard").innerHTML = boardHTML;

  return {
    render,
  }
})();

const createPlayer = (name, mark) => {
  return {
    name,
    mark
  }
}

const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", () => {
  // Game.start();
})