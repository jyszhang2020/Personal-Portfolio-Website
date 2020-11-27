// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];


// Init sets up the volume bars including highlighting three bars and creating references to the other bars.
var currentLevel;
function init() {
	// Your code goes here
	for (let i = 0; i < 6; i++) {
		let vol = document.getElementById('vl' + i);
		volLevels.push(vol);
	}
	currentLevel = 3;
	for (let i = 0; i < currentLevel; i++) {
		let vol = volLevels[i];
		vol.style.backgroundColor = '#9f5cc4';
	}
};

// volUp() work and are connected to the buttons.
function volUp() {
	// Your code goes here
	if (currentLevel == 6) {
		return;
	} else {
		let vol = volLevels[currentLevel];
		vol.style.backgroundColor = '#9f5cc4';
		currentLevel++;
	}
}


// volDown() work and are connected to the buttons.
function volDown() {
	// Your code goes here
	if (currentLevel == 0) {
		return;
	} else {
		currentLevel--;
		let vol = volLevels[currentLevel];
		vol.style.backgroundColor = '#ffffff';
	}
}

// startTimer() start updating input range
var timer;
function startTimer() {
	timer = setInterval(increment, 1000);
	function increment() {
		var input = document.getElementById("player-time");
		var currentTime = input.value;

		// when the currentTime equal to the max
		if (currentTime == input.max) {
			// call next song 
			nextSong();
		} else {
			currentTime++;
			input.value = currentTime;
		}
		update();
	}
}

// stopTimer() stop updating input range
function stopTimer() {
	clearInterval(timer);
}

// update() update timer
function update() {
	var currentTime = document.getElementById("player-time").value;
	var newInput = secondsToMs(currentTime);
	document.getElementById("time-elapsed").innerText = newInput;
}

// reset() reset timer to 0
function reset() {
	document.getElementById("time-elapsed").innerText = secondsToMs(0);
}

// switchPlay() works to toggle play/pause
function switchPlay() {
	// Your code goes here
	var playPause = document.getElementById("play-pause");
	if (playPause.innerText == "play_arrow") {
		// change to play icon
		var html = `<i class="material-icons">pause</i>`;
		playPause.innerHTML = html;
		startTimer();
	} else {
		// change to pause icon
		var html = `<i class="material-icons">play_arrow</i>`;
		playPause.innerHTML = html;
		stopTimer();
	}
}

// nextSong() move the current song back or forth.
function nextSong() {
	// Your code goes here
	var curSong = document.getElementById('player-song-name');
	for (let i = 0; i < tracklist.length; i++) {
		if (tracklist[i] == curSong.innerText) {
			if (i == tracklist.length - 1) {
				var html = `
					<p id="player-song-name">${tracklist[0]}</p>
				`;
			} else {
				var html = `
					<p id="player-song-name">${tracklist[i + 1]}</p>
				`;
			}
		}
	}
	curSong.innerHTML = html;
	document.getElementById('player-time').value = 0;
	reset();
}

// prevSong() move the current song back or forth.
function prevSong() {
	// Your code goes here
	var curSong = document.getElementById('player-song-name');
	for (let i = 0; i < tracklist.length; i++) {
		if (tracklist[i] == curSong.innerText) {
			if (i == 0) {
				var html = `
					<p id="player-song-name">${tracklist[tracklist.length - 1]}</p>
				`;
			} else {
				var html = `
					<p id="player-song-name">${tracklist[i - 1]}</p>
				`;
			}
		}
	}
	curSong.innerHTML = html;
	document.getElementById('player-time').value = 0;
	reset();
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();