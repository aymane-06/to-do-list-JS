let tasks=[];
let counter=0;

function AddTask(){
    let task={
        id:counter+1,
        taskName: document.getElementById("task_name").value,
        taskDesc: document.getElementById("task_discription").value,
        taskDate: document.getElementById("date").value+" "+document.getElementById("time").value,
        taskStatus: document.getElementById("type").value,
    }
    tasks.unshift(task);
    showtasks();
    counter++;
    document.getElementById("addtaskform").reset();
}
function showtasks(){
    const TBody=document.getElementById("taskslist");
    TBody.innerHTML="";
    for(let i=0;i<tasks.length;i++){
        const tr=document.createElement("tr");
        TBody.appendChild(tr);
        for (const key in tasks[i]) {
            let td=document.createElement("td");
            td.textContent=`${tasks[i][key]}`;
            tr.appendChild(td);
        }
    }

}