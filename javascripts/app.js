var rover = {
  direction: "N",
  x: 0,
  y: 0
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
  } else if (rover.direction == "E") {
    rover.x += 1;
  } else if (rover.direction === "S") {
    rover.y -= 1;
  } else if(rover.direction === "W") {
    rover.x -= 1;
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


console.log(rover);
goLeft("l");
console.log(rover);
goForward("f");
console.log(rover);
