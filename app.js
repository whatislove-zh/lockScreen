const time = document.querySelector(".time");
const name = document.querySelector(".name");
const focus = document.querySelector(".focus");
const greeting = document.querySelector(".greeting");

let showAmPm;
let timeVar = 'true'

time.addEventListener("click", () => {
    if (timeVar == "true"){
        timeVar = "false"
    } else {
        timeVar = "true"
    }
    console.log(timeVar)
})

const showTime = () => {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const amPm = hour >= 12 ? "PM" : "AM";

  if (timeVar === "true") {
    hour = hour % 12 || 12;
    time.innerHTML = `${addZero(hour)}:${addZero(min)}:${addZero(sec)} ${amPm}`;
  } else{
    hour = today.getHours();
    time.innerHTML = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
  }

  

  setTimeout(showTime, 1000);
};

const addZero = (n) => {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
};

//background and greatings
const dayTimeChange = () => {
  const today = new Date();
  let hour = today.getHours();
 

  if (hour < 12 && hour > 4) {
    //morning
    document.body.style.background = "url('/img/morning.jpg')";
    document.body.style.backgroundSize = "cover";
    greeting.textContent = "Good Morning";
  } else if (hour < 20) {
    //afternoon
    document.body.style.background = "url('/img/afternoon.jpg')";
    document.body.style.backgroundSize = "cover";
    greeting.textContent = "Good Afternoon";
  } else {
    //night
    document.body.style.background = "url('/img/morning.jpg')";
    document.body.style.backgroundSize = "cover";
    greeting.textContent = "Good Night";
    document.body.style.color = "white";
  }
};

function setName(e) {
  if (e.type === "keypress") {
    //enter or not
    if (e.whitch == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}
function setFocus(e) {
  if (e.type === "keypress") {
    //enter or not
    if (e.whitch == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

const getNameFocus = () => {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
};

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

dayTimeChange();
showTime();
getNameFocus();
