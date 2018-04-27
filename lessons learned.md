1. Forms
Using forms with labels
Adding new fields with javascript and templates
Accessing the DOM (appendChild, createElement, getElementsByName)
name - naming convention for easy usage in backend


2. template literals = are string literals allowing embedded expressions.
in this case they were used in the name field in the form and then to retrieve the values from the form.They can contain placeholders.

Template literals are enclosed by the back-tick (` `) and the placeholders looks like this ${ } - in the placeholder one can use variables.

3. getElementsByName - it returns a collection of nodes, with the same name of the selector.
this means that if you have differnt input fields with the same name you access them like this:

document.getElementsByName("the value in the name field")[0].

So if you have 2 input fields with name="test", you would use 
document.getElementsByName("test")[0].value - to get the value of the first input field and 
document.getElementsByName("test")[1].value -  to get the value of the second input field

in my case I used template literals 
document.getElementsByName(`flyingObject[${j + 1}][object_name]`)[0].value;

because j changes, each time it looks for a different name, so each time you have to get the first value [0] - since you don't have 2 identical nodes in this example.

4. Showing the content of an array in HTML
this builds a table with each element in its own row

function getresult() {
        let showFinalArray = document.getElementById("result");
        console.log("final", resultArray);
        resultArray.forEach(function (item) {
            console.log(item);
            showFinalArray.innerHTML += "<tr>" + "<td>" + (JSON.stringify(item)) + "</td>" + "</tr>";
        });
    };

5. Showing an object in HTML: 
it turns an object into a string
JSON.stringify(object)

in this case each item in my array is an object, so I put this in the foreach above.

you can use the JSON.parse() to turn a string into an object.

So using them togheter you can copy an object, or a nested object.
in the next example, you turn object "collection" into string, than you ocpy it to another object "collectionCopy" as an object from a string with parse().

const collectionCopy = JSON.parse(JSON.stringify(collection));

I used this in the challange record collection.
you can use this with usefull parameters in order to filter or change the object or the string. 

you can read more on:
https://alligator.io/js/json-parse-stringify/

6. using forEach() and map() on arrays
map returns the results in a new array so you don't change the original.

https://codeburst.io/javascript-map-vs-foreach-f38111822c0f

7. Turning an input field into a number
There are more methods to do this, here the easieast one was just to multiply the input by 1, as we have a standard input. this method has limitations

https://coderwall.com/p/5tlhmw/converting-strings-to-number-in-javascript-pitfalls

8. using Math.pow() - can be used to extract (square) root - if the power is for example 0.5 => it does sqare root
Math.Round - rounds to the near natural number
Math.PI - well, it's Pi