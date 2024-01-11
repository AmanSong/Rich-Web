const saySomething = (a) => {
    console.log("This is the first statement at level " + a);
    setTimeout(someInfo = () => {
        if (a) { saySomething(a - 1); }
        setTimeout(someInfo = () => {
            console.log('This is the second statement at level ' + a);
        });
    });
}

saySomething(2);
