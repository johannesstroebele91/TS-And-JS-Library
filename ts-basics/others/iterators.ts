let someArray: number[] = [1, 2, 3, 4, 5];

// 1) for loop
console.log('\nfor loop');
for (let i = 0; i < someArray.length; i++) {
    console.log(i); // OUTPUT: 1,2,3,4,5
}

// 2) for..in loop
someArray = [1, 2, 3, 4, 5];
console.log('\nfor..in loop');
for (let i in someArray) {
    console.log(i); // OUTPUT: 0,1,2,3,4
}

// 3) for..for loop
console.log('\nfor..of loop');
for (let i of someArray) {
    console.log(i); // OUTPUT: 1,2,3,4,5
}

// 4) while loop
console.log('\nwhile loop');
let i: number = 0;
while (i < 4) {
    console.log(i);
    i++;
}

// 5) do..while loop
console.log('\ndo..while loop');
i = 0;
do {
    console.log("Index: " + i);
    i++;
} while (i < 4)

/* 6) switch..case
* Respective statement gets executed
* if the case () expression
* is EQUAL to the switch () expression

IMPORTANT!
* break (needed to break out of funct)
* default (needed for edge cases) */
console.log('\nswitch..case');
let grade = 'B';
switch (grade) {
    case "A": {
        console.log("A");
        break;
    }
    default: {
        console.log("Invalid choice");
        break;
    }
}
