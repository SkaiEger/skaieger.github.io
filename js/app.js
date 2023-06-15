let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#ffffff";
tg.MainButton.color = "#30a13f";

let item = "";

let btn1 = document.getElementById("btn1");


//btn2.addEventListener("click", function(){
 //       tg.MainButton.setText("Перейти к оплате")
//        tg.MainButton.show();
//    });

btn1.addEventListener("click", function(){
        if (tg.MainButton.isVisible){
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.setText("Перейти к оплате");
            item = "1";
            tg.MainButton.show();
        }
    });

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});