var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[this.x, this.y], "N"]
}

var world = {
  horizontal: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  vertical: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}

function turnLeft(){
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

function turnRight(){
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

function moveForward(){
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

function moveBackward(){
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

function insideWorld() {
  for(var i = 0; i < world.horizontal.length; i++) {
    var horizontalLimit = world.horizontal[i];

    if(rover.x <= horizontalLimit) {
      goForward() || goBackward();
    } else {
      console.log("Stop! Rover horizontal crash!!");
    }
  }

  for(var j = 0; j < world.vertical.length; j++) {
    var verticalLimit = world.vertical[j];

    if(rover.y <= verticalLimit) {
      goForward() || goBackward();
    } else {
      console.log("Stop! Rover vertical crash!!");
    }
  }

}


function goRight(command) {
  if(command === "r") {
    turnRight();
  }
}

function goLeft(command) {
  if(command === "l") {
    turnLeft();
  }
}

function goForward(command) {
  if(command === "f") {
    moveForward();
  }
}

function goBackward(command) {
  if(command === "b") {
    moveBackward();
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
    goBackward(command);
    logTrack();
    insideWorld();
  }
}

insideWorld();
executeCommands("rlffffffffffffffffffffffff");
console.log(rover);
