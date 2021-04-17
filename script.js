// Textalign carousel Texte

function alignCarouselText() {
    if(window.innerWidth < 900) {
        document.querySelectorAll.bind(document)('.carousel-caption').forEach(
            el => { 
                el.classList.remove('text-left');
                el.classList.add('text-center');
            }
        );
    } else {
        document.querySelectorAll.bind(document)('.carousel-caption').forEach(
            el => { 
                el.classList.remove('text-center');
                el.classList.add('text-left');
            }
        );
    }
}

window.onresize = alignCarouselText;

// Animation der Nummern für Statistik

function animateValue(id, start, end, duration) {
    // assumes integer values for start and end
    
    var obj = document.getElementById(id);
    var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    var minTimer = 50;
    // calc step time to show all interediate values
    var stepTime = Math.abs(Math.floor(duration / range));
    
    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);
    
    // get current time and calculate desired end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;
  
    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = new Intl.NumberFormat().format(value);
        if (value == end) {
            clearInterval(timer);
        }
    }
    timer = setInterval(run, stepTime);
    run();
}

var sawStats = false;

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 1300 && !sawStats) {
        sawStats = true;
        animateValue("unfaelle", 0, 2700000, 3000);
        animateValue("gutachten", 0, 650000, 3000);
        animateValue("erfahrung", 0, 10, 3000);
    }
});


