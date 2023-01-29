// const axios = require("axios");


// axios.get('https://google.com').then((res)=>console.log(res.data));
let Ball =document.getElementById('ball');
let Back = document.getElementById('back-ground');
let Input = document.querySelector('input');
let Base = document.getElementById('base');
let Prem = document.getElementById('prem');
let Crop = document.getElementById('crop');
let Base_Text =document.getElementById('base-text');
let prem_Text =document.getElementById('prem-text');
let crop_Text =document.getElementById('crop-text');

Back.onclick=()=>{
    Back.style.cssText='background:blue';
    Ball.style.cssText =' transform: translateX(100%);';
}



