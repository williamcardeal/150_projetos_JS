function addTask(){

    const taskTile = document.querySelector("#task-title").value

    if(taskTile){
        //clana template
        const template= document.querySelector(".template")

        const newTask = template.cloneNode(true)
        // adicionar titulo
        newTask.querySelector(".task-title").textContent = taskTile
          // remover  as classes 
        newTask.classList.remove("template")
        newTask.classList.remove("hide")
          //adicionar tarefa na lista
        const list =document.querySelector("ul")

        list.appendChild(newTask)

        //adionar o envento remover
        const removeBtm = newTask.querySelector(".remove-btn").addEventListener("click",function(){
            removeTask(this)
        })

        //adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this)
        })

        //limpar texto
         document.querySelector("#task-title").value = ""
    }

} 

//fução remover tarefa
function removeTask(task){
    task.parentNode.remove(true)

}

//função de completar tarefa
function completeTask(task){

   const taskToComplete = task.parentNode
//erro
   taskToComplete.classList.toggle("done")
}

const addBtn = document.querySelector ("#add-btn")

addBtn.addEventListener("click",function(e){
    e.preventDefault()

    console.log("testando")

    addTask()

})