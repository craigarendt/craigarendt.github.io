     // body element, base element, midi file, if started.
    var body = document.getElementsByTagName("body")[0], el, midi, started;

    /**
     * Create a new element to fall to the bottom of the screen and set a timeout to make another!
     */
    function create() {
        // Clone the base and get a random screen time.
        var a = el.cloneNode(),
            time = Math.random()*16 + 12;

        // Append the element and position somewhere at the top of the screen with a transition time.
        body.appendChild(a);
        a.style.left = (Math.random() * screen.width) + "px";
        a.style.transition = "transform " + time+ "s linear";

        // Apply a transform to move the element to the bottom.
        setTimeout(function() {
            a.style.transform = "translateY(" + screen.height + "px) rotate3d(" + Math.random() + "," + Math.random() + "," + Math.random() + ",2000deg)"
        }, 200);
        // Remove the element when it reaches the bottom.
        setTimeout(function() {
            body.removeChild(a)
        }, time * 1000);

        // Set a timeout to continue making elements.
        started = setTimeout(create, Math.random()*140 + 60)
    }

    // Full set of key codes, current key index.
    var code = [38,38,40,40,37,39,37,39,66,65], key = 0;
    document.onkeydown = function(e) {
        // Increment key if the keycode matches.
        if (code[key++] == e.keyCode) {
            if (key == 10) {
                // If the code was completed start/stop it.
                console.log("KONAMI!!!");
                if (!started) {
                    // Setup the base element.
                    el = document.createElement("img");
                    el.src = "c150-small-note-front.png";
                    el.className = "falling";

                    // Start creating elements.
                    create();

                    // Start playing the midi - source: https://freemidi.org/
                    midi = new Audio("national-anthem.mp3");
                    midi.volume = 0.3;
                    midi.loop = true;
                    midi.play();
                } else {
                    // Stop creating elements.
                    clearTimeout(started);

                    // Reset to stopped.
                    started = false;

                    // Stop playing the midi.
                    midi.pause();
                }
                document.onkeypress = null;
                key = 0
            }
        } else {
            // Reset if the wrong key was pressed.
            key = 0
        }
    }