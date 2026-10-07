// Nhập thông tin email

// Đặt các biến const
const submitBtn = document.querySelector("#submit-btn");
const emailInput = document.querySelector("#email");
const emailForm = document.querySelector("#email-form");
const error = document.querySelector("#error");
const infoContent = document.querySelector("#info-content");

// Khi nhấn nút Submit
submitBtn.addEventListener("click", function () {
  const emailValue = emailInput.value;

  let hasAt = false;
  let hasDot = false;

  // Kiểm tra xem đã có kí tự @ và . hay chưa
  for (let i = 0; i < emailValue.length; i++) {
    if (emailValue[i] === "@") {
      hasAt = true;
    }

    if (emailValue[i] === ".") {
      hasDot = true;
    }
  }

  // Ẩn phần nhập email và hiện thông tin cá nhân
  if (hasAt && hasDot) {
    infoContent.style.display = "block";
    emailForm.style.display = "none";
    error.textContent = "";
  } else {
    error.textContent = "Email không hợp lệ!";
  }
});

// Ẩn hiện thông tin nghề nghiệp
const jobs = document.querySelectorAll(".job-info");

jobs.forEach(function (jobs) {
  const content = jobs.querySelector(".view-content");

  // Ẩn nội dung các mục
  content.style.display = "none";

  // Tạo nút bấm
  const button = document.createElement("button");
  button.textContent = "View More!";
  button.style.display = "none";
  button.className = "btn btn-warning btn-sm mt-3";
  jobs.appendChild(button);

  // Hiện nút khi rê chuột
  jobs.addEventListener("mouseenter", function () {
    button.style.display = "block";
  });

  // Ẩn nút khi rời chuột
  jobs.addEventListener("mouseleave", function () {
    if (content.style.display === "none") {
      button.style.display = "none";
    }
  });

  // Hiển thị View More và View Less
  button.addEventListener("click", function () {
    if (content.style.display === "none") {
      content.style.display = "";

      button.textContent = "View Less!";
    } else {
      content.style.display = "none";

      button.textContent = "View More!";
    }
  });
});
