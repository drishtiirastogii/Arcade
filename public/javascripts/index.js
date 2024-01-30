document.addEventListener("DOMContentLoaded", function(){
    var openButton = document.getElementById("signup");
    openButton.addEventListener("click", function(){
    window.open("/views/Registration/signup.ejs","_self");
    });
});

/*document.addEventListener("DOMContentLoaded", function(){
    var openButton = document.getElementById("submit");
    openButton.addEventListener("click", function(){
    window.open("../public/moreGames.html","");
    });
});*/

document.addEventListener("DOMContentLoaded", function(){
    var openButton = document.getElementById("Login");
    openButton.addEventListener("click", function(){
    window.open("/views/Registration/login.ejs","_self");
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var openButton = document.getElementById("dice-game");
    openButton.addEventListener("click", function(){
    window.open("/views/dice/dice.ejs","_blank");
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var openButton = document.getElementById("simon-game");
    openButton.addEventListener("click", function(){
    window.open("/views/simon/simon.ejs","_blank");
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var openButton = document.getElementById("drums");
    openButton.addEventListener("click", function(){
    window.open("/views/drum/drum.ejs","_blank");
    });
});