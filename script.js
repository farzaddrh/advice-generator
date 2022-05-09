const adviceNum = document.querySelector(".advice-number");
const advice = document.querySelector(".advice");
const btn = document.querySelector(".dice-icon");

const loadAdvice = function () {
    fetch("	https://api.adviceslip.com/advice")
        .then((res) => {
            if (!res.ok) throw new Error("Something went wrong");
            return res.json();
        })
        .then((data) => {
            adviceNum.textContent = `Advice #${data.slip.id}`;
            advice.textContent = `"${data.slip.advice}"`;
        })
        .catch((err) => console.error(`${err} 💖💖💖`));
};
loadAdvice();

btn.addEventListener("click", () => loadAdvice());
