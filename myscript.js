const squareOfwire = {
    4.1: 1.5,
    5.9: 2.5,
    8.3: 4.0,
    10.1: 6.0,
    15.4: 10.0,
    18.7: 16.0,
    25.3: 25.0,
    29.7: 35.0,
    38.5: 50.0,
    47.3: 70.0,
    57.2: 95.0,
    66.0: 120.0,
};

const nominalPowers = [
    4.1, 5.9, 8.3, 10.1, 15.4, 18.7, 25.3, 29.7, 38.5, 47.3,
    57.2, 66.0,
];

function findClosestBiggest(value, arr) {
    let closestBiggest = 4.1;
    for (let i = 1; i < arr.length; i++) {
        if (value > arr[i - 1] && value <= arr[i]) {
            closestBiggest = arr[i];
        }
        if (value > 66) {
            closestBiggest = value;
        }
    }
    return closestBiggest;
}

let sumPower = 0;

summarizer.onclick = event => {
    let data = document.getElementById('addedPower').value;
    sumPower += Number(data);
    document.getElementById('sumPower').textContent =
        "Суммарная мощность, кВт: " + sumPower;
}

sender.onclick = event => {
    let tablePower = findClosestBiggest(sumPower, nominalPowers);
    if (tablePower <= 66) {
        tableSection = squareOfwire[tablePower];
        table = document.getElementById('mydata');
        for (let row of table.rows) {
            if (row.cells[0].innerHTML == tablePower) {
                row.classList.add("selected");
            } else {row.classList.remove("selected")}
        }
    } else {
        tableSection = "too big value of power";
    }
    document.getElementById('requiredSection').textContent =
        "Потребное сечение, мм²: " + tableSection;
}

clearer.onclick = event => {
    sumPower = 0;
    document.getElementById('sumPower').textContent =
        "Суммарная мощность, кВт: ";
    document.getElementById('requiredSection').textContent =
        "Потребное сечение, мм²: ";
    for (let row of document.getElementById('mydata').rows) {
        row.classList.remove("selected");
    }
}