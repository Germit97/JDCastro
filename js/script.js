var colors = [];
var i = 0;

colors[0] = "#212F3C";
colors[1] = "#4A235A";
colors[2] = "#154360 ";

function changeColor() {
    document.querySelector("html").style.setProperty("--globalColor", colors[i]);
    i++;
    if (i == colors.length){
        i = 0;
    }
}

function autoplay(){
	setInterval(changeColor,10000);
}

autoplay();