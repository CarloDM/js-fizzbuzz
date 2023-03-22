// 1. stampare in console un ciclo for 

for (let i = 1; i < 101 ; i++ ){
  console.log('i', i);
  // creare un div 
  const box= document.createElement("div");
  // aggiungere la classe al div
  box.classList.add("my_box");
  // aggiungere i al div

  console.log ('div creato', box);
  box.append(i);

// 2. creare condizioni  
  if (!(i % 3)){
    console.log('divis x 3  FIZZ', i);
    box.classList.add("fizz");
    box.append(' fizz');
  }
  if (!(i % 5)){
    console.log('divis x 5 BUZZ', i);
    box.classList.add("buzz");
    box.append(' buzz');
  }
  if (!(i % 3)&& !(i % 5)){
    console.log('div X 3 && X 5 FIZZBUZZ', i);
    box.classList.remove("buzz");
    box.classList.remove("fizz");
    box.classList.add("fizz_buzz");
    // box.append(i, ' fizzBuzz');

  }
  document.querySelector(".my_container").append(box);
}
