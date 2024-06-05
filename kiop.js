localStorage.setItem("user", "Tom");
localStorage.setItem("role", "guest");
console.log(localStorage.getItem("user")); // "Tom"
console.log(localStorage.getItem("role")); // "guest"
console.log(localStorage.length); // 2
console.log(localStorage.key(0)); // "user"
localStorage.setItem("user", "Bob");
console.log(localStorage.getItem("user")); // "Bob"
localStorage.removeItem("role");
console.log(localStorage.length); // 1
localStorage.clear();
console.log(localStorage.length); // 0


localStorage.setItem("data1", [1, 2, 3]);
localStorage.setItem("data2", JSON.stringify([1, 2, 3]));
const data1 = localStorage.getItem("data1");
console.log(data1 instanceof Array); // false
console.log(data1); // "1,2,3"
const data2 = JSON.parse(localStorage.getItem("data2"));
console.log(data2 instanceof Array); // true
console.log(data2); // [1, 2, 3]

