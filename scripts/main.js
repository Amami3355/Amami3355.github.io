
//-----------------------Text Areas and progress bars

function showHtmlArea(){
    let htmlEditor = document.querySelector("#html_editor_container");
    let cssEditor = document.querySelector("#css_editor_container");
    let jsEditor = document.querySelector("#js_editor_container");


    htmlEditor.style.display = "block";
    cssEditor.style.display = "none";
    jsEditor.style.display  ="none";

}

function showCssArea(){
    let htmlEditor = document.querySelector("#html_editor_container");
    let cssEditor = document.querySelector("#css_editor_container");
    let jsEditor = document.querySelector("#js_editor_container");


    htmlEditor.style.display = "none";
    cssEditor.style.display = "block";
    jsEditor.style.display  ="none";

}

function showJsArea(){
    let htmlEditor = document.querySelector("#html_editor_container");
    let cssEditor = document.querySelector("#css_editor_container");
    let jsEditor = document.querySelector("#js_editor_container");


    htmlEditor.style.display = "none";
    cssEditor.style.display = "none";
    jsEditor.style.display  ="block";

}

function DisplayHtmlFrame(){
    let htmlTextArea = document.querySelector("#html_editor");
    let cssTextArea = document.querySelector("#css_editor");
    let jsTextArea = document.querySelector("#js_editor");
    let iframe = document.querySelector('iframe');
    iframe.contentWindow.document.close();
    iframe.contentDocument.write(`<style>${cssTextArea.value}</style>  ${htmlTextArea.value} <script>${jsTextArea.value}</script>`);

}

function OnHtmlEditorChanged(){
    DisplayHtmlFrame();
    ChangeHtmlProgressBar();
}

function OnCssEditorChanged(){
    DisplayHtmlFrame();
    ChangeCssProgressBar();
}

function OnJsEditorChanged(){
    DisplayHtmlFrame();
    ChangeJsProgressBar();
}

function ChangeHtmlProgressBar(){
    let htmlTextArea = document.querySelector("#html_editor");
    let lengthsHtml = document.querySelector("#lengths_html");
    let progressBar = document.querySelector("#html_progress div");
    let pourcentage = document.querySelector("#html_pourcentage");
    progressBar.style.width = `${htmlTextArea.value.length/lengthsHtml.value*100}%`;
    pourcentage.textContent = `${htmlTextArea.value.length/lengthsHtml.value*100}%`;
    if (htmlTextArea.value.length <= 1/2*lengthsHtml.value){
        progressBar.style.backgroundColor = "green";
    }else if ((htmlTextArea.value.length> (lengthsHtml.value/2)) && (htmlTextArea.value.length <= 4/5*lengthsHtml.value)){
        progressBar.style.backgroundColor = "orange";
    }else{
        progressBar.style.backgroundColor = "red";
    }
}


function ChangeCssProgressBar(){
    let cssTextArea = document.querySelector("#css_editor");
    let lengthsCss = document.querySelector("#lengths_css");
    let progressBar = document.querySelector("#css_progress div");
    let pourcentage = document.querySelector("#css_pourcentage");
    progressBar.style.width = `${cssTextArea.value.length/lengthsCss.value*100}%`;
    pourcentage.textContent = `${cssTextArea.value.length/lengthsCss.value*100}%`;
    if (cssTextArea.value.length <= 1/2*lengthsCss.value){
        progressBar.style.backgroundColor = "green";
    }else if ((cssTextArea.value.length> 1/2*lengthsCss.value) && (cssTextArea.value.length <= 4/5*lengthsCss.value)){
        progressBar.style.backgroundColor = "orange";
    }else{
        progressBar.style.backgroundColor = "red";
    }
}

function ChangeJsProgressBar(){
    let jsTextArea = document.querySelector("#js_editor"); 

    let lengthsJs = document.querySelector("#lengths_js");
    let progressBar = document.querySelector("#js_progress div");
    let pourcentage = document.querySelector("#js_pourcentage");
    progressBar.style.width = `${jsTextArea.value.length/lengthsJs.value*100}%`;
    pourcentage.textContent = `${jsTextArea.value.length/lengthsJs.value*100}%`;
    if (jsTextArea.value.length <= 1/2*lengthsJs.value){
        progressBar.style.backgroundColor = "green";
    }else if ((jsTextArea.value.length> 1/2*lengthsJs.value) && (jsTextArea.value.length <= 4/5*lengthsJs.value)){
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



function changeCharLengthHTML(){
    let htmlEditor = document.querySelector("#html_editor");
    let lengthsHtml = document.querySelector("#lengths_html");
    htmlEditor.maxLength = lengthsHtml.value;

}

function changeCharLengthCSS(){
    let cssEditor = document.querySelector("#css_editor");
    let lengthscss = document.querySelector("#lengths_css");
    cssEditor.maxLength = lengthscss.value;

}
function changeCharLengthJs(){
    let jsEditor = document.querySelector("#js_editor");
    let lengthsjs = document.querySelector("#lengths_js");
    jsEditor.maxLength = lengthsjs.value;

}

function Execute()
{

    let htmlTextArea = document.querySelector("#html_editor");
    let cssTextArea = document.querySelector("#css_editor");
    let jsTextArea = document.querySelector("#js_editor");
    let iframe = document.querySelector('iframe');
    iframe.contentWindow.document.close();
    iframe.contentDocument.write(`<style>${cssTextArea.value}</style>  ${htmlTextArea.value} <script>${jsTextArea.value}</script>`);
}