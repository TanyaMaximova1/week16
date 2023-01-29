//задание 1
let result;
let img_link;
function replaceName() {
    // document.getElementById('yourName').style.visibility = "hidden";

    let fio;

    if (fio == undefined) {
        console.log("Noooooo");
        document.getElementById('yourName').value = "username";
        document.getElementById('yourName').style.visibility = "visible";
    } else {

    }

    fio = document.getElementById('fio').value; //строка на входе

    let mass_fio = fio.split(' '); //разделение по пробелам
    console.log(mass_fio); //вывод массива

    let firstWord = mass_fio[0]; //переменная в которую записывается первое слово
    let secondWord = mass_fio[1]; //переменная в которую записывается второе слово
    let thirdWord = mass_fio[2]; //переменная в которую записывается третье слово

    firstWord = firstWord.toLowerCase();
    secondWord = secondWord.toLowerCase();
    thirdWord = thirdWord.toLowerCase();

    let firstWordfirstLetter = firstWord[0].toUpperCase();
    firstWord = firstWord.replace(firstWord[0], firstWordfirstLetter);
    console.log(firstWord);

    let secondWordfirstLetter = secondWord[0].toUpperCase();
    secondWord = secondWord.replace(secondWord[0], secondWordfirstLetter);
    console.log(secondWord);

    let thirdWordfirstLetter = thirdWord[0].toUpperCase();
    thirdWord = thirdWord.replace(thirdWord[0], thirdWordfirstLetter);
    console.log(thirdWord);

    result = `${firstWord} ${secondWord} ${thirdWord}`;
    document.getElementById('fio').value = result;

    document.getElementById('yourName').value = result;
    document.getElementById('yourName').readOnly = true;

    function image() {
        img_link = document.getElementById('img_link').value; //ссылка на изображение
        document.getElementById('img').src = img_link;
        document.getElementById('img_link').value;

        if (img_link == '') {
            var a = Math.round(Math.random() * 6) //цикл с рандомными аватарками
            image = [];
            image[0] = "image/1.png"
            image[1] = "image/2.png"
            image[2] = "image/3.png"
            image[3] = "image/4.png"
            image[4] = "image/5.png"
            image[5] = "image/6.png"
            let nowImage = image[a];

            document.getElementById('img').src = nowImage;
        }
    }
    image();

    function checkSpam() {
        let comment = document.getElementById('comment').value; //комментарий пользователя
        let cleanComm;

        comment = comment.toLowerCase();

        if (comment.includes('viagra')) {
            cleanComm = comment.replace("viagra", "***");
            document.getElementById('cleanCcomment').value = cleanComm;
        }
        else if (comment.includes('xxx')) {
            cleanComm = comment.replace("xxx", "***");
            document.getElementById('cleanCcomment').value = cleanComm;
        }
        else {
            document.getElementById('cleanCcomment').value = comment;
        }

        let date = new Date();
        let time = date.getHours();
        let minute = date.getMinutes();
        let sec = date.getSeconds();
        document.getElementById('date_comment').innerHTML = `${time}` + ":" + `${minute}` + ":" + `${sec}`;

    }
    checkSpam();
}
replaceName();




// function checkName() {
//     if (document.getElementById('no').value = true) {
//     }
// }
// }

// function randomAvatar() {
//     if (img_link == ' ') {
//         // let pics = ['https://i.pinimg.com/originals/fc/b2/ff/fcb2ffd51991274e1e39d765aa60c1a9.png', 'https://www.clipartmax.com/png/full/257-2574168_rainbow-dash-rainbow-dash-starring-by-illumnious-on-rainbow-dash.png'];

//         // function showImage() {
//         //     var a = Math.floor(Math.random() * pics.length);
//         //     var image = pics[a];
//         //     document.getElementById('img').src = image;
//         // }
//         // showImage();

//         var a = Math.round(Math.random() * 6)
//         image = [];
//         image[0] = "image/1.png"
//         image[1] = "image/2.png"
//         image[2] = "image/3.png"
//         image[3] = "image/4.png"
//         image[4] = "image/4.png"
//         image[5] = "image/4.png"
//         // document.getElementById('img').src = image[a];
//         document.write("<img src=" + image[a] + ">");
//     }
// }
// randomAvatar();

function clean() {
    fio = document.getElementById('fio').value = ""; //отчистить поле ввода
    img_link = document.getElementById('img_link').value = ""; //отчистить поле ввода
    comment = document.getElementById('comment').value = ""; //отчистить поле ввода
}
clean();




//задание под ***
function deleteTags() {
    let str31 = "<br>Добрый<col><embed>день,<hr>уважаемые<img>гости!";
    // let strrr = "Добрый дань!";
    // let cleanStr;
    // if (str31.include('<br>') || str31.include('<col>') || str31.include('<embed>') || str31.include('<hr>') || str31.include('<img>')) {
    //     cleanStr = str31.replace("<br>", " ");
    // }
    mas = ["<br>", "<col>", "<embed>", "<hr>", "<img>"];

    // for (var i = 0; i < length; i++) {
    //     element = arr[i];
    //     str31 = str31.replace(element, ' ');

    //     // Do something with element
    // }
    // strrr = strrr.replace('дань', 'день');
    str31 = str31.replace("<br>", ' ');

    console.log(str31);
}

deleteTags();
// console.log(deleteTags(str));