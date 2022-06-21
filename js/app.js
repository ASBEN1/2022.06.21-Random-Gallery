// 이미지 변경 함수
const img_url = [
  'images/img01.jpg', // <- js파일의 이미지 주소는 왜 이렇게 써야 하는지 알아야함.
  'images/img02.jpg',
  'images/img03.jpg',
  'images/img04.jpg',
];

const author = [
  'Beric Staron',
  'Yoon-Jong Joo',
  'Leni Asterio',
  'Zack Kellyer',
]

$(function () {

  /*function cgNm() {
    let changeName = 
  }*/

  function changeBg() {
    // 0 ~ 3 랜덤값 생성(이미지 번호) <- 총 4장 (0.???, 1.???, 2.???, 3.??? -> floor)
    let imgNum = Math.floor(Math.random() * 4)
    console.log(imgNum);

    // 이미지 변경
    $('body').css({ // <- css에서 body로 백그라운드 이미지 적용됨
      background: `url('images/filter-box.png'),
      url(${img_url[imgNum]})` /* <- 함수 지정할때 무조건 백틱(Backtick)을 써야 오류 발생x 
                  (혹시나 잊었을시) 백틱을 사용하면 ${}를 사용해서 문자열과 변수를 적절히 같이 사용할 수 있다.*/
    })
  }

  $(function () {

    // 년/월/일
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1; // 1월은 0
    let date = d.getDate();
    console.log(year, month, date);

    // html에 날짜 표시

    $('.year').html(year);
    $('.month').html(month);
    $('.date-w').html(date);

  });

  // setInterval(함수, 시간ms)
  setInterval(changeBg, 2500);

  /*var Target_apm = document.getElementById("apm");*/
  function clock() {
    var this_time = new Date();
    var th = this_time.getHours();
    var tm = this_time.getMinutes();
    var ts = this_time.getSeconds();
    /*var AmPm ="AM";
    if(th > 12){   
        var AmPm ="PM";
        th %= 12;
    }*/
    $('.th').html(th);
    $('.tm').html(tm);
    $('.ts').html(ts);

    /*Target_apm.innerText = `${AmPm}`;*/
  }
  clock();
  setInterval(clock, 1000); // 1초마다 실행
});