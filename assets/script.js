/////seção 1;
const color_box = document.getElementById("color_box");
   
const gray_button = document.getElementById("gray_button");
gray_button.onclick = () => {
    color_box.removeAttribute('style');
    color_box.className = "gray";
};

const blue_button = document.getElementById("blue_button");
blue_button.onclick = () => {
    color_box.removeAttribute('style');
    color_box.className = "blue";
};

const pink_button = document.getElementById('pink_button');
pink_button.onclick = () => {
    color_box.removeAttribute('style');
    color_box.className= "pink";
}

//pega a cor que o usuario escolher
const choice_color = document.getElementById('choice_color');
let imputColor = choice_color.addEventListener('input', ()=>{
    let theColor = choice_color.value;
    color_box.style.backgroundColor = theColor;
    // console.log(theColor)
}, false);

const change_radius = document.getElementById('change_radius');
let imputRange = change_radius.addEventListener('input', ()=>{
    let radius = change_radius.value;
    color_box.style.borderRadius = `${radius}%`;
    //  console.log('clicou')
}, false);

/////seção 2;
let count = 0;

const countspan = document.getElementById("countspan");

const count_Number = document.createElement('span');
count_Number.innerText = count;
count_Number.style.fontSize = '22px'
count_Number.style.color = '#00ff'
countspan.appendChild(count_Number);

const counter_button = document.getElementById("counter_button");
counter_button.onclick = () => {
    count_Number.innerText = count+=1;
    NumberIss.innerText = '';
}
const counter_btn_reset = document.getElementById("counter_btn_reset");
counter_btn_reset.onclick = () =>{
    count_Number.innerText = count =0;
    NumberIss.innerText = '';
}

/////seção 3;
const evenOdd_result = document.querySelector('#evenOdd_result');
const NumberIss = document.createElement('p')
evenOdd_result.appendChild(NumberIss)

const even_or_odd_button = document.getElementById("even_or_odd_button");
even_or_odd_button.onclick = () =>{
    
    NumberIss.innerText = count %2 === 0 ? 'Is even' : 'Is odd'
}