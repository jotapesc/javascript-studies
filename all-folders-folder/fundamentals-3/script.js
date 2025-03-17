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
    this.enemySpecialAtk = function (enemyHPoints) {
        if (enemyHPoints < Math.floor(enemyHPoints / 2)) {
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