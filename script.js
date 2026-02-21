//Step-{make-empty array}
let thrivingList = [];
let strugglingList = [];
let currentStatus = "all-btn";
//Step-1  { get all the id}
const total = document.getElementById("totalcount");
const thriveCount = document.getElementById("thrivecount");
const struggleCount = document.getElementById("strugglecount");
const allBtn = document.getElementById("all-btn");
const thriveBtn = document.getElementById("thrive-btn");
const struggleBtn = document.getElementById("struggle-btn");
const plantsCard = document.getElementById("plants-card");

//Step-2 {Calculate function}

function calculateCount() {
  total.innerText = plantsCard.children.length; // 3
  // console.log(total);
  thriveCount.innerText = thrivingList.length;
  struggleCount.innerText = strugglingList.length;
}
calculateCount();
//Step-3 { Buttons -toggle method}
function toggleStyle(id) {
  // Reset all to gray
  allBtn.classList.remove("bg-black", "text-white");
  thriveBtn.classList.remove("bg-black", "text-white");
  struggleBtn.classList.remove("bg-black", "text-white");

  // reset all to black
  allBtn.classList.add("bg-gray-300", "text-black");
  thriveBtn.classList.add("bg-gray-300", "text-black");
  struggleBtn.classList.add("bg-gray-300", "text-black");
  //Step-3{clicked button bg-changed}
  const selected = document.getElementById(id);
  selected.classList.remove("bg-gray-300", "text-black");
  selected.classList.add("bg-black", "text-white");
  currentStatus = id;
}
//Step-4{filtering cards show/hide}
const filterSection = document.getElementById("filter-section");

function toggleStyle(id) {
  if (id === "thrive-btn") {
    plantsCard.classList.add("hidden");
    filterSection.classList.remove("hidden");
  } else if (id === "all-btn") {
    filterSection.classList.add("hidden");
    plantsCard.classList.remove("hidden");
  } else if (id === "struggle-btn") {
    filterSection.classList.remove("hidden");
    plantsCard.classList.add("hidden");
  }
}
//Step-5{event-delegation}
const mainContainer = document.querySelector("main");
mainContainer.addEventListener("click", function (event){
    const card = event.target.closest(".card");
    if(!card)
        return;
    const plantName = card.querySelector(".plant-name").innerText;
    const latinName = card.querySelector(".latin-name").innerText;
    const light = card.querySelector(".light").innerText;
    const water = card.querySelector(".water").innerText;
    const notes = card.querySelector(".notes").innerText;
    const status = card.querySelector(".status").innerText;
      
    if (event.target.classList.contains("thrive-btn")) {
       const cardInfo = {
        plantName,
        latinName,
        light,
        water,
        notes,
        status:"Thrive"
       }
       const plantExist = thrivingList.find(item=>item.plantName===plantName);
       if(!plantExist){
        thrivingList.push(cardInfo)
       }
    }
    if (event.target.classList.contains("struggle-btn")) {
        console.log("struggle btn", plantName)
    }
    if (event.target.classList.contains("delete-btn")) {
        console.log("delete btn", plantName)
    }

})
