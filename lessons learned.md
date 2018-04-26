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

