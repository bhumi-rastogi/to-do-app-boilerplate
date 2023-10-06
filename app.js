//JS Code for ToDO App
var listOfActivities = [];

// Create an Array named list to store our to-so activities
var input = document.getElementById("input");

// Create a DOM variable named input to get the to-do activities added from HTML form
var todolist = document.getElementById("todolist");


//Create a Dom variable todolist ul tag (unordered list)
var btn=document.getElementById("button");
btn.onclick = click;

//using onclick to run the click function when button is clicked.

//Adding a to do activity

function click() {
    //function -> click()

    listOfActivities.push(input.value);
    console.log(listOfActivities);
    //Using push array operation to add the input todo activity to the list created earlier.
    input.value = "";
    //Giving Empty string to input value after pushing it to array
    showList();
    //calling a function showList() to display the todo activities present in the list after adding new element.


}
//function  -> showList()

function showList() {
//Using innerHTML DOM property to set HTML, giving empty string initially

todolist.innerHTML = "";

//To display each to-do activity from the list using innerHTML properrty.

listOfActivities.forEach(function (n, i){
    todolist.innerHTML +=
    "<li>" +
    n +
    "<a onclick='editItem(" +
    i +
    ")'>EDIT</a>" +
    "<a onclick='deleteItem(" +
    i + 
    ")'>&times | </a> </li>";

});
}

{/*<li>Html <a onclick=editItem(0)>Edit</a> <a onclick="deleteitme(0) "></a>*/}

// Deleting an activity
function deleteItem(i) {
    //Using splice array operations to remove one item at specified index
    listOfActivities.splice(i, 1);
    //Display the todo list
    showList();
}

//Editing an activity

function editItem(i) {
    //Using prompt to get the new value of the activity after editing
    var newValue = prompt("Please insert your new value");
    //Using splice array operations to remove the preciousactivity and add an activity and add the new activity
    listOfActivities.splice(i, 1, newValue);
    //Display the list
    showList();
}