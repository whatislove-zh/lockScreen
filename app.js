const time = document.querySelector(".time")
const name = document.querySelector(".name")
const focus = document.querySelector(".focus")
const greeting = document.querySelector(".greeting")





const showTime = () => {
    let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();

      const amPm = hour >= 12 ? "PM" : "AM";
      hour = hour % 12 || 12;

      time.innerHTML = `${addZero(hour)}:${addZero(min)}:${addZero(sec)} ${amPm}`
      
      setTimeout(showTime, 1000);
}

const addZero = (n) => {
    return (parseInt(n, 10) < 10 ? '0': '') + n;
}

//background and greatings
const dayTimeChange = () =>{
    const today = new Date();
    let hour = today.getHours();
    console.log(hour)

    if(hour < 12 && hour > 4 ){
        //morning
        document.body.style.background= "url('/img/morning.jpg')";
        document.body.style.backgroundSize = "100%"
        greeting.textContent = "Good Morning"
    } else if (hour < 20){
        //afternoon
        document.body.style.background= "url('/img/afternoon.jpg')";
        document.body.style.backgroundSize = "100%"
        greeting.textContent = "Good Afternoon"
    } else {
        //night
        document.body.style.background = "url('/img/morning.jpg')";
        document.body.style.backgroundSize = "100%"
        greeting.textContent = "Good Night"
        document.body.style.color = "white"
    }
}



dayTimeChange();
showTime();