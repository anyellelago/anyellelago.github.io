// SOLID

//PRINCIPIOS DE BOAS PRATICAS DE PROGRAMAÇÃO.

// S - SRP - Single Responsibility Principle
//Principio da Responsabilidade Única.

// Funções bem escritas, devem mantidas simples, curtas e realizando um objetivo
//CRUD - Create Read Update Delete
export function addTask(db, title="") {
//Criante uma nova tarefa
    const task = document.createElement('div');
    //const id = Number(db.length) + 1;
    task.classList.add('task');
    task.setAttribute('id', db.id);

    const taskBody = `
    <div> <input type="checkbox" id="check_${db.id}"/> </div>
                <div>
                    <div><span class="title-task">${
                        //operador ternario. If de uma linha
                        // Condição ? verdadeiro : falso;
                        title ? title : db.title
                    }</span></div>
                </div>
                <div>Star</div>
    `;

    task.innerHTML = taskBody;
    document.querySelector('.tasks').appendChild(task);
}
export function remoreTask() {
    alert("Removendo uma nova tarefa");
}
export function updateTask() {
    alert("Alterando uma nova tarefa");
}
// colocamos chocolate apenas para explicar que pode ser qualquer nome.
export function getAllTasks(chocolate) {
    chocolate.forEach((item)=> {
    addTask(item);
    });
}
export function getTaskById() {
    alert("Exibindo uma tarefa");
}
