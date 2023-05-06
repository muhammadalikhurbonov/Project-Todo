"use strict";

const scale = document.querySelector(".scale");
const form = document.querySelector("form");
const exit = document.querySelector(".exit");
const cancel = document.querySelector(".cancel");
const save = document.querySelector(".save");
const formText = document.querySelector(".formText");
const formCost = document.querySelector(".formCost");
const sectionMain = document.querySelector(".section_main");
const error = document.querySelector(".error");
const img = document.querySelector(".img");
const imgInput = document.querySelector("input[type=file]");
const formImg = document.querySelector(".formImg");
let fileDocument;

function Create_item() {
  form.classList.add("scale");
}
function exit_function() {
  form.classList.remove("scale");
}

// let value = e.target.formCost.value.trim();
// let value2 = e.target.formText.value.trim();

cancel.addEventListener("click", (e) => {
  form.classList.remove("scale");
  // if (value.length <= 0 && value2.length <= 0) {
  //   // error.classList.add("showError");
  //   // error.innerHTML = "Please, fill in the information!";
  //   ShowError("");
  //   e.target.reset();
  //   setTimeout(() => {
  //     ShowError("");
  //   }, 3000);
  // } else if (value.length && value2.length <= 0) {
  //   ShowError("");
  //   e.target.reset();
  //   setTimeout(() => {
  //     ShowError("");
  //   }, 3000);
  // } else if (value.length <= 0 && value2.length) {
  //   ShowError("");
  //   e.target.reset();
  //   setTimeout(() => {
  //     ShowError("");
  //   }, 3000);
  // } else if (value.length >= 400 && value2.length >= 400) {
  //   ShowError("");
  //   setTimeout(() => {
  //     ShowError("");
  //   }, 3000);
  // } else if (value2.length >= 400 && value.length <= 0) {
  //   ShowError("");
  //   setTimeout(() => {
  //     ShowError("");
  //   }, 3000);
  // } else if (value.length >= 400 && value2.length <= 0) {
  //   ShowError("");
  //   setTimeout(() => {
  //     ShowError("");
  //   }, 3000);
  // } else if (value2.length >= 0 && value.length >= 0) {
  //   todos.push({
  //     formText: value2,
  //     formCost: value,
  //   });
  //   localStorage.setItem("todos", JSON.stringify(todos));
  //   GetValue();
  //   e.target.reset();
  // }
});

// let inputImage = document.querySelector("input[type]=file").files[0];

// const filereader = new FileReader();
// filereader.readAsDataURL(inputImage);
// filereader.addEventListener("load", function () {
//   document.querySelector(".img").setAttribute("src", this.result);
//   console.log(this.result);
// });

// Check values in LocalStorage

// let TodoList = [];

let todos = JSON.parse(localStorage.getItem("todos"))
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

if (todos.length) {
  GetValue();
}

// set todos

function setTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

imgInput.addEventListener("change", () => {
  let inputImage = document.querySelector("input[type=file]").files[0];
  const filereader = new FileReader();
  filereader.readAsDataURL(inputImage);

  filereader.addEventListener("load", function () {
    let filevalue = this.result;
    let fileDocument = filevalue;
  });
});

// Show Error function

function ShowError(e) {
  return (error.innerHTML = e);
}

// Get value from LocalStorage

function GetValue() {
  // console.log(todo[0].formText);
  // console.log(todo);
  sectionMain.innerHTML = "";
  todos.forEach((element, index) => {
    sectionMain.innerHTML += `<div class="section_main_box" key="${index}">
            <div class="section_main_box_img">
              <img
                class="img"
                src="${element.formImg}"
                alt=""
              />
            </div>
            <p>${element.formText}</p>
            <h4>${element.formCost}</h4>
            <button onclick="DeleteItems(${index})">Delete</button>
          </div>`;
  });
}

// Delete list items

function DeleteItems(id) {
  let DeletedItems = todos.filter((element, index) => {
    return id !== index;
  });
  todos = DeletedItems;
  GetValue();
  setTodos();
}

// Get value in input

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e.target.formText.value);
  // console.log(e.target.formCost.value);
  let value = e.target.formCost.value.trim();
  let value2 = e.target.formText.value.trim();
  if (value.length <= 0 && value2.length <= 0 && fileDocument <= 0) {
    // error.classList.add("showError");
    // error.innerHTML = "Please, fill in the information!";
    ShowError("Please, fill in the information!");
    e.target.reset();
    setTimeout(() => {
      ShowError("");
    }, 3000);
  } else if (value.length && value2.length <= 0) {
    ShowError("Please, fill in the information!");
    e.target.reset();
    setTimeout(() => {
      ShowError("");
    }, 3000);
  } else if (value.length <= 0 && value2.length) {
    ShowError("Please, fill in the information!");
    e.target.reset();
    setTimeout(() => {
      ShowError("");
    }, 3000);
  } else if (value.length >= 400 && value2.length >= 400) {
    ShowError("Please, Your information must not exceed 400!");
    setTimeout(() => {
      ShowError("");
    }, 3000);
  } else if (value2.length >= 400 && value.length <= 0) {
    ShowError("Please, Your information must not exceed 400!");
    setTimeout(() => {
      ShowError("");
    }, 3000);
  } else if (value.length >= 400 && value2.length <= 0) {
    ShowError("Please, Your information must not exceed 400!");
    setTimeout(() => {
      ShowError("");
    }, 3000);
  } else if (value2.length >= 0 && value.length >= 0) {
    todos.push({
      formText: value2,
      formCost: value,
      formImg: fileDocument,
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    GetValue();
    e.target.reset();
  }
});
