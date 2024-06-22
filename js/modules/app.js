let data = await fetch("../../storage/data.json")
data = await data.json();

let resultCotainer = document.querySelector("#mDS2");
export const maquetar = async() => {
    data.forEach(function(task){
        let taskName = task.task;
        let taskNameSub = "";
        
        if (taskName.length > 12) {
            taskNameSub = taskName.substring(0, 12);
            taskNameSub = taskNameSub + "...";
        }else{
            taskNameSub = taskName;
        }
        
        let plantilla = `
        <div class="element">
            <div id="eS1" class="elementSection" title="${taskName}">
                <p class="elementTItle">${taskNameSub}</p>
            </div>
            <div id="eS2" class="elementSection" title="Edit">
                <img class="elementBtn" src="storage/media/check.png" title="Finished">
                <img class="elementBtn" src="storage/media/delete.png" title="Delete">
            </div>
        </div>`

        resultCotainer.innerHTML += plantilla;
    });
}