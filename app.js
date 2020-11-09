function imageselect(anything) {
    document.querySelector(".main-img").src = anything;
}

function colorchange(color) {
    const sec = document.querySelector(".sec");
    sec.style.background = color;
}