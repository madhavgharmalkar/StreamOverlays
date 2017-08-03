/*global $, io*/

$(document).ready(function() {
    var socket = io();

    $.fn.extend({
        animateCss: function(animationName) {
            var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
            this.addClass("animated " + animationName).one(animationEnd, function() {
                $(this).removeClass("animated " + animationName);
            });
            return this;
        }
    });

    var fileNames = ["jaganath.png", "balaram.png", "subhadra.png"];
    var currentIndex = 0;

    var goAwayAnimations = ["bounceOut", "rotateOut"];
    var comeHereAnimations = ["bounceIn", "rotateIn", "rollIn"];

    setInterval(function() {

        // calculate a fadeOut animation and apply it
        var goAway = goAwayAnimations[Math.floor(Math.random() * goAwayAnimations.length)];
        var comeHere = comeHereAnimations[Math.floor(Math.random() * comeHereAnimations.length)];


        var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        $("#trio").addClass(goAway).one(animationEnd, function() {
            $("#trio").removeClass(goAway);
            currentIndex = (currentIndex + 1) % 3;
            $("#trio").attr("src", "/img/" + fileNames[currentIndex]);
            $("#trio").addClass(comeHere).one(animationEnd, function() {
                $("#trio").removeClass(comeHere);
            });
        });


    }, 20000);

    socket.on("update", function(msg) {
        $("#" + msg.field).text(msg.value);
    });

    function updateField(target, msg) {
        
    }


});
