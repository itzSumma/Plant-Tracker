//   step-1 {get all Id}
let total = document.getElementById("totalcount");
let thriveCount = document.getElementById("thrivecount");
let struggleCount = document.getElementById("strugglecount");
//   console.log(total,thriveCount, struggleCount);
     //Step-6 {butoon-color change}
     const allBtn= document.getElementById("all-btn");
     const thriveBtn = document.getElementById("thrive-btn");
     const struggleBtn= document.getElementById("struggle-btn")
//Step-3
/// Create arrow for store data
let thrivingList = [];
let strugglingList = [];
// step-3
// push element on new array
// strugglingList.push({name:1, cls:2}, {}, {})

//  Step-4
// even delegation for main container {Toggling Method-1}
const mainContainer = document.querySelector("main");
//   console.log(mainContainer)
//Step-2
const plantsCard = document.getElementById("plants-card");
//  console.log(plantsCard.children.length);
// calculate btn push
function calculateCount() {
  total.innerText = plantsCard.children.length; //3
  thriveCount.innerText = thrivingList.length;
  struggleCount.innerText = strugglingList.length;
}
calculateCount();
    //Step-5  {make a toggle function for main section}
    function toggleStyle(id){
        // console.log("click", id)
        //step-6 added
        //remove bg-color from all btn
        allBtn.classList.remove("bg-black" , "text-white");
        thriveBtn.classList.remove("bg-black"  , "text-white");
        struggleBtn.classList.remove("bg-black" , "text-white");

        /// aset default bg-color for all btn
        allBtn.classList.add("bg-gray-300","text-black");
        thriveBtn.classList.add("bg-gray-300","text-black");
        struggleBtn.classList.add("bg-gray-300","text-black");
  
    //Step-7 {select  clicked btn for color change}
    const selected = document.getElementById(id);
    // console.log(selected)
    selected.classList.remove("bg-gray-300", "text-black");
    selected.classList.add("bg-black","text-white");
    }