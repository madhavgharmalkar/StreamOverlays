/*global $, io*/

$(document).ready(function() {
    var socket = io();
    $(".button-collapse").sideNav();

    $(".send-data").click(function(e){
        // console.log(e.target.id);
        var dataToSend = $("#" + e.target.id + "_val").val();
        socket.emit("update", {
            field: e.target.id,
            value: dataToSend
        });
    });

});
