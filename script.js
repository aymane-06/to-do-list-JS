let tasks = [];
let counter = 0;
let task = {};

function addTask() {
  task = {
    id: counter + 1,
    taskName: document.getElementById("task_name").value,
    discription: document.getElementById("task_discription").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    type: document.getElementById("type").value,
  };
  if (
    task &&
    task.taskName &&
    task.discription &&
    task.date &&
    task.time &&
    task.type
  ) {
    tasks.push(task);
    counter++;
    showtasks();
    document.getElementById("addtaskform").reset();
  }
}

function showtasks() {
  const tasksList = document.getElementById("taskslist");
  tasksList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const tablerow = document.createElement("tr");
    const tableID = document.createElement("td");
    tableID.textContent = `${tasks[i].id}`;
    const tableTaskName = document.createElement("td");
    tableTaskName.textContent = `${tasks[i].taskName}`;
    const tableTaskdesc = document.createElement("td");
    tableTaskdesc.textContent = `${tasks[i].discription}`;
    const tableTaskDate = document.createElement("td");
    tableTaskDate.textContent = `${tasks[i].date} 
                                ${tasks[i].time}`;
    const tableTaskType = document.createElement("td");
    tableTaskType.textContent = `${tasks[i].type}`;
    const editcontainer = document.createElement("td");
    const editbutton = document.createElement("button");
    let index=i
    editbutton.setAttribute("onclick", `editTasks(${index})`);
    editbutton.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
    const deletecontainer = document.createElement("td");
    const deletebutton = document.createElement("button");
    deletebutton.innerHTML = `<i class="fa-solid fa-calendar-xmark"></i>`;
    //chidsupport
    tasksList.appendChild(tablerow);
    tablerow.appendChild(tableID);
    tablerow.appendChild(tableTaskName);
    tablerow.appendChild(tableTaskdesc);
    tablerow.appendChild(tableTaskDate);
    tablerow.appendChild(tableTaskType);
    tablerow.appendChild(editcontainer);
    editcontainer.appendChild(editbutton);
    tablerow.appendChild(deletecontainer);
    deletecontainer.appendChild(deletebutton);
  }
}
function editTasks(index) {
  let tableTaskName = document.getElementsByTagName("tr")[index+1];
  let tName = tableTaskName.getElementsByTagName("td")[1];
  tName.innerHTML = `<input type="text" required value="${tasks[index].taskName}">`;
  const input = tName.querySelector("input");
  input.addEventListener("blur", () => {
  tasks[index].taskName = input.value;
  tName.innerHTML = `<td>${tasks[index].taskName}</td>`;
});
  let tdesc = tableTaskName.getElementsByTagName("td")[2];
  tdesc.innerHTML = `<input type="text" required value="${tasks[index].discription}">`;
  const inputD = tdesc.querySelector("input");
  inputD.addEventListener("blur", () => {
  tasks[index].discription = inputD.value;
  tdesc.innerHTML = `<td>${tasks[index].discription}</td>`;
});
  let tdate = tableTaskName.getElementsByTagName("td")[3];
  tdate.innerHTML = `<input type="datetime-local" required value="${tasks[index].date}">`;
  const inputDate = tdate.querySelector("input");
  inputDate.addEventListener("blur", () => {
  tasks[index].date = inputDate.value;
  tdate.innerHTML = `<td>${tasks[index].date}</td>`;
});
  let tType = tableTaskName.getElementsByTagName("td")[4];
  tType.innerHTML = `<select name="type" id="type" required>
                        <option value=""></option>
                        <option value="To-Do">To Do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>`;
  const inputType = tType.querySelector("select");
  inputType.addEventListener("blur", () => {
  tasks[index].type = inputType.value;
  tType.innerHTML = `<td>${tasks[index].type}</td>`;
});
}
