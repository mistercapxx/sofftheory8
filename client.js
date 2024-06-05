const client = new WebSocket('ws://localhost:8080');

client.onopen = () => {
    console.log('Connection done');

    client.send('Hello how are you?');
}

client.onmessage = ({data}) => {
    console.log(data);
}
