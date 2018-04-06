// Global Variables //
/*-------------------------------------------------------------------*/
var playerName;

// Initialize Firebase //
/*-------------------------------------------------------------------*/
var config = {
    apiKey: "AIzaSyDrvqAe0jzAxRbnD-YljKA0y3nNQufYU3M",
    authDomain: "rps-multiplayer-e4d9d.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-e4d9d.firebaseio.com",
    projectId: "rps-multiplayer-e4d9d",
    storageBucket: "rps-multiplayer-e4d9d.appspot.com",
    messagingSenderId: "122913156284"
};
firebase.initializeApp(config);

// Audio Controls //
/*-------------------------------------------------------------------*/
$(document).ready(function () {

    var audio = new Audio('assets/audio/Castle_Crashers.mp3');
    audio.volume = 0.1;
    audio.loop = true;
    audio.play();

});


// Phase One will consist of what you see at the start of the game; Submit form for name //
/*-------------------------------------------------------------------*/
$(document).ready(function () {
    function phaseOne() {
        enterName = "<form id = 'name-form'>" + "<input type = 'text' id = 'name-input' placeholder = 'Please input name'/>" + "<input id = 'add-name' type ='submit' value = 'Start'/>" + "</form>"
        playerOneInfo = "<p class = 'text-center playerWaiting'>" + "Waiting for Player One" + "</p>";
        playerTwoInfo = "<p class = 'text-center playerWaiting'>" + "Waiting for Player Two" + "</p>";
        $(".gameText").html(enterName);
        $("#playerOne").prepend(playerOneInfo);
        $("#playerTwo").prepend(playerTwoInfo);
    }

    phaseOne();

// On-Click Name Input Function//
/*-------------------------------------------------------------------*/
    $("#add-name").on("click", function (event) {
        event.preventDefault();
        playerName = $("#name-input").val().trim();
        greetings = "<p class = 'text-center gameStatus'>" + "Hello " + playerName + " you are Player 1" + "</p>";
        playerOneInfo = "<p class = 'text-center playerWaiting'>" + playerName + "</p>";
        $(".gameText").html(greetings);
        $("#playerOne").html(playerOneInfo);
        $("#playerOne").append("Pick Your Warrior");
    });
});