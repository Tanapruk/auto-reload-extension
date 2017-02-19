var counterDiv;
function createStickyCountDown() {
    //create new element
    counterDiv = document.createElement("div");
    var customCss = counterDiv.style;
    customCss.position = 'fixed';
    customCss.top = '0';
    customCss.width = '100%';
    customCss.zIndex = '100';
    customCss.background = 'rgba(192,192,192,0.3)';
    customCss.textAlign = 'right';
    customCss.marginRight = '10px';
    customCss.boxSizing = 'content-box';
    customCss.fontSize = '45px';
    customCss.fontFamily = 'Enriqueta, arial, serif';
    customCss.fontWeight = 'normal';
    customCss.lineHeight = '48px';
    document.body.appendChild(counterDiv);
    // counterDiv.innerHTML = "Gonna refresh page in";
}

createStickyCountDown();


function reloadPage() {
    console.log('reloadPage');
    window.location.href = 'https://www.lotto.ktbnetbank.com';

}

var secs;
var timerID = null;
var timerRunning = false;
var delay = 1000;

function initializeTimer(seconds) {
    createStickyCountDown();
    // Set the length of the timer, in seconds
    secs = seconds;
    stopTheClock();
    startTheTimer();
}

function stopTheClock() {
    if (timerRunning)
        clearTimeout(timerID);
    timerRunning = false;
}

function startTheTimer() {
    if (secs == 0) {
        stopTheClock();
        // Here's where you put something useful that's
        // supposed to happen after the allotted time.
        // For example, you could display a message:
        reloadPage();
        createStickyCountDown();
    }
    else {
        //self.status = 'Remaining: ' + secs;
        counterDiv.innerHTML = "Gonna refresh page in " + secs + " sec";
        secs = secs - 1;
        timerRunning = true;
        timerID = self.setTimeout("startTheTimer()", delay);
    }
}


initializeTimer(2);