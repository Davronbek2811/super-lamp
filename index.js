const countEl = document.getElementById("count");
const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const colorPicker = document.getElementById("colorPicker");
const inputNumber = document.getElementById("inputNumber");
const sendBtn = document.getElementById("sendBtn");


let count = 0;


minusBtn.addEventListener("click", () => {
    if(count > 0){
        count--;
        countEl.textContent = count;
    }else{
        console.log("Islamadi")
    }
});


plusBtn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;
});


colorPicker.addEventListener("input", () => {
    countEl.style.color = colorPicker.value;
});


sendBtn.addEventListener("click", () => {
    const value = parseInt(inputNumber.value);

    if (value < 0 || isNaN(value)) {
        count = 0;
    } else {
        count = value;
    }

    countEl.textContent = count;
});