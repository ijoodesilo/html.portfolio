
window.onload = function() {
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateRelation); 
}

function calculateRelation () {
    let yourName = document.getElementById("your-name").value;
    let theName = document.getElementById("the-name").value;


    if (yourName != "" && theName != ""){
        let percentage = Math.floor(Math.random() * 101);
        document.getElementById("hi").textContent = yourName + " and " + theName + " you are related by"
        document.getElementById("dope").textContent = percentage.toString() + " %"
        document.getElementById("dope").style.fontSize = "40px"
    }
}












































