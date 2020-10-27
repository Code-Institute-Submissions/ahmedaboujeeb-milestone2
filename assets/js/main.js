// Identify variables
let clickedCard = null;
let preventClick = false;
let combosFound = 0;
let countDownTimerEnabled = false;

// Identify colors
const colors = [
    "pink",
    "red",
    "yellow",
    "green",
    "black",
    "orange",
    "cyan",
    "blue"
];

// Shuffle card colors
function initCards(cards) {

    for (let color of colors) {
        const cardAIndex = parseInt(Math.random() * cards.length);
        const cardA = cards[cardAIndex];
        cards.splice(cardAIndex, 1);
        cardA.className += ` ${color}`;
        cardA.setAttribute("data-color", color);

        const cardBIndex = parseInt(Math.random() * cards.length);
        const cardB = cards[cardBIndex];
        cards.splice(cardBIndex, 1);
        cardB.className += ` ${color}`;
        cardB.setAttribute("data-color", color);
    }
}

initCards([...document.querySelectorAll(".card")]);

function onCardClicked(e) {
    const target = e.currentTarget;
    if (!countDownTimerEnabled) {
        return;
    }

    if (
        preventClick ||
        target === clickedCard ||
        target.className.includes("done")) {
        return;
    }
    target.className = target.className
        .replace("color-hidden", "")
        .trim();
    target.className += " done";

    if (!clickedCard) {
        clickedCard = target;
    } else {
        if (clickedCard.getAttribute("data-color") !==
            target.getAttribute("data-color")
        ) {
            preventClick = true;
            setTimeout(() => {
                clickedCard.className =
                    clickedCard.className.replace("done", "").trim() + " color-hidden";
                target.className =
                    target.className.replace("done", "").trim() + " color-hidden";
                clickedCard = null;
                preventClick = false;
            }, 500);
        }
        else {
            combosFound++;
            clickedCard = null;
            if (combosFound === 8) {
                countDownFinish();
            }
        }
    }
}

// Reset the game
function reset() {
    combosFound = 0;
    var cards = document.querySelectorAll(".card");
    cards.forEach(function (item, index) {
        item.className = "card color-hidden";
        countDownTimerEnabled = false;
        enableBtn();
    });

    initCards([...document.querySelectorAll(".card")]);
    document.getElementById("counter").innerHTML = "";
    document.getElementById("winner").innerText = "";
}

function countDown(minutes) {
    countDownTimerEnabled = true;
    var seconds = 60;
    var mins = minutes;

    function tick() {
        if (!countDownTimerEnabled) {
            countDownFinish();
            return;
        }
        var counter = document.getElementById("counter");
        var current_minutes = mins - 1;
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            if (mins > 1) {
                countDown(mins - 1);
            }
            else {
                countDownFinish();
            }
        }
    }
    disableBtn();
    tick();
}

// time is up or timer stops
function countDownFinish() {
    countDownTimerEnabled = false;
    if (combosFound != 8) {
        document.getElementById("winner").innerText = "TRY AGAIN!";
    } else {
        document.getElementById("winner").innerText = "WELL DONE!";
    }
}
// Disable and enable start button
function disableBtn() {
    document.getElementById("btn").disabled = true;
}

function enableBtn() {
    document.getElementById("btn").disabled = false;
}
