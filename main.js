//Bold
function toggleBold() {
  let textarea = document.getElementById("textarea");

  if (textarea.style.fontWeight === "bold") {
    textarea.style.fontWeight = "normal";
  } else {
    textarea.style.fontWeight = "bold";
  }
}

//Italic
function toggleItalic() {
  let textarea = document.getElementById("textarea");
  textarea.style.fontStyle =
    textarea.style.fontStyle === "italic" ? "normal" : "italic";
}

//Header
function showHeaders() {
  var headers = document.querySelector(".headers");
  headers.classList.toggle("active");
}
function setHeaderSize(headerLevel) {
  var textarea = document.getElementById("textarea");
  textarea.style.fontSize = 7 - headerLevel + "rem";
}

//AlignButtonRight
const textarea = document.getElementById("textarea");
const alignButton = document.getElementById("alignButtonRight");

alignButton.addEventListener("click", function () {
  if (textarea.style.textAlign === "left") {
    textarea.style.textAlign = "right";
  } else {
    textarea.style.textAlign = "right";
  }
});

//AlignButtonCenter
const textareaCenter = document.getElementById("textarea");
const alignButtonCenter = document.getElementById("alignButtonCenter");

alignButtonCenter.addEventListener("click", function () {
  textarea.style.textAlign = "center";
});

//AlignButtonLeft
const textareaLeft = document.getElementById("textarea");
const alignButtonLeft = document.getElementById("alignButtonLeft");

alignButtonLeft.addEventListener("click", function () {
  textareaLeft.style.textAlign = "left";
});

//ColorButton
const colorButton = document.getElementById("colorButton");
const colorPicker = document.getElementById("colorPicker");

let isColorPickerVisible = false;

colorButton.addEventListener("click", function () {
  if (isColorPickerVisible) {
    colorPicker.style.display = "none";
    textarea.style.color = "black";
  } else {
    colorPicker.style.display = "block";
  }

  isColorPickerVisible = !isColorPickerVisible;
});

colorPicker.addEventListener("input", function () {
  const color = colorPicker.value;
  // console.log(color);
  textarea.style.color = color;
});

//IncreaseFontSize
function increaseFontSize() {
  const textarea = document.getElementById("textarea");
  const currentSize = parseInt(getComputedStyle(textarea).fontSize);
  const newSize = currentSize + 5;
  textarea.style.fontSize = newSize + "px";
}

//DecreaseFontSize
function decreaseFontSize() {
  const textarea = document.getElementById("textarea");
  const currentSize = parseInt(getComputedStyle(textarea).fontSize);
  const newSize = currentSize - 5;
  textarea.style.fontSize = newSize + "px";
}

//Font
document.addEventListener("DOMContentLoaded", function () {
  const fontListButton = document.getElementById("fontListButton");
  const fontList = document.getElementById("fontList");
  const textArea = document.getElementById("textarea");

  fontListButton.addEventListener("click", function (event) {
    event.stopPropagation();
    fontList.style.display =
      fontList.style.display === "block" ? "none" : "block";
  });

  fontList.addEventListener("click", function (event) {
    if (event.target && event.target.nodeName === "LI") {
      const selectedFont = event.target.dataset.font;
      console.log(selectedFont);
      textArea.style.fontFamily = selectedFont;
    }
    fontList.style.display = "none";
  });

  document.addEventListener("click", function (event) {
    if (event.target !== fontListButton) {
      fontList.style.display = "none";
    }
  });
});

//AlignRightButton and AlignLeftButton
document.addEventListener("DOMContentLoaded", function () {
  const textArea = document.getElementById("textarea");
  const alignRightButton = document.getElementById("alignRightButton");
  const alignLeftButton = document.getElementById("alignLeftButton");

  alignRightButton.addEventListener("click", function () {
    textArea.classList.remove("ltr");
    textArea.classList.add("rtl");
  });

  alignLeftButton.addEventListener("click", function () {
    textArea.classList.remove("rtl");
    textArea.classList.add("ltr");
  });
});

//Counter
const textArea = document.querySelector("#textarea");
const counter = document.querySelector("#counter");

textArea.addEventListener("input", handleInput);

function handleInput(event) {
  let inputText = event.target.textContent;
  let countDown = 300 - inputText.length;

  if (countDown < 0) {
    textArea.textContent = inputText.substring(0, 300);
    countDown = 0;
  }

  if (countDown <= 10) {
    counter.style.color = "red";
  } else {
    counter.style.color = "rgb(8, 144, 26)";
  }
  counter.textContent = countDown;
}

//ClearButton
document.getElementById("clearButton").addEventListener("click", function () {
  let currentText = textArea.textContent;
  let newText = currentText.slice(0, -1);
  let lastCharacter = currentText.slice(-1);

  textArea.textContent = newText;

  let countDown = 300 - newText.length;
  counter.textContent = countDown;

  if (countDown > 10) {
    counter.style.color = "greenyellow";
  }

  let clearedCharacters = localStorage.getItem("clearedCharacters") || "";
  clearedCharacters += lastCharacter;
  localStorage.setItem("clearedCharacters", clearedCharacters);
});

// ReplayButton
document.getElementById("replayButton").addEventListener("click", function () {
  let currentText = textArea.textContent;
  let clearedCharacters = localStorage.getItem("clearedCharacters") || "";

  if (clearedCharacters.length > 0) {
    let lastCharacter = clearedCharacters.charAt(clearedCharacters.length - 1);

    textArea.textContent += lastCharacter;

    clearedCharacters = clearedCharacters.slice(0, -1);
    localStorage.setItem("clearedCharacters", clearedCharacters);

    let countDown = 300 - currentText.length;
    counter.textContent = countDown;

    if (countDown > 10) {
      counter.style.color = "greenyellow";
    }
  }
});

// Highlight
function highlightWord() {
  let textarea = document.querySelector("#textarea");
  let text = textarea.innerText;
  console.log(text);

  let selection = window.getSelection();
  console.log(selection);
  if (selection.rangeCount > 0) {
    let rangeColor = selection.getRangeAt(0);
    let selectedText = rangeColor.toString();
    console.log(selectedText);

    let span = document.createElement("span");
    span.className = "highlighted";
    console.log(span);
    rangeColor.surroundContents(span);
  }
}

//Sub & Sup
document.getElementById("moveButtonSub").addEventListener("click", function () {
  const textarea = document.getElementById("textarea");
  let selection = window.getSelection();

  if (selection.rangeCount > 0) {
    let range = selection.getRangeAt(0);
    let selectedText = range.toString();

    if (selectedText.length > 0) {
      let span = document.createElement("span");
      span.style.position = "relative";
      span.style.top = "7px";
      span.appendChild(document.createTextNode(selectedText));

      range.deleteContents();
      range.insertNode(span);

      selection.removeAllRanges();
    }
  }
});

document.getElementById("moveButtonSup").addEventListener("click", function () {
  const textarea = document.getElementById("textarea");
  let selection = window.getSelection();

  if (selection.rangeCount > 0) {
    let range = selection.getRangeAt(0);
    let selectedText = range.toString();

    if (selectedText.length > 0) {
      let sup = document.createElement("sup");
      sup.style.position = "relative";
      sup.style.top = "-5px";
      sup.appendChild(document.createTextNode(selectedText));

      range.deleteContents();
      range.insertNode(sup);

      selection.removeAllRanges();
    }
  }
});

//Delete-Link
document
  .getElementById("delete-link-button")
  .addEventListener("click", function () {
    const textArea = document.getElementById("textarea");
    let linkElements = textArea.getElementsByTagName("a");

    if (linkElements.length > 0) {
      let firstLink = linkElements[0];
      let textNode = document.createTextNode(firstLink.textContent);
      firstLink.parentNode.replaceChild(textNode, firstLink);
    }
  });

//Add-Link
document
  .getElementById("add-link-button")
  .addEventListener("click", function () {
    let selectedText = window.getSelection().toString();
    if (selectedText.length > 0) {
      let linkURL = prompt("لینک را وارد کنید:");
      if (linkURL) {
        let linkElement = document.createElement("a");
        linkElement.href = linkURL;
        linkElement.textContent = selectedText;

        let range = window.getSelection().getRangeAt(0);
        range.deleteContents();
        range.insertNode(linkElement);
      }
    } else {
      alert("Please select text to convert to link.");
    }
  });

// AddCircleButton
function addCircleBeforeSelectedText() {
  let selectedText = window.getSelection().toString();

  if (selectedText === "") {
    return;
  }

  let circle = document.createElement("div");
  circle.className = "circle";

  let newText = circle.outerHTML + selectedText;
  let range = window.getSelection().getRangeAt(0);

  range.deleteContents();
  range.insertNode(document.createRange().createContextualFragment(newText));
}
document
  .getElementById("addCircleButton")
  .addEventListener("click", addCircleBeforeSelectedText);

//NumberedButton
function insertOrderedList() {
  const textarea = document.getElementById("textarea");
  document.execCommand("insertOrderedList");

  const listItems = textarea.querySelectorAll("li");
  listItems.forEach((item) => {
    if (item.style.listStyleType === "decimal") {
      item.style.listStyleType = "unset";
    }
  });
}

const listCircleBtn = document.querySelector("#numberedButton");
listCircleBtn.addEventListener("click", insertOrderedList);
