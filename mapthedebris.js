function calculate(obj) {
    let objectWithPeriod = {};
    let sateliteName = obj.name;
    let sateliteAltitude = obj.altitude;
    console.log("a", sateliteAltitude + earthRadius);
    console.log("a ^ 3", Math.pow((sateliteAltitude + earthRadius), 3));
    console.log("sqrt of a^3/GM", Math.pow((Math.pow((sateliteAltitude + earthRadius), 3) / GM), 0.5));
    let orbitalPeriodFormula = Math.round(2 * Math.PI * Math.pow((Math.pow((sateliteAltitude + earthRadius), 3) / GM), 0.5));
    console.log("formula", orbitalPeriodFormula);
    objectWithPeriod.name = obj.name;
    objectWithPeriod.altitude = orbitalPeriodFormula;
    console.log("final objectWithPeriod", objectWithPeriod);
    return objectWithPeriod;
};

const GM = 398600.4418;
const earthRadius = 6367.4447;
let resultArray = [];


let i = 2;
function addNewObject() {
    let template = `
      <h3>Enter name and altitude for object ${i}</h3>
      <p>
      <label>Object name</label>
      <br>
      <input name="flyingObject[${i}][object_name]">
      </p>
      <p>
      <label>Objects's altitude</label>
      <br>
      <input name="flyingObject[${i}][object_altitude]">
      </p>  
      `;
    let container = document.getElementById("objects-container");
    let div = document.createElement("div");
    div.innerHTML = template;
    container.appendChild(div);
    i++;
};



function calculateData() {

    let originalDataArray = [];

    console.log(originalDataArray);
    console.log("i", i);
    for (let j = 0; j < (i - 1); j++) {
        let testObject = {};
        console.log(j);
        console.log(`flyingObject[${j + 1}][object_name]`);
        testObject.name = document.getElementsByName(`flyingObject[${j + 1}][object_name]`)[0].value;
        testObject.altitude = document.getElementsByName(`flyingObject[${j + 1}][object_altitude]`)[0].value * 1;
        /*altitude is multiplied by 1 in order to parse the input to a number*/
        originalDataArray[j] = testObject;
    };
    console.log(originalDataArray);

    function orbitalPeriod(arr) {
        resultArray = originalDataArray.map(item => calculate(item));
        console.log("resultsArray", resultArray);
        return resultArray;
    };

    function getresult() {
        let showFinalArray = document.getElementById("result");
        console.log("final", resultArray);
        resultArray.forEach(function (item) {
            console.log(item);
            showFinalArray.innerHTML += "<tr>" + "<td>" + (JSON.stringify(item)) + "</td>" + "</tr>";
        });
    };
    orbitalPeriod(originalDataArray);
    getresult();
};



/* THE SOLUTION POSTED BY ME ON FREECODECAMP SITE
(without all the HTML)


function calculate(obj) {
    let objectWithPeriod = {};
    let sateliteName = obj.name;
    let sateliteAltitude = obj.avgAlt;
    console.log("a", sateliteAltitude + earthRadius);
    console.log("a ^ 3", Math.pow((sateliteAltitude + earthRadius), 3));
    console.log("sqrt of a^3/GM", Math.pow((Math.pow((sateliteAltitude + earthRadius), 3) / GM), 0.5));
    let orbitalPeriodFormula = Math.round(2 * Math.PI * Math.pow((Math.pow((sateliteAltitude + earthRadius), 3) / GM), 0.5));
    console.log("formula", orbitalPeriodFormula);
    objectWithPeriod.name = obj.name;
    objectWithPeriod.orbitalPeriod = orbitalPeriodFormula;
    console.log("final objectWithPeriod", objectWithPeriod);
    return objectWithPeriod;
};

const GM = 398600.4418;
const earthRadius = 6367.4447;
let resultArray = [];

    function orbitalPeriod(arr) {
       originalDataArray=arr;
        resultArray = originalDataArray.map(item => calculate(item));
        console.log("resultsArray", resultArray);
        return resultArray;
    };

    
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);


*/