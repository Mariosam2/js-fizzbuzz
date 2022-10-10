 const row = document.querySelector('.row');


for(let i = 1; i < 106; i++){
    const box = document.createElement('div');
    box.classList.add('box')
    row.append(box);
    if (i % 5 == 0 && i % 3 == 0){
        box.append("FizzBuzz");
        box.style.backgroundColor = "var(--bg-fizzBuzz)";
    } else if (i % 3 == 0){
        box.append("Fizz");
        box.style.backgroundColor = "var(--bg-fizz)"
    } else if (i % 5 == 0) {
        box.append("Buzz");
        box.style.backgroundColor = "var(--bg-Buzz)"
    } else {
        box.append(i);
    }
}