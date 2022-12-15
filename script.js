const adviceId = document.getElementById('adviceId');
const adviceContent = document.getElementById('adviceContent');
const adviceRefreshBtn = document.getElementById('adviceRefreshBtn');
const themeToggler = document.getElementById('themeToggler');
const bodyEl = document.querySelector('body');

window.onload = ()=> {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(result => {
        console.log(result)
        adviceId.innerHTML = result.slip.id;
        adviceContent.innerHTML = result.slip.advice;
    });
}

adviceRefreshBtn.onclick = ()=> {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(result => {
        console.log(result)
        adviceId.innerHTML = result.slip.id;
        adviceContent.innerHTML = result.slip.advice;
    });
}

themeToggler.onclick = ()=> {
    bodyEl.classList.toggle('dark');
}