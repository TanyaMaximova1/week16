//задание 1
let result;
function replaceName() {
    let fio = document.getElementById('fio').value; //строка на входе
    let mass_fio = fio.split(' '); //разделение по пробелам
    console.log(mass_fio); //вывод массива

    let firstWord = mass_fio[0]; //переменная в которую записывается первое слово
    let secondWord = mass_fio[1]; //переменная в которую записывается второе слово
    let thirdWord = mass_fio[2]; //переменная в которую записывается третье слово

    firstWord = firstWord.toLowerCase();
    secondWord = secondWord.toLowerCase();
    thirdWord = thirdWord.toLowerCase();

    // firstWord = firstWord.trim(firstWord);
    // secondWord = secondWord.trim(secondWord);
    // thirdWord = thirdWord.trim(thirdWord);

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
        let img_link = document.getElementById('img_link').value; //ссылка на изображение
        document.getElementById('img').src = img_link;

        document.getElementById('img_link').value;
    }
    image();

    function checkSpam() {
        let comment = document.getElementById('comment').value; //комментарий пользователя
        let cleanComm;
        // let cleanComm = comment.replace("ViAgRA", "***");
        // cleanComm = comment.replace("xxx", "***");

        // let spam1 = "viagra";
        // let spam2 = "xxx";

        // if (result.toLowerCase() == spam1 || result.toLowerCase() == spam2) {
        //     console.log(true);
        // }

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
        // document.getElementById('cleanCcomment');
        // console.log(cleanComm);
    }
    checkSpam();
}

replaceName();



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