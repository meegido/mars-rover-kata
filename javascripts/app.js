var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[this.x, this.y], "N"]
}

function turnLeft(rover){
  if(rover.direction === "N") {
    rover.direction = "W";
  } else if (rover.direction === "W") {
    rover.direction = "S";
  } else if (rover.direction === "S") {
    rover.direction = "E";
  } else if (rover.direction === "E") {
    rover.direction = "N";
  }
}

function turnRight(rover){
  if(rover.direction === "N") {
    rover.direction = "E";
  } else if (rover.direction === "E") {
    rover.direction = "S";
  } else if (rover.direction === "S") {
    rover.direction = "W";
  } else if (rover.direction === "W") {
    rover.direction = "N";
  }
}

function moveForward(rover){
  if(rover.direction === "N"){
    rover.y -= 1;
  } else if (rover.direction === "E") {
    rover.x += 1;
  } else if (rover.direction === "S") {
    rover.y += 1;
  } else if(rover.direction === "W") {
    rover.x -= 1;
  }
}

function moveBackward(rover){
  if(rover.direction === "N"){
    rover.y += 1;
  } else if (rover.direction === "E") {
    rover.x -= 1;
  } else if (rover.direction === "S") {
    rover.y -= 1;
  } else if(rover.direction === "W") {
    rover.x += 1;
  }
}

function goRight(command) {
  if(command === "r") {
    turnRight(rover);
  }
}

function goLeft(command) {
  if(command === "l") {
    turnLeft(rover);
  }
}

function goForward(command) {
  if(command === "f") {
    moveForward(rover);
  }
}

function goBackward(command) {
  if(command === "b") {
    moveBackward(rover);
  }
}

function logTrack() {
  rover.travelLog.push([rover.x, rover.y], rover.direction);
}

function executeCommands(commands) {
  for(var i = 0; i < commands.length; i++) {
    var command = commands[i];
    goRight(command);
    goLeft(command);
    goForward(command);
    logTrack();
  }
}

executeCommands("rfff");
console.log(rover.travelLog);
