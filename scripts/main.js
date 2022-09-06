
//-----------------------Text Areas and progress bars
function showCssArea(){
    let htmlEditor = document.querySelector("#html_editor");
    let cssEditor = document.querySelector("#css_editor");
    let jsEditor = document.querySelector("#js_editor");
    htmlEditor.style.display = "none";
    cssEditor.style.display = "block";
    jsEditor.style.display  ="none";
}

function showHtmlArea(){
    let htmlEditor = document.querySelector("#html_editor");
    let cssEditor = document.querySelector("#css_editor");
    let jsEditor = document.querySelector("#js_editor");
    htmlEditor.style.display = "block";
    cssEditor.style.display = "none";
    jsEditor.style.display  ="none";
}

function showJsArea(){
    let htmlEditor = document.querySelector("#html_editor");
    let cssEditor = document.querySelector("#css_editor");
    let jsEditor = document.querySelector("#js_editor");
    htmlEditor.style.display = "none";
    cssEditor.style.display = "none";
    jsEditor.style.display  ="block";
}

function ChangeHtmlProgressBar(){
    let htmlTextArea = document.querySelector("#html_editor");
    
    let progressBar = document.querySelector("#html_progress div");
    let pourcentage = document.querySelector("#html_pourcentage");
    progressBar.style.width = `${htmlTextArea.value.length/2}%`;
    pourcentage.textContent = `${htmlTextArea.value.length/2}%`;
    if (htmlTextArea.value.length <= 100){
        progressBar.style.backgroundColor = "green";
    }else if ((htmlTextArea.value.length> 100) && (htmlTextArea.value.length <= 160)){
        progressBar.style.backgroundColor = "orange";
    }else{
        progressBar.style.backgroundColor = "red";
    }
}


function ChangeCssProgressBar(){
    let cssTextArea = document.querySelector("#css_editor");
    let progressBar = document.querySelector("#css_progress div");
    let pourcentage = document.querySelector("#css_pourcentage");
    progressBar.style.width = `${cssTextArea.value.length/2}%`;
    pourcentage.textContent = `${cssTextArea.value.length/2}%`;
    if (cssTextArea.value.length <= 100){
        progressBar.style.backgroundColor = "green";
    }else if ((cssTextArea.value.length> 100) && (cssTextArea.value.length <= 160)){
        progressBar.style.backgroundColor = "orange";
    }else{
        progressBar.style.backgroundColor = "red";
    }
}

function ChangeJsProgressBar(){
    let jsTextArea = document.querySelector("#js_editor"); 
    let progressBar = document.querySelector("#js_progress div");
    let pourcentage = document.querySelector("#js_pourcentage");
    progressBar.style.width = `${jsTextArea.value.length/2}%`;
    pourcentage.textContent = `${jsTextArea.value.length/2}%`;
    if (jsTextArea.value.length <= 100){
        progressBar.style.backgroundColor = "green";
    }else if ((jsTextArea.value.length> 100) && (jsTextArea.value.length <= 160)){
        progressBar.style.backgroundColor = "orange";
    }else{
        progressBar.style.backgroundColor = "red";
    }
}

function htmlBarChanged(){
    let progressBar = document.querySelector("#html_bar");
    if (progressBar.value <= 50)
        progressBar.style.color = "grenn";
    else if (progressBar.value <= 80)
        progressBar.style.color = "orange";
    else
        progressBar.style.color = "red";
}