function f1() {
	//function to make the text bold using DOM method
	document.getElementById("textarea1").style.fontWeight = "bold";
}

function f2() {
	//function to make the text italic using DOM method
	document.getElementById("textarea1").style.fontStyle = "italic";
}

function f3() {
	//function to make the text alignment left using DOM method
	document.getElementById("textarea1").style.textAlign = "left";
}

function f4() {
	//function to make the text alignment center using DOM method
	document.getElementById("textarea1").style.textAlign = "center";
}

function f5() {
	//function to make the text alignment right using DOM method
	document.getElementById("textarea1").style.textAlign = "right";
}

function f6() {
	//function to make the text in Uppercase using DOM method
	document.getElementById("textarea1").style.textTransform = "uppercase";
}

function f7() {
	//function to make the text in Lowercase using DOM method
	document.getElementById("textarea1").style.textTransform = "lowercase";
}

function f8() {
	//function to make the text capitalize using DOM method
	document.getElementById("textarea1").style.textTransform = "capitalize";
}

function f9() {
	//function to make the text back to normal by removing all the methods applied
	//using DOM method
	document.getElementById("textarea1").style.fontWeight = "normal";
	document.getElementById("textarea1").style.textAlign = "left";
	document.getElementById("textarea1").style.fontStyle = "normal";
	document.getElementById("textarea1").style.textTransform = "capitalize";
	document.getElementById("textarea1").value = " ";
}

const el = document.querySelector('.injected');
el.innerHTML = '<p class="injected"><b>Instructions: </b><ol><li>Choose your options.</li><li>Write according to your prompt</li><li>Submit! And repeat!</li> </p>';

const submitDataEl = document.querySelector('.options');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});

// remove white space
function removeTextAreaWhiteSpace() {
var textarea1 = document.getElementById('textarea1');
textarea1.value = textarea1.value.replace(/^\s*|\s*$/g,'');
}

function increaseScore() {
  var score = document.getElementById('score');
  var textarea1 = document.getElementById('textarea1');
  score = 0;
}

function generate(){
  document.getElementById("prompt").innerHTML = '<h2>Prompt:</h2><br> <p>Describe your plans for the future in your target language.</p>';
}

function submit() {
  document.getElementById("submit").innerHTML = '<center>Do bettah.</center>';
}

// getting scores

class Game {

  constructor() {
    const playerNameEl = document.querySelector('.player-name');
    playerNameEl.textContent = this.getPlayerName();
    this.configureWebSocket();
  }

  async reset() {
    // Let other players know a new game has started
    this.broadcastEvent(this.getPlayerName(), GameStartEvent, {});
  }

  getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }

  updateScore(score) {
    const scoreEl = document.querySelector('#score');
    scoreEl.textContent = score;
  }

  async saveScore(score) {
    const userName = this.getPlayerName();
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newScore),
      });

      // Let other players know the game has concluded
      this.broadcastEvent(userName, GameEndEvent, newScore);

      // Store what the service gave us as the high scores
      const scores = await response.json();
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just track scores locally
      this.updateScoresLocal(newScore);
    }
  }

  updateScoresLocal(newScore) {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    localStorage.setItem('scores', JSON.stringify(scores));
  }

  // Functionality for peer communication using WebSocket

  configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
      this.displayMsg('system', 'game', 'connected');
    };
    this.socket.onclose = (event) => {
      this.displayMsg('system', 'game', 'disconnected');
    };
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === GameEndEvent) {
        this.displayMsg('player', msg.from, `scored ${msg.value.score}`);
      } else if (msg.type === GameStartEvent) {
        this.displayMsg('player', msg.from, `started a new game`);
      }
    };
  }

  displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

  broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  }
}

const game = new Game();
