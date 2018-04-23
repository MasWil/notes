function Snake() {
  this.x = 0; //sets the default x
  this.y = 0; //sets the default y
  this.xspeed = 1; //sets the initial direction when starting (positive starts on right, negative starts on left)
  this.yspeed = 0; //sets the inital direction when starting
  this.total = 0;
  this.tail = [];

  this.dir = function(x,y) { //This moves the snake, has to know where it is at all times
    this.xspeed = x;
    this.yspeed = y;
  }
  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y); //setting d to equal the distance in pixels
    if (d < 1) {
      this.total++; //This means the score will go up by 1
      fRate++; //You do not type in this. because it is not apart of the object constructor
     // eatSound.setVolume(1.0);
      //eatSound.play();
      document.getElementById('yourScore').innerHTML = this.total;
      return true;
    }
    else {
      return false;
    }
  }
  this.death = function() {
    if ((this.tail.length === 0) && (this.x < 0) || (this.x > w - scale) || (this.y > h - scale) || (this.y < 0)) {
      document.getElementById('yourScore').innerHTML = "You died from touching the wall"
      this.total = 0;
      this.tail = [];
      noLoop();
    }
    for (var i = 0; i < this.tail.length; i++) {  //Add one to the i for the length of the tail
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);  //If the distance between the head and its tail..
      if ((d < 1) || (this.x < 0 || this.x > w - scl || this.y < 0 || this.y > h - scl)) {  //IS less than one pixel or 1 x and y is greater or less than the canvas...
        this.total = 0; //Clear the total
        this.tail = []; //Clear the array
        noLoop(); //Stops the draw function which is the loop
        document.getElementById('yourScore').innerHTML = "D E A D";
      }
    }
  }
  this.update = function() {
    for (var i = 0; i < this.tail.length - 1; i++) {     //this.tail.length is the condition, and to find the interger, add length
      this.tail[i] = this.tail [i + 1] //Add one to the tail of the snake
    }
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }
    this.x = this.x + this.xspeed * scl; //What is my xspeed? My current position plus speed, multiplied by scale (20)
    this.y = this.y + this.yspeed * scl; //Moves the snake by 20
    //this.x = constrain(this.x, 0, w - scl); //If the current x position is touching the width, then stop
    //this.y = constrain(this.y, 0, h - scl);
  }
  this.show = function() { //this.show is showing us fill
    fill(255,255,255); //This is our snake color
     for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl); //This is the snake shape
  }
  
}
