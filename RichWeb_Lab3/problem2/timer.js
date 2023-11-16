document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.querySelector(".start-button");

    // Create an observable for start button click
    const startButtonClick$ = rxjs.fromEvent(startButton, "click");

    startButtonClick$.subscribe(() => {
        // get inputs
        const hour = document.querySelector(".hour-input").value;
        const min = document.querySelector(".minute-input").value;
        const sec = document.querySelector(".second-input").value;

        // Create observables for each input
        const hour$ = rxjs.of(hour);
        const min$ = rxjs.of(min);
        const sec$ = rxjs.of(sec);

        // Create an observable for the countdown
        const countdown$ = rxjs.interval(1000).pipe(
            rxjs.operators.scan((acc) => acc - 1, hour * 3600 + min * 60 + +sec),
            rxjs.operators.takeWhile((count) => count >= 0)
        );

        // Subscribe to the countdown observable
        countdown$.subscribe((count) => {
            const timerElement = document.querySelector(".timer");
            const hours = Math.floor(count / 3600);
            const minutes = Math.floor((count % 3600) / 60);
            const seconds = count % 60;

            timerElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
        });
    });
});

  