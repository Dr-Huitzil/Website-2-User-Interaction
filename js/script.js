//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const saul_btn = document.querySelector(".saul_btn button");
const rei_btn = document.querySelector(".rei_btn button");
const fnaf_btn = document.querySelector(".fnaf_btn button");
const fish_btn = document.querySelector(".fish_btn button");

const rei_box = document.querySelector(".rei_meme");
const saul_box = document.querySelector(".saul_meme");
const fish_box = document.querySelector(".fish_meme");
const fnaf_box = document.querySelector(".fnaf_meme");
const info_box = document.querySelector(".info_box");

const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const reiquit_btn = rei_box.querySelector(".buttons .quit");
const reiplay_btn = rei_box.querySelector(".buttons .Reisound");
const saulquit_btn = saul_box.querySelector(".buttons .quit");
const saulplay_btn = saul_box.querySelector(".buttons .Saulsound");
const fishquit_btn = fish_box.querySelector(".buttons .quit");
const fishplay_btn = fish_box.querySelector(".buttons .Fishsound");
const fnafquit_btn = fnaf_box.querySelector(".buttons .quit");
const fnafplay_btn = fnaf_box.querySelector(".buttons .Fnafsound");

const game_box = document.querySelector(".game_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startgame button clicked
start_btn.onclick = () => {
  info_box.classList.add("activeInfo"); //show info box
  inforamtion();
}
rei_btn.onclick = () => {
  rei_box.classList.add("activeRei"); //show info box
}
saul_btn.onclick = () => {
  saul_box.classList.add("activeSaul"); //show info box
}
fish_btn.onclick = () => {
  fish_box.classList.add("activeFish"); //show info box
}
fnaf_btn.onclick = () => {
  fnaf_box.classList.add("activeFnaf"); //show info box
}

// if exitgame button clicked
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide info box
}
reiquit_btn.onclick = () => {
  rei_box.classList.remove("activeRei");
  document.getElementById('neon').pause();
}
saulquit_btn.onclick = () => {
  saul_box.classList.remove("activeSaul");
  document.getElementById('goodman').pause();
}
fishquit_btn.onclick = () => {
  fish_box.classList.remove("activeFish");
  document.getElementById('talk').pause();
}
fnafquit_btn.onclick = () => {
  fnaf_box.classList.remove("activeFnaf");
  document.getElementById('slaughter').pause();
}

//if play button is clicked
reiplay_btn.onclick = () => {
  document.getElementById('neon').play();
}
saulplay_btn.onclick = () => {
  document.getElementById('goodman').play();
}
fishplay_btn.onclick = () => {
  document.getElementById('talk').play();
}
fnafplay_btn.onclick = () => {
  document.getElementById('slaughter').play();
}

// variables
var win = 0;
var loss = 0;
var tries = 0;

var weezerBlue = "#00b6d5";


function inforamtion() {
  var list = new Array();
  list[0] = "1. There is only one challenge.";
  list[1] = "2. You can't exit from the Game while you're playing.";

  document.querySelector("#info1").innerHTML = list[0];
  document.querySelector("#info2").innerHTML = list[1];
}

function changeColor() {
  document.getElementById("getColor").addEventListener('change', (e) => {
    var color = e.target.value;
    var background = document.getElementById("color-output");

    console.log("comparing the color values");


    document.querySelector("#message").innerHTML = "";

    do {
      if (color != weezerBlue) {
        document.querySelector("#message").innerHTML = "WRONG";
        document.getElementById('buddy').pause();
        document.getElementById('hey').play();
        document.getElementById('hey').currentTime = 0;
        loss++;
      } else {
        document.getElementById('hey').pause();
        document.getElementById('buddy').play();
        win = 1;
        showResult();
        break;
      }

      tries++;
      updateScore();
    } while (tries >= 7865)


    background.style.backgroundColor = color;
    document.querySelector("#result").innerHTML = "Color Code: " + color;
  });
};

function updateScore() {
  var andre3000 = '<img src="img/51udEwcIpqL.jpg" width = 27px height = 27px >';

  document.querySelector("#score").innerHTML = andre3000 + "  Hey Ya!s: " + loss;
}

// if continuegame button clicked
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide info box
  game_box.classList.add("activegame");
  document.getElementById('hey').play();
  changeColor();

}

const restart_game = result_box.querySelector(".buttons .restart");
const quit_game = result_box.querySelector(".buttons .quit");

// if restartgame button clicked
restart_game.onclick = () => {
  //show game box
  result_box.classList.remove("activeResult"); //hide result box
  window.location.reload();

}

// if quitgame button clicked
quit_game.onclick = () => {
  window.location.reload(); //reload the current window
}


let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function showResult() {
  info_box.classList.remove("activeInfo"); //hide info box
  game_box.classList.remove("activegame"); //hide game box
  result_box.classList.add("activeResult"); //show result box
  document.querySelector("#complete_text").innerHTML = "YOUVE BEEN WEEZERED";
}