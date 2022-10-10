/* Traccia:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

/* 
Strumenti:
for loop 
document.createElement()
append method
classlist methods */

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