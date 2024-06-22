const getData = async() => {
    let data = await fetch("https://6674179975872d0e0a950e53.mockapi.io/todoList")
    data = await data.json();

    return data;
};

let resultCotainer = document.querySelector("#mDS2");
export const maquetar = async() => {
    resultCotainer.innerHTML = "";
    let data = await getData();
    data.forEach(function(task){
        let taskName = task.task;
        let taskId = task.id;
        
        let plantilla = `
        <div class="element">
            <div id="eS1" class="elementSection" title="${taskName}">
                <p class="elementTItle">${taskName}</p>
            </div>
            <div id="eS2" class="elementSection" title="Edit">
                <img onclick="finished()" class="elementBtn" src="storage/media/check.png" title="Finished">
                <img onclick="removeElement(this)" id="${taskId}" class="elementBtn" src="storage/media/delete.png" title="Delete">
            </div>
        </div>`

        resultCotainer.innerHTML += plantilla;
    });
};

export const add = async(task) => {
    console.log("Añadiendo...");
    console.log(task);

    let data = await getData();
    console.log(data);

    let newElement = {
        "task": task,
        "status": "ready"
    };

    await fetch("https://6674179975872d0e0a950e53.mockapi.io/todoList", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newElement)
    });
};

export const remove = async(id) =>{
    await fetch(`https://6674179975872d0e0a950e53.mockapi.io/todoList/${id}`, {
        method: 'DELETE'
    });
};