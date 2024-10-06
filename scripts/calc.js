const cementInput = document.querySelector("#cement")
const sandtInput = document.querySelector("#sand")
const watertInput = document.querySelector("#water")
const mixInput = document.querySelector("#mix")

const marxList = document.querySelectorAll(".m-item");
const inputList = document.querySelectorAll('.content-input');

const m = document.querySelector("#m-peaker");

const proportions = {
  /* cement, sand, water, mix */
    "m50" : [1, 7.8, 1.36, 10.16],
    "m75" : [1, 6.3, 1.11, 8.41],
    "m100" : [1, 5.2, 0.95, 7.15],
    "m150" : [1, 3.8, 0.73, 5.53],
    "m200" : [1, 3, 0.59, 4.59],
    "m250" : [1, 2.4, 0.5, 3.9],
    "m300" : [1, 1.9, 0.43, 3.33],
};

function calculateOnePart (name, value){
  let mark = document.querySelector(".m-item_selected").textContent;
  let index = 0;
  if(name == "sand"){
    index = 1
  } else if(name == "water"){
    index = 2
  } else if (name == "mix"){
    index = 3
  };

  return value / proportions[mark][index]
}

function calculatePart(name, value) {
  let mark = document.querySelector(".m-item_selected").textContent;
  let index = 0;
  if(name == "sand"){
    index = 1
  } else if(name == "water"){
    index = 2
  } else if (name == "mix"){
    index = 3
  };

  return value * proportions[mark][index]
}

marxList.forEach((mark) => {
  mark.addEventListener('click', (e) => {
    if (document.querySelector(".m-item_selected")) {
      document.querySelector(".m-item_selected").classList.remove('m-item_selected');
    };
    e.target.classList.add("m-item_selected");
  })
})
inputList.forEach((item) => {
    item.addEventListener("input", inputHandler)
})

function inputHandler(e){
  const name = e.target.id;
  const value = e.target.value;
  const onePartValue = calculateOnePart(name, value);

  inputList.forEach((item) => {
    if (e.target.id == item.id){
      return;
    }
    item.value = calculatePart(item.id, onePartValue).toFixed(2);
  })
}

const calc = {
  mark: 1,
  cement: 0,
  sand: 0,
  water: 0,
  stone: 0,
  mix: 0,
  inputHandler() {console.log(this.mark)}
}
