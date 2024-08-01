Swal.fire("Welcome to Hardelz store!");

const buttons = document.getElementById('btn1');
const buttons2 = document.getElementById('btn2');
const buttons3 = document.getElementById('btn3');
const buttons4 = document.getElementById('btn4');
const buttons5 = document.getElementById('btn5');
const buttons6 = document.getElementById('btn6');
const buttons7 = document.getElementById('btn7');
const buttons8 = document.getElementById('btn8');
const buttons9 = document.getElementById('btn9');

// this one is for picked cart
const pickCart = document.getElementById("cart1")
const pickCart2 = document.getElementById("cart2")
const pickCart3 = document.getElementById("cart3")
const pickCart4 = document.getElementById("cart4")
const pickCart5 = document.getElementById("cart5")
const pickCart6 = document.getElementById("cart6")
const pickCart7 = document.getElementById("cart7")
const pickCart8 = document.getElementById("cart8")
const pickCart9 = document.getElementById("cart9")

const returntopage = document.getElementById('return');
const confirmPage = document.getElementById('confirm');
const countElement = document.getElementById('count');
let count = 0;
const orderConfirmation = document.getElementById('order-confirmation')

// increase of figure
const figures = document.getElementById('figures')
const figures2 = document.getElementById('figures2')
const figures3 = document.getElementById('figures3')
const figures4 = document.getElementById('figures4')
const figures5 = document.getElementById('figures5')
const figures6 = document.getElementById('figures6')
const figures7 = document.getElementById('figures7')
const figures8 = document.getElementById('figures8')
const figures9 = document.getElementById('figures9')
let fig = 0;
let fig2 = 0;
let fig3 = 0;
let fig4 = 0;
let fig5 = 0;
let fig6 = 0;
let fig7 = 0;
let fig8 = 0;
let fig9 = 0;

const increase = document.getElementById('increase')
const increase2 = document.getElementById('increase2')
const increase3 = document.getElementById('increase3')
const increase4 = document.getElementById('increase4')
const increase5 = document.getElementById('increase5')
const increase6 = document.getElementById('increase6')
const increase7= document.getElementById('increase7')
const increase8 = document.getElementById('increase8')
const increase9 = document.getElementById('increase9')
let inc = 4.00;
let inc2 = 4.50;
let inc3 = 6.50;
let inc4 = 7.00;
let inc5 = 8.00;
let inc6 = 8.00;
let inc7 = 6.50;
let inc8 = 5.50;
let inc9 = 6.50;

const image = document.getElementById('img');

image.addEventListener("click", () => {
  pickCart.style.display = 'none'
  alert("message")
})



buttons.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
  const boykill = document.getElementById("boykill")
  boykill.style.display = 'block'
  const defaultPage = document.getElementById("default-page")
  defaultPage.style.opacity = 0 
  pickCart.style.display = 'block'
  fig++;
  figures.textContent = fig;
  const newInc = inc++;
  increase.textContent = newInc
});

buttons2.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
  const boykill = document.getElementById("boykill")
  boykill.style.display = 'block'
  const defaultPage = document.getElementById("default-page")
  defaultPage.style.opacity = 0 
  pickCart2.style.display = 'block'
  fig2++;
  figures2.textContent = fig2;
  const newInc2 = inc + 4.50;
  increase.textContent = newInc2
});

buttons3.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
  const boykill = document.getElementById("boykill")
  boykill.style.display = 'block'
  const defaultPage = document.getElementById("default-page")
  defaultPage.style.opacity = 0
  pickCart3.style.display = 'block'
  fig3++;
  figures3.textContent = fig3;
});

buttons4.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
  const boykill = document.getElementById("boykill")
  boykill.style.display = 'block'
  const defaultPage = document.getElementById("default-page")
  defaultPage.style.opacity = 0
  pickCart4.style.display = 'block'
  fig4++;
  figures4.textContent = fig4;
});

buttons5.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
  const boykill = document.getElementById("boykill")
  boykill.style.display = 'block'
  const defaultPage = document.getElementById("default-page")
  defaultPage.style.opacity = 0
  pickCart5.style.display = 'block'
  fig5++;
  figures5.textContent = fig5;
});

buttons6.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
  const boykill = document.getElementById("boykill")
  boykill.style.display = 'block'
  const defaultPage = document.getElementById("default-page")
  defaultPage.style.opacity = 0
  pickCart6.style.display = 'block'
  fig6++;
  figures6.textContent = fig6;
});

buttons7.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
  const boykill = document.getElementById("boykill")
  boykill.style.display = 'block'
  const defaultPage = document.getElementById("default-page")
  defaultPage.style.opacity = 0
  pickCart7.style.display = 'block'
  fig7++;
  figures7.textContent = fig7;
});

buttons8.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
  const boykill = document.getElementById("boykill")
  boykill.style.display = 'block'
  const defaultPage = document.getElementById("default-page")
  defaultPage.style.opacity = 0 
  pickCart8.style.display = 'block'
  fig8++;
  figures8.textContent = fig8;
});

buttons9.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
  const boykill = document.getElementById("boykill")
  boykill.style.display = 'block'
  const defaultPage = document.getElementById("default-page")
  defaultPage.style.opacity = 0 
  pickCart9.style.display = 'block'
  fig9++;
  figures9.textContent = fig9;
});

returntopage.addEventListener('click', () => {
  orderConfirmation.style.display = 'none'
  location.reload()
});

confirmPage.addEventListener('click', () => {
  // alert("message");
  orderConfirmation.style.display = 'block'
});






