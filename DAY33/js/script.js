const searchBox = document.querySelector(".search-box");
const button = searchBox.querySelector(".btn");
const action = searchBox.querySelector(".action");
const result = document.createElement("div");

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "vi-VN"; // Sử dụng tiếng Việt
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// Bắt đầu nhận diện khi màn hình được nhấp vào
button.addEventListener("click", () => {
  result.remove();
  action.classList.remove("success");
  recognition.start();
  action.innerText = "Hãy nói nội dung bạn muốn!";
  //   console.log("Sẵn sàng nhận lệnh bằng giọng nói");
});
// Xử lý sự kiện kết quả
recognition.onresult = (event) => {
  // Lấy chuỗi văn bản đã nhận diện được
  const text = event.results[0][0].transcript;
  // Xử lý chuỗi văn bản để biết được người dùng vừa đọc gì
  if (text) {
    const newText = text.toLowerCase();
    getA = () => {
      return new Promise((resolve, reject) => {
        resolve(handleVoice(newText));
      });
    };
    getB = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(handleAction(newText));
        }, 1000);
      });
    };
  }
  getA()
    .then(() => {
      return getB();
    })
    .then();
};

const handleVoice = (text) => {
  result.classList.add("result");
  result.innerText = `Đang thực hiện:${text}`;
  searchBox.append(result);
};

const handleAction = (text) => {
  switch (text) {
    case `google`:
      confirm("Bạn muốn mở google");
      window.open("https://google.com", "_blank");
      result.innerText = "Đã thực hiện xong";
      break;
    case `youtube`:
      confirm("Bạn muốn mở youtube");
      window.open("https://youtube.com", "_blank");
      result.innerText = "Đã thực hiện xong";
      break;
    case `google map`:
      confirm("Bạn muốn mở google map");
      window.open("https://map.google.com", "_blank");
      result.innerText = "Đã thực hiện xong";
      break;
    case `facebook`:
      confirm("Bạn muốn mở facebook");
      window.open("https://facebook.com", "_blank");
      result.innerText = "Đã thực hiện xong";
      break;
    case `chỉ đường tới vinhomes smart city tây mỗ`:
      confirm("Bạn muốn chỉ đường tới vinhomes smart city tây mỗ");
      window.open(
        "https://www.google.com/maps/d/viewer?mid=18pnjUfXUkBkQKnjjQWpmcmOXfok&hl=en_US&ll=20.9959605%2C105.81076380000002&z=17",
        "_blank"
      );
      result.innerText = "Đã thực hiện xong";
      break;
    default:
      result.innerText = "Không thực hiện được yêu cầu";
  }
};
// Dừng nhận diện khi giọng nói kết thúc
recognition.onspeechend = () => {
  action.innerText = "Đã nói xong. Hy vọng kết quả như ý bạn";
  action.classList.add("success");
  recognition.stop();
  //   console.log("xử lý xong");
};
