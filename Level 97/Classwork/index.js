const div = document.getElementById("maindiv")
let lotask = []
class Tasks{
    constructor(tasktitle, description, dueto){
        this.tasktitle = tasktitle;
        this.description = description;
        this.dueto = dueto;
    }

    

}
const tsks = [
    new Tasks("GOA", "GOA Homework Level 98", "Due Next Weekend"),
    new Tasks("Mathematics", "Homework of Math about Rational Functions", "Due Thursday"),
    new Tasks("Biology", "Test review for Genetics", "Due Monday"),
    new Tasks("English Essay", "Write a 1000-word essay on Shakespeare's Hamlet", "Due Wednesday"),
    new Tasks("Physics Lab", "Complete the optics experiment lab report", "Due Friday"),
    new Tasks("History Presentation", "Create slides for WWII presentation", "Due next Tuesday"),
    new Tasks("Computer Science", "Finish coding assignment on recursion", "Due Sunday"),
    new Tasks("Chemistry Homework", "Practice problems on chemical bonding", "Due Thursday"),
    new Tasks("Art Project", "Sketch for final portfolio", "Due next Monday"),
    new Tasks("Economics Quiz", "Study chapters 5-7 for quiz", "Due Tuesday"),
    new Tasks("French Vocabulary", "Memorize 30 new words", "Due tomorrow"),
    new Tasks("Health Class", "Research and write report on sleep cycles", "Due Friday"),
    new Tasks("Music Theory", "Practice scales and arpeggios", "Due Saturday")
]
    function render(){
        tsks.forEach((info, index) => {
        div.innerHTML += `
        <div class = "childdiv">
            <strong>Task: </strong>${info.tasktitle}
            <strong>Task Description: </strong>${info.description}
            <strong>Due to: </strong>${info.dueto}
            <button id = "button1" onclick = "addTask(${index})">Add to Completed List </button>
            <button id = "removebut" onclick = "removebutt(${index})">Remove Tasks</button>
        </div>
        `
    })
    }
    

const addTask = (index) => {
    if (!lotask.find(task => task.tasktitle === tsks[index].tasktitle)) {
    lotask.push(tsks[index]);
}
    lotask.push(tsks[index])
    localStorage.setItem("Completed Tasks", JSON.stringify(lotask))
}

const removebutt = (index) =>{
    const removedTask = tsks.splice(index, 1)[0];

    lotask = lotask.filter(task => task.tasktitle !== removedTask.tasktitle)
    localStorage.setItem("Completed Tasks", JSON.stringify(lotask))
    render()
}



render()


