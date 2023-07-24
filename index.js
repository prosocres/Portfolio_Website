let interestBox1 = document.getElementById("interest-box-1");

const interestBoxEventHandler = (   ) => {
    interestBox1.style.boxShadow='10px 5px 5px red';
}

interestBox1.addEventListener("mouseover", interestBoxEventHandler)

const interestBox = document.querySelectorAll('.interest-box');

interestBox.forEach(box => {
    box.addEventListener('click', function() {
        box.style.boxShadow='10px 5px 5px orange';
    })
})