function liked() {
    document.getElementById("afterEventButton1").style.borderColor = "#00bcd4";
    document.getElementById("afterEventButton2").style.borderColor = "#00bcd4";
    document.getElementById("afterEventButton3").style.borderColor = "#00bcd4";
    document.getElementById("afterEventButton4").style.borderColor = "#00bcd4";
    document.getElementById("afterEventButton5").style.borderColor = "#00bcd4";
    document.getElementById("afterEventButton6").style.borderColor = "#00bcd4";
    document.getElementById("afterEventButton7").style.borderColor = "#00bcd4";
    document.getElementById("afterEventButton8").style.borderColor = "#00bcd4";
    
    document.getElementById("afterEventLiked").style.display = "block";
}
function animation5(){
    document.getElementById("star-wrapper5").style.color = "gold";
    document.getElementById("star-wrapper4").style.color = "gold";
    document.getElementById("star-wrapper3").style.color = "gold";
    document.getElementById("star-wrapper2").style.color = "gold";
    document.getElementById("star-wrapper1").style.color = "gold";
}
function animation4(){
    document.getElementById("star-wrapper4").style.color = "gold";
    document.getElementById("star-wrapper3").style.color = "gold";
    document.getElementById("star-wrapper2").style.color = "gold";
    document.getElementById("star-wrapper1").style.color = "gold";
}
function animation3(){
    document.getElementById("star-wrapper3").style.color = "gold";
    document.getElementById("star-wrapper2").style.color = "gold";
    document.getElementById("star-wrapper1").style.color = "gold";
}
function animation2(){
    document.getElementById("star-wrapper2").style.color = "gold";
    document.getElementById("star-wrapper1").style.color = "gold";
}
function animation1(){
    document.getElementById("star-wrapper1").style.color = "gold";
}
function improve() {
    document.getElementById("afterEventImprove").style.display = "block";
}

function changeCSS(event) {
    const el = event.target;
    el.setAttribute('style', 'background-color: #00bcd4; color:white; font-weight:bold');
}
function store(event){
    console.log(event);
    
}
function storeImprove(val){
    console.log(val);
}