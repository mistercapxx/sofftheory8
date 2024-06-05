const s = new WebSocket("wss://echo.websocket.org");
s.addEventListener("open", (e) => {
console.log("connected");
s.send("Hello WebSocket!");
console.log("client -> server: Hello WebSocket!");
});
s.addEventListener("message", (e) => {
console.log("client <- server:", e.data);
});

s.addEventListener("close", (e) => {
    console.log("disconnected");
    });
    setTimeout(() => {
    s.send("Hello World!");
    console.log("client -> server: Hello World!");
    }, 1000);
    setTimeout(() => s.close(), 2000);