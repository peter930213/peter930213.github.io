const parallaxEls = document.querySelectorAll(".parallax");

let xValue = 0,
  yValue = 0;

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

 

  parallaxEls.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue*speedy}px))`;
  });
});

function toggleDiv() {
  var div = document.getElementById("myDiv");
  div.style.display = div.style.display === "none" ? "block" : "none";
  div.style.opacity = div.style.opacity === "0" ? "1" : "0";
}
function closeMessageDiv() {
  var messageDiv = document.getElementById("messageDiv");
  messageDiv.style.display = "none";
}



function checkInput() {
  var textareaField = document.getElementById("textareaField");
  var textareaField2 = document.getElementById("textareaField2");
  var textareaField3 = document.getElementById("textareaField3");
  var messageDiv = document.getElementById("messageDiv");
  var messageContent = document.getElementById("messageContent");


  if (textareaField.value.trim() === "") {
    
      // 若 textarea 為空，顯示提示訊息的 div
      messageContent.innerText = "請填寫資料";
      messageDiv.style.color = "red";
    
  } else {
    if (textareaField2.value.trim() === "") {
    
      // 若 textarea 為空，顯示提示訊息的 div
      messageContent.innerText = "請填寫資料";
      messageDiv.style.color = "red";
    
    } else {
        if (textareaField3.value.trim() === "") {
    
        // 若 textarea 為空，顯示提示訊息的 div
        messageContent.innerText = "請填寫資料";
        messageDiv.style.color = "red";
      
     } else {
      // 若 textarea 不為空，顯示另一個 div
      window.location.href = "pur.html"
  }
}
}
  // 顯示提示訊息的 div
  messageDiv.style.display = "block";

}

// JavaScript 函數，關閉提示訊息的 div
function closeMessageDiv() {
  var messageDiv = document.getElementById("messageDiv");
  messageDiv.style.display = "none";
}


