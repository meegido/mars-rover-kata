var rover = {
  direction: "N",

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

}

turnRight(rover);
console.log(rover);
turnLeft(rover);
