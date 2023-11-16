document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.querySelector(".start-button");

    // Create an observable for start button click
    const startButtonClick$ = rxjs.fromEvent(startButton, "click");

    // create countdown subscription so we can reset timer
    let countdownSubscription;

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
        
        // check if we are already subscribed, if yes then unsubscribe to reset
        if (countdownSubscription) {
            countdownSubscription.unsubscribe();
        }

        // Subscribe to the countdown observable
        countdownSubscription = countdown$.subscribe((count) => {
            const timerElement = document.querySelector(".timer");
            const hours = Math.floor(count / 3600);
            const minutes = Math.floor((count % 3600) / 60);
            const seconds = count % 60;

            if (hours === 0 && minutes === 0) {
                timerElement.innerHTML = `${seconds}s`;
            } else if (hours === 0) {
                timerElement.innerHTML = `${minutes}m ${seconds}s`;
            } else {
                timerElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
            }
        });
    });
});

