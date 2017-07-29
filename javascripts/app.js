var rover = {
  direction: "N",
  position: { x: 0, y: 0 },
  travelLog: [{x: 0, y: 0}, "N"]
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
    rover.position.y -= 1;
  } else if (rover.direction === "E") {
    rover.position.x += 1;
  } else if (rover.direction === "S") {
    rover.position.y += 1;
  } else if(rover.direction === "W") {
    rover.position.x -= 1;
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

function logTrack() {
  rover.travelLog.push(rover.position, rover.direction);
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
