// Max velocity is 70km/h
// For each 5km/h above the limit, you gain 1 point on your driver's license
// Hint: use Math.floor()
// If the points are greater than or equal to 12 -> "You lost you driver's license"

function checkVel(vel) {
    const maxVel = 70;
    const kmPerPoint = 5;
    const banLimit = 12;
    
    if (vel <= maxVel) {
        return console.log("Under the limit");
    }

    else {
        const points = Math.floor((vel - maxVel) / kmPerPoint);
                
        if (points >= banLimit) {
            return console.log("You've lost you driver's license");
        }

        else {
            return console.log(`You've recieved ${points} points on you driver's license`);
        }
    }
}
const input = 130;
checkVel(input);
