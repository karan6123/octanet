function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        
        var li = document.createElement("li");
        
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "taskCheckbox";
        
        var label = document.createElement("label");
        label.textContent = taskText;
        
        var cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";
        cancelBtn.className = "cancelBtn";
        cancelBtn.onclick = function() {
            li.remove();
        };
        
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(cancelBtn);
        
        taskList.appendChild(li);
        
        taskInput.value = "";
    }
}
