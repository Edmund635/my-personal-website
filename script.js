const h2 = document.createElement("h2");
h2.textContent = "Brooklyn Nets Fan Page";
document.querySelector("body").appendChild(h2);


    const input = document.getElementById('button');
    function clickAlert() {
         alert('I was clicked!');
    }
    input.addEventListener('click', clickAlert);
