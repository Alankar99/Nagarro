// let currentDate = new Date().getDate();
// let currentMonth = new Date().getMonth();
// let currentYear = new Date().getFullYear();

// let taskTime = document.querySelector(".time");

// taskTime.innerHTML = currentDate.toString() + "-" + currentMonth.toString() + "-" + currentYear.toString();

// window.onload = function() {
//     alert("reload");
// };


let showDesc = document.querySelectorAll(".btn1");
// let desc = document.querySelectorAll(".description");
let list = document.querySelector(".list");

let taskForm = document.querySelector('.form');
let taskTitle = document.querySelector("#taskTitle");
let taskTime = document.querySelector("#taskTime");


function addTask(title,deadline,mykey)
{
    let currentDate = new Date().getDate();
    let currentMonth = new Date().getMonth() +1;
    let currentYear = new Date().getFullYear();

    list.innerHTML += ` 
    <div class="task">
                <div data-key="${mykey}" class="title">${title}
                <i class="fa-solid fa-square-check tick"></i>
                </div>
                
                <div>
                    <span class="time">${currentDate.toString() + "-" + currentMonth.toString() + "-" + currentYear.toString()}</span>
                    <span class="deadline">Do it by: ${deadline}</span>
                </div>
            </div>
    `;
    taskForm.style.display = 'none';
    taskTitle.value=null; 
    taskTime.value=null;

    taskTime.style.border = "none";
    taskTitle.style.border = "none";
    // count++;
    // console.log(count);


    document.querySelector('.noTask').style.display = "none";
    
}
// $('.noTask').attr("display", "none");


function show_Hide_Details()
{
    if(desc.style.display.toString() == "none")
    {
        desc.style.display = "block";
        showDesc.innerHTML = "Hide description";
    }
    else
    {  
        desc.style.display = "none";
        showDesc.innerHTML = "Show description";
    }
}

function openForm()
{
    taskForm.style.display = "flex";
}

let addTaskBtn = document.querySelector(".addTaskBtn");

addTaskBtn.addEventListener("click",openForm);

// showDesc.addEventListener("click", show_Hide_Details);

let submitButton = document.querySelector(".submitBtn");

submitButton.addEventListener("click", ()=>
{
    if(taskTitle.value != '' && taskTime.value != '')
    {
        addTask(taskTitle.value , taskTime.value, Date.now());
    }
    else
    {
        if(taskTime.value == '')
        {
            taskTime.style.border = "4px solid red";
        }
        
        if(taskTitle.value == '')
        {
            taskTitle.style.border = "4px solid red";
        }
    }
});

let tick1 = document.getElementsByClassName("tick");

if(tick1.length > 0)
{
    tick1.addEventListener("click", (e)=>{
        console.log(e.target);
    })
}
else
{
    console.log("not found");
}

// console.log("hllo");

document.querySelector("body").addEventListener("click", (e)=>
{
    // console.log(e.target.parentNode);
    if(e.target.parentNode.dataset.key > 100)
    {
        console.log(e.target.parentNode.dataset.key);
        e.target.parentNode.parentNode.style.display = "none";
    }
}
);