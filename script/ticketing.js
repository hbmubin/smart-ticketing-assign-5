const seatClick = document.getElementsByClassName("seat");
let seatCount = 0;
let totalPrice = 0;
const seatNameList = [""];
disableBtn("coupon-btn");
disableBtn("next-btn");
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
      nextBtn();
    } else if (seatCount >= 4) {
      seatCount = seatCount + 1;
      if (seatCount >= 5 && seatNameList.includes(seat.innerText) == false) {
        alert("You can't take more than 4 seats");
      }
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
  const grandTotal = document.getElementById("grand-total");
  grandTotal.innerText = totalPrice;
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
  if (newElement >= 4) {
    enableBtn("coupon-btn");
  }
}
function disableBtn(Id) {
  document.getElementById(Id).disabled = true;
}
function enableBtn(Id) {
  document.getElementById(Id).disabled = false;
}

function couponBtn() {
  const couponInnerValue = document.getElementById("coupon-input").value;
  const grandTotalElement = document.getElementById("grand-total");
  const discountedElement = document.getElementById("discounted");
  const discountedContainer = document.getElementById("discount-container");
  const couponInputContainer = document.getElementById(
    "coupon-input-container"
  );
  const couponSuccessContainer = document.getElementById(
    "coupon-success-container"
  );
  if (couponInnerValue == "NEW15" || couponInnerValue == "Couple 20") {
    couponInputContainer.classList.add("hidden");
    discountedContainer.classList.remove("hidden");
    couponSuccessContainer.classList.remove("hidden");
    if (couponInnerValue == "NEW15") {
      const totalPriceInnerText =
        document.getElementById("total-price").innerText;
      const totalPrice = parseInt(totalPriceInnerText);
      const grandTotal = totalPrice - (totalPrice * 15) / 100;
      const discounted = (totalPrice * 15) / 100;
      console.log(grandTotal);
      console.log(discounted);
      grandTotalElement.innerText = grandTotal;
      discountedElement.innerText = discounted;
    } else if (couponInnerValue == "Couple 20") {
      const totalPriceInnerText =
        document.getElementById("total-price").innerText;
      const totalPrice = parseInt(totalPriceInnerText);
      const grandTotal = totalPrice - (totalPrice * 20) / 100;
      const discounted = (totalPrice * 20) / 100;
      console.log(grandTotal);
      console.log(discounted);
      grandTotalElement.innerText = grandTotal;
      discountedElement.innerText = discounted;
    }
  } else {
    alert("Invalid Coupon");
  }
}

function nextBtn() {
  const phoneNumberInput = document.getElementById("phone-number");
  const nextBtn = document.getElementById("next-btn");
  phoneNumberInput.addEventListener("keyup", function (event) {
    const value = event.currentTarget.value;
    if (value !== "") {
      enableBtn("next-btn");
    } else if (value === "") {
      disableBtn("next-btn");
    }
  });
}

// function gotoLink() {
//   // window.location.reload();
//   window.href = "confirmation/confirmation.html";
// }
