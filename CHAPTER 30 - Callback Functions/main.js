function hello(wait) {
    console.log("Hello!");
    wait();
}

function wait() {
    console.log("Waiting...");
}

hello(wait);