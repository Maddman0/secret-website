var frame = 0;
var emoji = document.getElementById("emoji");

function tick() {
    frame % 100 <= 20 ? document.title = "hi" : document.title = "dontell anywon";
    frame % 200 <= 80 ? emoji.textContent = "😘" : emoji.textContent = "🥰";
    console.log(frame);
    frame++;
    window.requestAnimationFrame(tick);
}

window.requestAnimationFrame(tick);
    
