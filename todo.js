
var fullTask = [];
const incompleteDiv = document.getElementById("incompleteList");
const completeDiv = document.getElementById("completeList");
var deleteButton = 0;
var completeButton = 0;


// when button is clicked
    // get input from user
    // verify if date is correct
        // if it's correct
            // build element
            // add classes
            // add info
            // allow for removal
                // add a button
                // add event listener to button
            // allow for complete (see below)
                // add button
                // add event listener
            // add element to incomplete section
        // if incorrect
            // error message


// allow for marking as complete / incomplete
    // see which class it has .complete or .incomplete
    // switch to opposite class and move to opposite div

    // ^ create a button within the element of your task, which uses the parent/child
    // relationship to add and remove a class from the parent element (that will switch
    // it into the opposite div)


// add event listener to submit button
document.getElementById("userSubmit").addEventListener("submit", function(e) {
    e.preventDefault();
    var date = dueDate.value
    if (isValidDate(date) == false) {
        alert("Incorrect Date");
    }
    else {
        fullTask = [task.value,dueDate.value]
        var textContent = fullTask.join(" (complete by...) ");
        newItem = addTask(textContent);

        document.getElementById("completeButton").addEventListener("click", function() {
            // newItem = '<p>What have I done?</p>';
            completeDiv.insertAdjacentHTML("beforeend", newItem);
        })
    }
    document.getElementById("deleteButton").addEventListener("click", function(e) {
        let deleteTemp = e.currentTarget.parentNode;
        e.currentTarget.parentNode.remove();
        incompleteDiv.insertAdjacentHTML("beforeend", deleteTemp);
        //this.closest('.single').remove() // in modern browsers in complex dom structure
        //this.parentNode.remove(); //this refers to the current target element 
        //e.target.parentNode.parentNode.removeChild(e.target.parentNode);
      }, false);
    return 
})

// var btn = document.getElementById('deleteButton')

// for (var i = 0; i < btn.length; i++) {
//   btn[i].addEventListener('click', function(e) {
//     e.currentTarget.parentNode.remove();
//     //this.closest('.single').remove() // in modern browsers in complex dom structure
//     //this.parentNode.remove(); //this refers to the current target element 
//     //e.target.parentNode.parentNode.removeChild(e.target.parentNode);
//   }, false);
// }

function addTask(x) {
    let checkBox = document.createElement("img");
    checkBox.src = "https://previews.123rf.com/images/theerakit/theerakit1802/theerakit180200002/94761130-green-tick-icon-on-white-background-green-check-mark-icon-tick-symbol-flat-style-vector-tick-sign-.jpg"
    let deleteBox = document.createElement("img");
    deleteBox.src = "http://www.clker.com/cliparts/x/W/f/4/C/s/close-button-hi.png"
    const listItem = '<li class="item">'+x+'</span></li>'
    incompleteDiv.insertAdjacentHTML("beforeend", checkBox);
    return listItem;
}

function isValidDate(dateString) {
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;

    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);
    if (year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;
    return day > 0 && day <= monthLength[month - 1];
};




// add event listener to submit button

// when button is clicked
    // get input from user
    // verify if date is correct
        // if it's correct
            // build element
            // add classes
            // add info
            // allow for removal
                // add a button
                // add event listener to button
            // allow for complete (see below)
                // add button
                // add event listener
            // add element to incomplete section
        // if incorrect
            // error message


// allow for marking as complete / incomplete
    // see which class it has .complete or .incomplete
    // switch to opposite class and move to opposite div

    // ^ create a button within the element of your task, which uses the parent/child
    // relationship to add and remove a class from the parent element (that will switch
    // it into the opposite div)