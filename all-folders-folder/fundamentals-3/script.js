// Factory functions
const enemy1 = { //This is not a efficient way to create another object "enemy"
    enemyName: "José",
    enemyHPoints: 50,
    enemyDefense: 20,
    enemyAttack: 10,
    enemySpecialAtk: function enemyspa(enemyHPoints) {
        if (enemyHPoints < Math.floor(enemyHPoints / 2)) {
            console.log("Uses Special Attack!");
        }

        else {
            console.log("Special Attack not ready yet!");
        }
    }
};

console.log(enemy1);

function createEnemy(enemyName, enemyHPoints, enemyDefense, enemyAttack) { // Here we have a better way to create another object "enemy" 
    return {
        enemyName,
        enemyHPoints,
        enemyDefense,
        enemyAttack,
        enemySpecialAtk(enemyHPoints) {
            if (enemyHPoints < Math.floor(enemyHPoints / 2)) {
                console.log("Uses Special Attack!");
            }

            else {
                console.log("Special Attack not ready yet!");
            }
        }
    }
}

const enemy2 = createEnemy("Squid", 20, 5, 17);
console.log(enemy2);

console.log("==================================");

// Constructor functions
function Enemy(enemyName, enemyHPoints, enemyDefense, enemyAttack) {
    this.enemyName = enemyName,
        this.enemyHPoints = enemyHPoints,
        this.enemyDefense = enemyDefense,
        this.enemyAttack = enemyAttack,
        this.enemySpecialAtk = function (actualEnemyHPoints) {
            if (actualEnemyHPoints <= Math.floor(Enemy.enemyHPoints / 2)) {
                console.log("Uses Special Attack!");
            }

            else {
                console.log("Special Attack not ready yet!");
            }
        }

}

const enemy3 = new Enemy("Raccon", 40, 10, 25);
console.log(enemy3);

// Constructor functions x Factory functions
// Basically they do the same thing, i prefer to use the "Constructor" version, but you do you

console.log("==================================");

// Dynamic nature of objects
const squidKing = { //You can freely add or remove atributes and methods from objects in javascript
    names: "Squid King",
    hitpoints: 5000,
    attack: 200,
    defense: 50,
    specialAttack: function entangle() {
        console.log("You're entangled");
    }
}

squidKing.paralyzed = true;
squidKing.bleeding = true;
squidKing.cammo = function camouflage(actualHitPoints) {
    if (actualHitPoints <= Math.floor(squidKing.hitpoints / 2)) {
        squidKing.evasion = 100;
        delete squidKing.paralyzed;
    }
}

squidKing.cammo(2500);
console.log(squidKing);

console.log("==================================");

// Cloning objects
const squidy = Object.assign({}, enemy2); //(where it goes, where it came from)
Object.assign(squidy, enemy2); //(where it goes, where it came from)
console.log(squidy);

const squidy2 = { ...enemy3 }; //spread method

console.log("==================================");

// Template literal
console.log(`You can type anything the exactly way you want
and the final result will be identical as the code.

This can be very useful especially when you want to write an email to someone`);