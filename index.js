document.addEventListener("DOMContentLoaded", function() {
  const textToType = document.querySelector(".sub_content1").innerText;
  const typingSpeed = 50; 

  function typeText() {
    let i = 0;
    const typingInterval = setInterval(() => {
      document.querySelector(".sub_content1").textContent = textToType.slice(0, i);
      i++;
      if (i > textToType.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
  }

  // Call the function when the DOM content is loaded
  typeText();
});
