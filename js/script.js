// 1. stampare in console un ciclo for 

for (let i = 1; i < 101 ; i++ ){
  console.log('i', i);
  // creare un div 
  const box= document.createElement("div");
  // aggiungere la classe al div
  box.classList.add("my_box");

  console.log ('div creato', box);
  
// 2. creare condizioni  

  if (!(i % 3)&& !(i % 5)){
    console.log('div X 3 && X 5 FIZZBUZZ', i);
    box.classList.add("fizz_buzz");
    box.append(i, ' FizzBuzz');
  }
  else if (!(i % 3)){
    console.log('divis x 3  FIZZ', i);
    box.classList.add("fizz");
    box.append(i, ' fizz');

  }
  else if (!(i % 5)){
    console.log('divis x 5 BUZZ', i);
    box.classList.add("buzz");
    box.append(i, ' buzz');
  }
  else {
    box.append(i);
  }
  // stampa su html
  document.querySelector(".my_container").append(box);
}
