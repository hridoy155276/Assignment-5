function addHeart (){
    const heartCount =document.getElementById("heart-count");
    const cardContainer = document.querySelector(".card-container");

    let count = parseInt(heartCount.innerText);
    count++
    heartCount.innerText = count;
}


const btns = document.getElementsByClassName("call-btn");
const history = document.getElementById("history-container");
const clear = document.getElementById("clear-history");

const totalCoin = document.querySelector(".total-coin"); 
    let coins = parseInt(totalCoin.innerText);

for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click", function (){
        const card = btns[i].parentNode.parentNode;
        const title = card.querySelector(".title").innerText;
        const subtitle = card.querySelector("p").innerText;
        const number = card.querySelector(".call-number").innerText;

        if (coins < 20) {
            alert("আপনার কাছে পর্যাপ্ত কয়েন নেই!");
            return;
        }

        coins -= 20;
        totalCoin.innerText = coins;
        alert("Calling Emergency\n" + title + " " + number);

        let div = document.createElement("div");
        div.className = "flex justify-between items-center bg-gray-200 mx-3 shadow p-2 rounded mb-2";

        let left = document.createElement("div");
        left.className = "flex flex-col";
        let h1 = document.createElement("h1");
        h1.textContent = title;
        h1.className = "font-bold";
        let p = document.createElement("p");
        p.textContent = subtitle;
        p.className = "text-gray-600 text-sm";

        left.appendChild(h1);
        left.appendChild(p);

         let right = document.createElement("span");
        right.textContent = new Date().toLocaleTimeString();
        right.className = "text-sm text-gray-500";

        div.appendChild(left);
        div.appendChild(right);

        history.appendChild(div);
    });

    clear.addEventListener("click", function () {
        history.innerHTML = "";
    })
}

let counts =0;
const copyCount = document.getElementById("copy-count");

function copyNumber (btn){
    let num = btn.parentElement.parentElement.querySelector(".call-number").innerText;
    alert("Number copied " + num);

    navigator.clipboard.writeText(num);

    counts++
    copyCount.innerText = counts;
}