function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr;
}

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


orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

function calculateData() {

    let originalDataArray = [];

    console.log(originalDataArray);
    console.log("i", i);
    for (let j = 0; j < (i - 1); j++) {
        let testObject = {};
        console.log(j);
        console.log(`flyingObject[${j+1}][object_name]`);
        testObject.name = document.getElementsByName(`flyingObject[${j + 1}][object_name]`)[0].value;
        testObject.altitude =  document.getElementsByName(`flyingObject[${j + 1}][object_altitude]`)[0].value;
        originalDataArray[j] = testObject;
    };
    console.log(originalDataArray);
};