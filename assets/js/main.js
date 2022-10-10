 const row = document.querySelector('.row');


for(let i = 1; i < 106; i++){
    const box = document.createElement('div');
    box.classList.add('box')
    row.append(box);
    if (i % 5 == 0 && i % 3 == 0){
        box.append("FizzBuzz");
        box.style.backgroundColor = "red";
    } else if (i % 3 == 0){
        box.append("Fizz");
        box.style.backgroundColor = "blue"
    } else if (i % 5 == 0) {
        box.append("Buzz");
        box.style.backgroundColor = "green"
    } else {
        box.append(i);
    }
}