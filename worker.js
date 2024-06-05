self.onmessage = ({data}) => {
    console.log('Main script sent',data);

    postMessage('I am worker.Nice to meet you!');

    if(data.type === 'command')
    {
        let count = 0;
const now = performance.now();
for(let i = 0; i < 20000000;i++){
    count++;
}

console.log('Time of execution is', performance.now() - now)
alert('UI is free');
    }
}

