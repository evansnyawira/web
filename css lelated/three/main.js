document.querySelector('.runButton').addEventListener('click', play, false);

function play() {
    document.querySelector('.box').className = 'box';
    window.requestAnimationFrame(function(time) {
        window.requestAnimationFrame(function(time) {
            document.querySelector('.box').className = 'box changing';
        });
    });
}
