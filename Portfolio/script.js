let jsc=0;
let jsp=["media/media/factorial_cherry_tree.jpg","media/aquarium_small.jpg","media/cucoo_small.jpg"]

let js = document.querySelector("#javascript")
let j1 = document.querySelector("#j1");
let j2 = document.querySelector("#j2");
let j3 = document.querySelector("#j3");

let web = document.querySelector("#web")
let w1 = document.querySelector("#w1");
let w2 = document.querySelector("#w2");
let w3 = document.querySelector("#w3");

function shiftJS() {
    // js.innerHTML = jsp[jsc];
    if ( jsc== jsp.length - 3) {//0
        j1.innerHTML = jsp[0];
        j2.innerHTML = jsp[1];
        j3.innerHTML = jsp[2];
    } else if (jsc == jsp.length - 2) {//1
        j1.innerHTML = jsp[2];
        j2.innerHTML = jsp[0];
        j3.innerHTML = jsp[1];
    } else if (jsc == jsp.length - 1) {//2
        j1.innerHTML = jsp[1];
        j2.innerHTML = jsp[2];
        j3.innerHTML = jsp[0];
    } 
}

nextJS.onclick = nextJs

function nextJs() {
    //tells the program to shift to the next definition in the definition list
    console.log("next button was clicked");
    if (jsc + 1 != jsp.length) {
        jsc++
    } else {
        jsc = 0
    }
    shiftJS();

}