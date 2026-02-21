//   step-1 {get all Id}
let total = document.getElementById("totalcount");
let thriveCount = document.getElementById("thrivecount");
let struggleCount = document.getElementById("strugglecount");
//   console.log(total,thriveCount, struggleCount);
//Step-6 {button-color change}
const allBtn = document.getElementById("all-btn");
const thriveBtn = document.getElementById("thrive-btn");
const struggleBtn = document.getElementById("struggle-btn");
const filterSection = document.getElementById("filter-section");
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
//Step-2 {function calculated}
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
function toggleStyle(id) {
  // console.log("click", id)
  //step-6 added
  //remove bg-color from all btn
  allBtn.classList.remove("bg-black", "text-white");
  thriveBtn.classList.remove("bg-black", "text-white");
  struggleBtn.classList.remove("bg-black", "text-white");

  ///  set a default bg-color for all btn
  allBtn.classList.add("bg-gray-300", "text-black");
  thriveBtn.classList.add("bg-gray-300", "text-black");
  struggleBtn.classList.add("bg-gray-300", "text-black");

  //Step-7 {select  clicked btn for color change}
  const selected = document.getElementById(id);
  // console.log(selected)
  selected.classList.remove("bg-gray-300", "text-black");
  selected.classList.add("bg-black", "text-white");
  currentStatus = id ;

// step-11 {toggle hidden and show}
if(id == "thrive-btn"){
  plantsCard.classList.add('hidden');
  filterSection.classList.remove("hidden");
  renderList(thrivingList)
}
else if ( id == "all-btn"){
  plantsCard.classList.remove("hidden");
   filterSection.classList.add("hidden");
}
else if (id === "struggle-btn") {
        plantsCard.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderList(strugglingList);
}
/// Step-8 { Event delegation for card-information & Buttons}
//   get all cls and make a object }
mainContainer.addEventListener("click", function (event) {
  // console.log(event.target.classList.contains("thrive-btn"))
  const card = event.target.closest(".card");
  if(!card) return;
}

  if (event.target.classList.contains("thrive-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const plantName = parentNode.querySelector(".plant-name").innerText;
    const latinName = parentNode.querySelector(".latin-name").innerText;
    const light = parentNode.querySelector(".light").innerText;
    const water = parentNode.querySelector(".water").innerText;
    const notes = parentNode.querySelector(".notes").innerText;
    const status = parentNode.querySelector(".status").innerText;
 parentNode.querySelector(".status").innerText = "Thrive"


    const cardInfo = { plantName,
       latinName, 
       light, 
       water,
        notes,
         status: "Thrive" };

   
    // console.log(cardInfo);

    /// Step-9 {find the cardInfo elements and show in list if not push cardInfo }
    const plantExist = thrivingList.find(
      (item) => item.plantName == cardInfo.plantName,
    );
    
    if (!plantExist) {
      thrivingList.push(cardInfo);
    }
    renderThriving();
  }
  // console.log(thrivingList)
});
// step-10 {rendering system for inner html}
function renderThriving() {
  filterSection.innerHTML = "";

  for (let thrive of thrivingList) {
    // console.log(thrive);
    let div = document.createElement("div");
    div.className = "card flex justify-between border rounded-md p-8 ";
    div.innerHTML = ` <div class="space-y-6">
                <div>
                    <h3 class="plant-name text-2xl">${thrive.plantName} </h3>
                    <p class="latin-name">${thrive.latinName} </p>
                </div>
                <!-- data -->
                <div class="flex gap-4">
                    <p class="light bg-gray-300 px-5 not-even:rounded-sm">${thrive.light}</p>
                    <p class="water bg-gray-300 px-5 rounded-sm">${thrive.water}</p>
                </div>
                <!-- Status -->
                <p class="status">${thrive.status}</p>
                <p class="notes">${thrive.notes}</p>
                <div class=" flex gap-x-6">
                    <button class="thrive-btn bg-green-300 py-2 px-4 rounded-xl">Thriving</button>
                    <button class="struggle-btn  bg-red-300 py-2 px-4 rounded-xl">Struggle</button>
                </div>
            </div>
            <!-- Right-Content-->
            <div>
                <button class="delete-btn bg-red-300 px-4 py-2 rounded-md text-red-700 font-semibold">delete</button>
            </div>  `
            filterSection.appendChild(div)
  }
  calculateCount()
}


