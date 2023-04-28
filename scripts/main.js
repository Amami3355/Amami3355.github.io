//-----------------------Global variables

//-----------------------Text Areas and progress bars

function showHtmlArea() {
  let htmlEditor = document.querySelector('#html_editor_container');
  let cssEditor = document.querySelector('#css_editor_container');
  let jsEditor = document.querySelector('#js_editor_container');

  htmlEditor.style.display = 'block';
  cssEditor.style.display = 'none';
  jsEditor.style.display = 'none';
}

function showCssArea() {
  let htmlEditor = document.querySelector('#html_editor_container');
  let cssEditor = document.querySelector('#css_editor_container');
  let jsEditor = document.querySelector('#js_editor_container');

  htmlEditor.style.display = 'none';
  cssEditor.style.display = 'block';
  jsEditor.style.display = 'none';
}

function showJsArea() {
  let htmlEditor = document.querySelector('#html_editor_container');
  let cssEditor = document.querySelector('#css_editor_container');
  let jsEditor = document.querySelector('#js_editor_container');

  htmlEditor.style.display = 'none';
  cssEditor.style.display = 'none';
  jsEditor.style.display = 'block';
}

function DisplayHtmlFrame() {
  let htmlTextArea = document.querySelector('#html_editor');
  let cssTextArea = document.querySelector('#css_editor');
  let jsTextArea = document.querySelector('#js_editor');
  let iframe = document.querySelector('iframe');

  let iframeContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <style>${cssTextArea.value}</style>
          <script>
              document.addEventListener('DOMContentLoaded', function() {
                  ${jsTextArea.value}
              });
          </script>
      </head>
      <body>
          ${htmlTextArea.value}
          
      </body>
      </html>
    `;

  let blob = new Blob([iframeContent], { type: 'text/html' });
  let blobURL = URL.createObjectURL(blob);

  iframe.contentWindow.document.close();
  iframe.src = blobURL;
}

// function DisplayHtmlFrame() {
//   let htmlTextArea = document.querySelector('#html_editor');
//   let cssTextArea = document.querySelector('#css_editor');
//   let jsTextArea = document.querySelector('#js_editor');
//   let iframe = document.querySelector('iframe');
//   iframe.contentWindow.document.close();
//   iframe.contentDocument.write(
//     `${htmlTextArea.value} <style>${cssTextArea.value}</style> <script>${jsTextArea.value}</script>`
//   );
// }

function ChangeHTMLMaxLength() {
  let htmlTextArea = document.querySelector('#html_editor');
  let lengthHtml = document.querySelector('#lengths_html');
  // Change maxLength of htmlTextArea according to html tags
  htmlTextArea.maxLength =
    htmlTextArea.value.length -
    htmlTextArea.value.replace(/<\/?[^>]+>/gi, '').length +
    Number(lengthHtml.value);
}

function OnHtmlEditorChanged() {
  DisplayHtmlFrame();
  //   ChangeHtmlProgressBar();
  ChangeHTMLMaxLength();
}

function OnCssEditorChanged() {
  DisplayHtmlFrame();
  //   ChangeCssProgressBar();
}

function OnJsEditorChanged() {
  DisplayHtmlFrame();
  //   ChangeJsProgressBar();
}

function ChangeHtmlProgressBar() {
  let htmlTextArea = document.querySelector('#html_editor');
  let lengthsHtml = document.querySelector('#lengths_html');
  let progressBar = document.querySelector('#html_progress div');
  let pourcentage = document.querySelector('#html_pourcentage');
  let textLength = htmlTextArea.value.replace(/<\/?[^>]+>/gi, '').length;
  if (textLength <= lengthsHtml.value) {
    progressBar.style.width = `${(textLength / lengthsHtml.value) * 100}%`;
    pourcentage.textContent = `${(textLength / lengthsHtml.value) * 100}%`;

    if (textLength <= (1 / 2) * lengthsHtml.value) {
      progressBar.style.backgroundColor = 'green';
    } else if (
      textLength > lengthsHtml.value / 2 &&
      textLength <= (4 / 5) * lengthsHtml.value
    ) {
      progressBar.style.backgroundColor = 'orange';
    } else {
      progressBar.style.backgroundColor = 'red';
    }
  } else {
    progressBar.style.width = `100%`;
    pourcentage.textContent = `100%`;
    progressBar.style.backgroundColor = 'red';
  }
}

function ChangeCssProgressBar() {
  let cssTextArea = document.querySelector('#css_editor');
  let lengthsCss = document.querySelector('#lengths_css');
  let progressBar = document.querySelector('#css_progress div');
  let pourcentage = document.querySelector('#css_pourcentage');
  if (cssTextArea.value.length <= lengthsCss.value) {
    progressBar.style.width = `${
      (cssTextArea.value.length / lengthsCss.value) * 100
    }%`;
    pourcentage.textContent = `${
      (cssTextArea.value.length / lengthsCss.value) * 100
    }%`;
    if (cssTextArea.value.length <= (1 / 2) * lengthsCss.value) {
      progressBar.style.backgroundColor = 'green';
    } else if (
      cssTextArea.value.length > (1 / 2) * lengthsCss.value &&
      cssTextArea.value.length <= (4 / 5) * lengthsCss.value
    ) {
      progressBar.style.backgroundColor = 'orange';
    } else {
      progressBar.style.backgroundColor = 'red';
    }
  } else {
    progressBar.style.width = `100%`;
    pourcentage.textContent = `100%`;
    progressBar.style.backgroundColor = 'red';
  }
}

function ChangeJsProgressBar() {
  let jsTextArea = document.querySelector('#js_editor');

  let lengthsJs = document.querySelector('#lengths_js');
  let progressBar = document.querySelector('#js_progress div');
  let pourcentage = document.querySelector('#js_pourcentage');
  if (jsTextArea.value.length <= lengthsJs.value) {
    progressBar.style.width = `${
      (jsTextArea.value.length / lengthsJs.value) * 100
    }%`;
    pourcentage.textContent = `${
      (jsTextArea.value.length / lengthsJs.value) * 100
    }%`;
    if (jsTextArea.value.length <= (1 / 2) * lengthsJs.value) {
      progressBar.style.backgroundColor = 'green';
    } else if (
      jsTextArea.value.length > (1 / 2) * lengthsJs.value &&
      jsTextArea.value.length <= (4 / 5) * lengthsJs.value
    ) {
      progressBar.style.backgroundColor = 'orange';
    } else {
      progressBar.style.backgroundColor = 'red';
    }
  } else {
    progressBar.style.width = `100%`;
    pourcentage.textContent = `100%`;
    progressBar.style.backgroundColor = 'red';
  }
}

function htmlBarChanged() {
  let progressBar = document.querySelector('#html_bar');
  if (progressBar.value <= 50) progressBar.style.color = 'grenn';
  else if (progressBar.value <= 80) progressBar.style.color = 'orange';
  else progressBar.style.color = 'red';
}

function changeCharLengthHTML() {
  let htmlEditor = document.querySelector('#html_editor');
  let lengthsHtml = document.querySelector('#lengths_html');
  htmlEditor.maxLength = lengthsHtml.value;
  ChangeHtmlProgressBar();
  ChangeCssProgressBar();
  ChangeJsProgressBar();
}

function changeCharLengthCSS() {
  let cssEditor = document.querySelector('#css_editor');
  let lengthscss = document.querySelector('#lengths_css');
  cssEditor.maxLength = lengthscss.value;
}
function changeCharLengthJs() {
  let jsEditor = document.querySelector('#js_editor');
  let lengthsjs = document.querySelector('#lengths_js');
  jsEditor.maxLength = lengthsjs.value;
}

function Execute() {
  let htmlTextArea = document.querySelector('#html_editor');
  let cssTextArea = document.querySelector('#css_editor');
  let jsTextArea = document.querySelector('#js_editor');
  let iframe = document.querySelector('iframe');
  iframe.contentWindow.document.close();
  iframe.contentDocument.write(
    `<style>${cssTextArea.value}</style>  ${htmlTextArea.value} <script>${jsTextArea.value}</script>`
  );
}

function btnDivClicked() {
  let textArea = document.querySelector('#html_editor');
  let lengthsHtml = document.querySelector('#lengths_html');
  console.log('tt' + textArea.value.length);
  console.log('ll' + lengthsHtml.value);
  if (textArea.value.replace(/<\/?[^>]+>/gi, '').length < lengthsHtml.value)
    textArea.value += '<div></div>';
  console.log(textArea.maxLength);
}

function btnParagrapheClicked() {
  let textArea = document.querySelector('#html_editor');
  let lengthsHtml = document.querySelector('#lengths_html');
  if (textArea.value.replace(/<\/?[^>]+>/gi, '').length < lengthsHtml.value)
    textArea.value += '<p></p>';
}

function btnSpanClicked() {
  let textArea = document.querySelector('#html_editor');
  let lengthsHtml = document.querySelector('#lengths_html');
  if (textArea.value.replace(/<\/?[^>]+>/gi, '').length < lengthsHtml.value)
    textArea.value += '<span></span>';
}

function btnTitreClicked() {
  let textArea = document.querySelector('#html_editor');
  let lengthsHtml = document.querySelector('#lengths_html');
  if (textArea.value.replace(/<\/?[^>]+>/gi, '').length < lengthsHtml.value)
    textArea.value += '<h1></h1>';
}
