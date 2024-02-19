const seatClick = document.getElementsByClassName("seat");
let seatCount = 0;
let totalPrice = 0;
const seatNameList = [""];
for (const seat of seatClick) {
  seat.addEventListener("click", function () {
    if (seatCount < 4 && seatNameList.includes(seat.innerText) == false) {
      seatCount = seatCount + 1;
      seatColorGreen(seat);
      setSeatCount();
      createList(seat);
      totalPrice = totalPrice + 550;
      setTotal(totalPrice);
      seatNameList.push(seat.innerText);
      setSeatLeft();
    }
  });
}

function setSeatLeft() {
  const currentSeat = document.getElementById("seat-left");
  const currentSeatString = currentSeat.innerText;
  const currentSeatNumber = parseInt(currentSeatString);
  const newSeatLeft = currentSeatNumber - 1;
  currentSeat.innerText = newSeatLeft;
}

function setTotal(totalPrice) {
  const total = document.getElementById("total-price");
  total.innerText = totalPrice;
}

function createList(seat) {
  const ul = document.getElementById("selected-seat-ul");
  const li = document.createElement("li");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  div1.innerText = seat.innerText;
  div2.innerText = "Economy";
  div3.innerText = "BDT 550";
  li.appendChild(div1);
  li.appendChild(div2);
  li.appendChild(div3);
  ul.appendChild(li);
}

function seatColorGreen(seat) {
  seat.classList.add("bg-green-500");
  seat.classList.add("text-white");
  seat.classList.add("hover:bg-green-500");
}

function setSeatCount() {
  const element = document.getElementById("seat-count-number");
  const elementInnerText = element.innerText;
  const elementNumber = parseInt(elementInnerText);
  const newElement = elementNumber + 1;
  element.innerText = newElement;
}


