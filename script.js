const adviceId = document.getElementById('adviceId');
const adviceContent = document.getElementById('adviceContent');
const adviceRefreshBtn = document.getElementById('adviceRefreshBtn');

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