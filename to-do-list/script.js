function addTask() {

    // Get the input box
    let input = document.getElementById("taskInput");

    // Get the task entered by user
    let task = input.value;


    // Check if input is empty
    if (task === "") {

        alert("Please enter a task!");

    } 
    
    else {

        // Create a new list item
        let li = document.createElement("li");

        // Add task text
        li.innerHTML = task;


        // Click task to mark it completed
        li.onclick = function () {

            li.classList.toggle("completed");

        };


        // Create Delete Button
        let deleteButton = document.createElement("button");

        deleteButton.innerHTML = "Delete 🗑️";

        deleteButton.classList.add("delete-btn");


        // Delete the task
        deleteButton.onclick = function () {

            li.remove();

        };


        // Add delete button inside list item
        li.appendChild(deleteButton);


        // Add list item to task list
        document.getElementById("taskList").appendChild(li);


        // Clear input box
        input.value = "";

    }

}

