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