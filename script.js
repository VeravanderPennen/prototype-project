
var video = document.getElementsByTagName('video')[0];

var endText = document.getElementById('end');
var start = document.getElementById('start');
var eind = document.getElementById('eind');

function action(whichKey) {
    switch (whichKey) {
        case 37:
            video.className = '';
            start.className = 'none';
        break;

        case 38:
            video.className = 'stap2';
        break;

        case 39:
            video.className = 'stap3';
        break;

        case 40:
            video.className = 'none';
            eind.className = '';
        break;
    }
}

//genereert een key voor elke toets
document.addEventListener("keydown", function(e) {
 action(e.keyCode);
}, false);
