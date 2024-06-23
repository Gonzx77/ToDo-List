const getData = async() => {
    let data = await fetch("https://6674179975872d0e0a950e53.mockapi.io/todoList");
    data = await data.json();

    return data;
};

const getDataId = async(id) =>{
    let data = await fetch(`https://6674179975872d0e0a950e53.mockapi.io/todoList/${id}`);
    data = await data.json();

    return data;
};

let resultCotainer = document.querySelector("#mDS2");
export const maquetar = async() => {
    resultCotainer.innerHTML = "";

    let info1Div = document.querySelector("#info1");
    let info2Div = document.querySelector("#info2");
    let infoDiv = document.querySelector("#info");

    let onHoldC = 0;
    let ready = 0;
    let total = 0;


    let data = await getData();
    data.forEach(function(task){
        let taskName = task.task;
        let taskId = task.id;
        
        let status = task.status;
        
        let plantilla = "";
        if (status == "On hold"){
            total ++;
            onHoldC ++;

            plantilla = `
            <div class="element">
                <div id="eS1" class="elementSection" title="${taskName}">
                    <p class="elementTItle">${taskName}</p>
                </div>
                <div id="eS2" class="elementSection" title="Edit">
                    <img onclick="finished(this)" id="${taskId}" class="elementBtn" src="storage/media/check.png" title="Finished">
                    <img onclick="removeElement(this)" id="${taskId}" class="elementBtn" src="storage/media/delete.png" title="Delete">
                </div>
            </div>`
        }else if (status == "ready"){
            total ++;
            ready ++;

            plantilla = `
            <div class="element2">
                <div id="eS1" class="elementSection" title="${taskName}">
                    <p class="elementTItle2">${taskName}</p>
                </div>
                <div id="eS2" class="elementSection" title="Edit">
                    <img onclick="finished(this)" id="${taskId}" class="elementBtn" src="storage/media/return.png" title="Finished">
                    <img onclick="removeElement(this)" id="${taskId}" class="elementBtn" src="storage/media/delete.png" title="Delete">
                </div>
            </div>`
        }

        
        infoDiv.innerHTML = total;
        info1Div.innerHTML = onHoldC;
        info2Div.innerHTML = ready;
        resultCotainer.innerHTML += plantilla;
    });
};

export const add = async(task) => {
    console.log("Añadiendo " + task);
    
    let data = await getData();
    console.log(data);

    let newElement = {
        "task": task,
        "status": "On hold"
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

export const status = async(id) =>{
    let data = await getDataId(id);
    console.log(data);

    let status = data.status;
    let statusF = "";

    if (status == "On hold"){
        statusF = "ready";
    }else if (status == "ready"){
        statusF = "On hold";
    }

    data.status = statusF;
    
    await fetch(`https://6674179975872d0e0a950e53.mockapi.io/todoList/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};