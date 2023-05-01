// Khi tài liệu được load, chạy plugin Sakura rơi hoa anh đào
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

// Khi click vào tài liệu, phát âm thanh và log 'AnhUyen'
$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('AnhUyen');
});

// Thiết lập ngày đếm ngược đến ngày cưới
// 3 mốc thời gian cho Đính Hôn, Vu Quy và Thành Hôn
// var countDownDate = new Date("April 29, 2023 09:00:00").getTime();
var countDownDate = new Date("July 19, 2023 07:00:00").getTime();
// var countDownDate = new Date("July 25, 2023 11:00:00").getTime();

// Cập nhật ngày đếm ngược mỗi giây
var x = setInterval(function() {

    // Lấy thời gian hiện tại
    var now = new Date().getTime();
    
    // Tính khoảng cách giữa thời gian hiện tại và ngày cưới
    var distance = countDownDate - now;
    
    // Tính toán số ngày, giờ, phút, giây còn lại
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Hiển thị kết quả
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    
    // Nếu đếm ngược kết thúc, in ra một thông báo
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

// In ra một dòng thông báo "SAVE THE DATE: 25th Jul, 2023!"
// với font chữ và màu sắc được tùy chỉnh
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 25th Jul, 2023!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: AnhUyen', styles1, styles2);

console.log(
    `%cAnhUyen!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)
