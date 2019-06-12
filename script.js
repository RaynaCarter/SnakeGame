var info;
var s;
var scl = 20;

var food;
var badFood;


function setup() {
    createCanvas(600, 600);
    s = new Snake();
    frameRate(10);
    pickLocation();
    pickBadLocation();

}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}
function pickBadLocation(){
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    badFood = createVector(floor(random(cols)), floor(random(rows)));
    badFood.mult(scl);
}

function mousePressed() {
    s.total++;
}

function draw() {
    background(51);

    if (s.eat(food)) {
        pickLocation();
    }
    if(s.eatBad(badFood)){
        pickBadLocation();
    }

    s.death();
    s.update();
    s.show();
    s.score();


    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);

    fill(100,0,99);
    rect(badFood.x, badFood.y,scl,scl);
}



function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}
