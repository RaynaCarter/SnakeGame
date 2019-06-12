function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    this.scores= [];
    var high=0;

    this.eat = function (pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.dir = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
     }



    this.eatBad = function (pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.tail.length=0;
            this.total= 0;
            document.getElementById("gameOver").innerHTML="Game Over, you ate a bad apple";
            return true;
        } else {
            return false;
        }

    }

    this.dir = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }










    this.death = function () {
        var scores= this.scores;
        for (var i = 0; i < this.tail.length; i++) {

            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                scores += this.tail.length;//CHANGE THISBACK TO +=
                console.log(scores);
                console.log('starting over');
                document.getElementById("gameOver").innerHTML="Game Over";
                this.total = 0;
                this.tail = [];

                //document.getElementById("score").innerHTML= "Your Score: "+ scores;
            }
        }
    }

    this.update = function () {
        for (var i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        if (this.total >= 1) {
            this.tail[this.total - 1] = createVector(this.x, this.y);
            if(this.total> high){
                high = this.total;
                console.log(high);
                document.getElementById("high").innerHTML= "High Score: "+ high;
            }
        }

        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }

    this.show = function () {
        fill(255);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);

    }

    this.score =function scoreCount(){
        for (var i = 0; i < this.tail.length; i++) {
            document.getElementById("gameOver").innerHTML= "Score:"+ this.tail.length;
        }
    }

}
