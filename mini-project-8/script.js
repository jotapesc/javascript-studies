// Obtain an average from an array
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

function averageCalc(array) {
    let sum = 0;
    for (let value of array) {
        sum += value;
    }

    return sum / array.length;
}

function averageGrade(grades) {
    
    const average = averageCalc(grades);
    let grade = "";

    if (average >= 60 && average <= 69) {
        grade = "D";

    }
    else if (average >= 70 && average <= 79) {
        grade = "C";
    }

    else if (average >= 80 && average <= 89) {
        grade = "B";
    }

    else if (average >= 90) {
        grade = "A";
    }

    else {
        grade = "F";
    }

    return grade;
}

let input = [70, 70, 80];
console.log(averageGrade(input));