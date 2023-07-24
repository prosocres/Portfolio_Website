let interestBox = document.getElementsByClassName("interest-box");

const interestBoxClickHandler = item => {
    item.style = 'background-color: blue'
}

interestBox.addEventListener("click", interestBoxClickHandler)