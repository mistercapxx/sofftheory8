// localStorage.setItem('course','React');
// console.log(localStorage.getItem('course'));
// localStorage.removeItem('loglevel');
// localStorage.setItem('course','node')

// sessionStorage.setItem('type','marathon');
// console.log(sessionStorage.getItem('type'));
// sessionStorage.removeItem('type');


// sessionStorage.setItem('type','internship');
// document.cookie = 'name=Car';
// document.cookie = 'name=Car; expires=' + new Date (2025,0,1);
// document.cookie = 'otheName=Express; expires=' + new Date(9999,0,1);


const worker = new Worker('worker.js');

worker.onmessage = data => {
    console.log('Worker sent', data);
}

worker.postMessage('hello from main script!');

worker.postMessage({type: 'command'});

alert('UI finally free');


