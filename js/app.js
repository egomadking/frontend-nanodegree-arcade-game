// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.speed; //multiplier applied against dt for movement speed
    this.x; //define a starting point
    this.y; //define a center point for + -
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //after off screen, need to reset this.x to original (+rand?)
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    this.x; //define an xy starting point
    this.y;
    this.sprite = 'images/char-horn-girl.png';
}

Player.prototype.update = function(dt) {
    /*does the player need param dt if arrow keys increment?*/
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite),this.x, this.y);
}

Player.prototype.handleInput = function(/*what param?*/) {
    //do some math to this.x, this.y
    //do not step out of bounds
    //compare Player bounds will each enemy bounds
        //if overlap {reset}
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = 


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    Player.handleInput(allowedKeys[e.keyCode]);
});
