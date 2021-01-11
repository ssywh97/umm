const body = document.querySelector("body");

const IMG_NUMBER = 4; // 이미지 갯수를 변수로 지정

function handleImgLoad(){
    console.log("finished loading");
}

function paintImage(imgNumber){  //이미지넘버에 해당하는 이미지를 띄우는 함수
    const image = new Image();  //이미지
    image.src = `/images/${imgNumber + 1}.jpg`; //이미지 주소
    image.classList.add("bgImage");
    body.prepend(image);  //body에 이미지를 추가시킴
    //image.addEventListener("loadend", handleImgLoad);
}

function getRandom(){  //이미지를 랜덤으로 띄우기 위한 랜덤값을 생성하는 함수
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();