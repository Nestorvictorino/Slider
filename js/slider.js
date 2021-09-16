let slider = document.querySelector(".img");
let sliderIndividual = document.getElementsByClassName("sl");
let contador = 1;
let width = sliderIndividual[0].clientWidth + 5;
let intervalo = 3000;
let Ancho = screen.width;


window.onresize = Myfunction;

function Myfunction(){
  width = sliderIndividual[0].clientWidth + 5;
  console.log(`ejecucion`);
  contador = 1;
  slides();
}

setInterval(() => {
  slides();
}, intervalo);

const slides = () => {
  slider.style.transform = `translate( ${-width*contador}px)`;
  slider.style.transition = "1.5s";
  contador++;

  if(contador == 6){
    setTimeout(() => {
      slider.style.transform = `translate(0px)`;
      slider.style.transition = "0s";
      contador = 1;
    }, 1500);
  }
}





