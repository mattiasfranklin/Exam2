// Given the following Array of employee objects
const employees = [
    {
        name: "Alan",
        examScores: []
    },
    {
        name: "Betty",
        examScores: []
    },
    {
        name: "Cindy",
        examScores: []
    },
    {
        name: "Dana",
        examScores: []
    },
    {
        name: "Ellen",
        examScores: []
    },
    {
        name: "Frank",
        examScores: []
    },
    {
        name: "Glenda",
        examScores: []
    },
    {
        name: "Hank",
        examScores: []
    }
];

// PART I - Populate the EXISTING array.  Do NOT create a new array.
function genScore() {
    return Math.floor(Math.random() * (51)) + 50;
}

employees.forEach(employee => {
    let not90 = true;
    while (not90) {
        let score = genScore();
        employee.examScores.push(score);
        if (score >= 90) {
            not90 = false;
        };
    };
});

//console.log('Part I');
//console.log(employees);

// PART II - Drop the lowest score from the EXISTING array.  Do NOT create a new array.
function findLowestScore(scores) {
    let lowest = 100;
    scores.forEach(grade => {
        if (grade < lowest) {
            lowest = grade;
        }
    });
    return lowest;
};

employees.forEach(employee => {
    if (employee.examScores.length > 1) {
        let lowScore = findLowestScore(employee.examScores);
        let index = employee.examScores.indexOf(lowScore);
        employee.examScores.splice(index, 1);
    }
});

//console.log('Part II');
//console.log(employees);

// PART III - Create a NEW Array with Summary Data / Use Array Functions
function calcAvg(scores) {
    const sum = scores.reduce((accumulator, score) => accumulator + score, 0);
    return sum / scores.length;
}

// Function to find the minimum value in an array
function findMinScore(scores) {
    return Math.min(...scores);
}

// Create a new array with summary data using array methods
const summaryArray = employees.map(employee => {
    return {
        name: employee.name,
        examScores: employee.examScores,
        numberOfAttempts: employee.examScores.length,
        passingScore: Math.max(...employee.examScores),
        avgScore: calcAvg(employee.examScores),
        minScore: findMinScore(employee.examScores),
    };
});

//console.log('Part III:');
//console.log(summaryArray);

//console.log('Part IV');
// PART IV - Output the results / Custom Format
summaryArray.forEach(employee => {
    console.log(`Name: ${employee.name}`);
    console.log(`Exam Scores: ${employee.examScores.join(', ')}`);
    console.log(`Num. of tests: ${employee.numberOfAttempts}`);
    console.log(`Passing Score: ${employee.passingScore}. Avg Score: ${employee.avgScore.toFixed(1)}. Minimum Score: ${employee.minScore}`);
    console.log('*********************************************************');
});