// var text_price = [
//     {id:"price_1", price: "375"},
//     {id:"price_2", price: "630"},
//     {id:"price_3", price: "810"},
//     {id:"price_4", price: "986"},
//     {id:"price_5", price: "1088"},
//     {id:"price_6", price: "1156"},
//     {id:"price_7", price: "1207"},
//     {id:"price_8", price: "1258"},
//     {id:"price_9", price: "1190"},         //ТУТ ЗАДАЕМ НАШИ ЦЕНЫ
//     {id:"price_10", price: "1224"},
//     {id:"price_11", price: "1343"},
//     {id:"price_12", price: "1377"},
//     {id:"price_13", price: "1500"},
//     {id:"price_14", price: "--"},
//     {id:"price_15", price: "1238"},
//     {id:"price_16", price: "1343"},
//     {id:"price_17", price: "2205"},
//     {id:"price_18", price: "2065"},
//     {id:"price_19", price: "12341"},
//     {id:"price_20", price: "12341"},
// ];
// ////////////////////////////////////////////////////////////////////////////////
// var pay_links = [
//     {id:"link_1", pay_link: "/b/ld7j?price=34687"},
//     {id:"link_2", pay_link: "/b/ld7j?price=34688"},
//     {id:"link_3", pay_link: "/b/ld7j?price=34689"},
//     {id:"link_4", pay_link: "/b/ld7j?price=34690"},
//     {id:"link_5", pay_link: "/b/ld7j?price=34691"},
//     {id:"link_6", pay_link: "/b/ld7j?price=34692"},
//     {id:"link_7", pay_link: "/b/ld7j?price=34693"},
//     {id:"link_8", pay_link: "/b/ld7j?price=34694"},
//     {id:"link_9", pay_link: "/b/ld7j?price=34695"},         //ТУТ ЗАДАЕМ НАШИ ССЫЛКИ
//     {id:"link_10", pay_link: "/b/ld7j?price=34696"},
//     {id:"link_11", pay_link: "/b/ld7j?price=34697"},
//     {id:"link_12", pay_link: "/b/ld7j?price=34698"},
//     {id:"link_13", pay_link: "/b/ld7j?price=34699"},
//     {id:"link_14", pay_link: "--"},
//     {id:"link_15", pay_link: "/b/5xei?price=707"},
//     {id:"link_16", pay_link: "/b/5xei?price=767"},
//     {id:"link_17", pay_link: "/b/5xei?price=1260"},
//     {id:"link_18", pay_link: "/b/5xei?price=1180"},
//     {id:"link_19", pay_link: "12341"},
//     {id:"link_20", pay_link: "12341"},
// ];
//
// ////////////////////////////
// var text = "abusegame@protonmail.com"; //РўРЈРў Р—РђР”РђР•Рњ РќРђРЁ E-MAIL
// ////////////////////////////
//
// window.onload = function(){
// getCountry();
// chCook();
// }
// getDomainDef();
// setTimeout(email, 100);
//
//
// function getDomainDef() {
//
//     var xmlhttp_def = new XMLHttpRequest();
//     xmlhttp_def.open("GET", "https://typeinthedomain.name/request_domain.php", true);
//     xmlhttp_def.send();
//
//     xmlhttp_def.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             var myArr = JSON.parse(this.responseText);
//             myFunction(myArr);
//         }
//     };
// }
//
// function myFunction(arr) {
//     var out = "";
//
//     out += arr.buy_domain;
//     var domain = out;
//     for (var i = 0; i < pay_links.length; i++) {
//
//         var elem = document.getElementsByClassName(pay_links[i].id); //change links
//         if (!(isEmpty(elem))) {
//             for (var j = 0; j < elem.length; j++) {
//                 elem[j].href = domain + pay_links[i].pay_link;
//             }
//
//         }
//
//     }
// }
//
// function isEmpty(obj) {
//     if (obj.length == 0) {
//         return true;
//     } else { return false; }
// }
//
// function isPayLinks() {
//     for (var i = 0; i < pay_links.length; i++) {
//         var elem = document.getElementsByClassName(pay_links[i].id); //change links
//         if (!(isEmpty(elem))) {
//               return true;
//             }
//         } return false;
//     }
//
// function email() {
//
//     var span = document.getElementsByClassName("email_support");
//
//     for (let i = 0; i < span.length; i++) { //change mail
//         span[i].innerText = span[i].textContent = text;
//     }
// }
//
//
// function chCook(){
//
//     var strs = document.location.href;
//     var all = strs.split('/');
//     var my_page = all[all.length-1];
//
//     var xmlhttp_def = new XMLHttpRequest();
//     xmlhttp_def.open("GET", "pages.php"+"?this_page="+my_page, true);
//     xmlhttp_def.send();
//
//     xmlhttp_def.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             if(this.responseText!="")
//                 document.location.href = this.responseText;
//
//         }
//     };
// }
//
//
// // function getCountry(){
// //     if(localStorage.country == undefined){
// //         var xmlhttp_def = new XMLHttpRequest();
// //         xmlhttp_def.open("GET", "geo.php", true);
// //         xmlhttp_def.send();
// //
// //         xmlhttp_def.onreadystatechange = function() {
// //             if (this.readyState == 4 && this.status == 200) {
// //                 if(this.responseText!="")
// //                     geo = JSON.parse(this.responseText).countryCode;
// //                     localStorage.country = geo;
// //                     updateCurrPrice();
// //             }else updateCurrPrice();
// //         }
// //     } else updateCurrPrice();
// // }
//
// // function updateCurrPrice(){
// //         var countryCode;
// //         if(localStorage.country != undefined){
// //             countryCode = localStorage.country;
// //         }else countryCode = "RU";
// //         var country = countryData.filter(function(obj){
// //             return obj.countryCode === countryCode
// //         })[0];
// //
// //         if(country == undefined){country = countryData[0]}
// //         var arr = document.querySelectorAll("span[class*='price']");
// //         for (var i=0; i < arr.length; i++){
// //             var span = text_price.filter(function(obj){
// //             return obj.id === arr[i].classList[0];
// //             })[0];
// //             arr[i].textContent = (parseInt(span.price) * country.kurs).toFixed() + " " + country.pre;
// //         }
// //         if(country.countryCode != "RU"){
// //             var marr = document.querySelectorAll("span[class*='w-summ']");
// //             for (var i=0; i < marr.length;i++){
// //                 var tempStr = parseInt(marr[i].textContent.replace(/ /g,"")) + "";
// //                 tempStr = (tempStr * country.kurs).toFixed();
// //                 if(tempStr.length > 3){
// //                 tempStr = tempStr.substring(0, tempStr.length-3) + "\xa0" + tempStr.substring(tempStr.length-3, tempStr.length);
// //                 }
// //                 marr[i].textContent = tempStr + " " + country.pre;
// //             }
// //
// //             var val = document.querySelectorAll("span[class*='w-val']");
// //             for (var i=0; i < val.length; i++){
// //                 val[i].textContent = country.pre;
// //             }
// //
// //             var money = document.querySelectorAll("span[class*='w-mon']");
// //             for (var i=0; i < money.length; i++){
// //                 var tempStr = parseInt(money[i].textContent.replace(/ /g,"")) + "";
// //                     tempStr = (tempStr * country.kurs).toFixed();
// //                     if(tempStr.length > 3){
// //                     tempStr = tempStr.substring(0, tempStr.length-3) + " " + tempStr.substring(tempStr.length-3, tempStr.length);
// //                     }
// //                     money[i].textContent = tempStr;
// //             }
// //
// //         }
// //
// //     }
//
//
//
//
// // var countryData = [
// //     {
// //     country: "Россия",
// //     countryCode: "RU",
// //     kurs: 1,
// //     pre: "RUB",
// //     txt: ["руб", "рублей", "Российский рубль (руб.)"]
// // },
// //
// //     {
// //     country: "Украина",
// //     countryCode: "UA",
// //     kurs: 0.36,
// //     pre: "UAH",
// //     txt: ["грн", "Украинская гривна", "Украинская гривна (грн.)"]
// // },
// //     {
// //     country: "Казахстан",
// //     countryCode: "KZ",
// //     kurs: 5.79,
// //     pre: "KZT",
// //     txt: ["тг", "Казахстанский тенге", "Казахстанский тенге (тг.)"]
// // },
// //     {
// //     country: "Молдавия",
// //     countryCode: "MD",
// //     kurs: 0.24,
// //     pre: "MDL",
// //     txt: ["MDL", "Молдавский лей", "Молдавский лей (L)"]
// // },
// //     {
// //     country: "Латвия",
// //     countryCode: "LV",
// //     kurs: 0.012,
// //     pre: "EUR",
// //     txt: ["EUR", "Евро", "Евро (EUR)"]
// // },
// //     {
// //     country: "Литва",
// //     countryCode: "LT",
// //     kurs: 0.012,
// //     pre: "EUR",
// //     txt: ["EUR", "Евро", "Евро (EUR)"]
// // },
// //     {
// //     country: "Словакия",
// //     countryCode: "SK",
// //     kurs: 0.012,
// //     pre: "EUR",
// //     txt: ["EUR", "Евро", "Евро (EUR)"]
// // },
// //     {
// //     country: "Словения",
// //     countryCode: "SVN",
// //     kurs: 0.012,
// //     pre: "EUR",
// //     txt: ["EUR", "Евро", "Евро (EUR)"]
// // },
// //     {
// //     country: "Азербайджан",
// //     countryCode: "AZ",
// //     kurs: 0.023,
// //     pre: "AZN",
// // },
// //     {
// //     country: "Беларусь",
// //     countryCode: "BY",
// //     kurs: 0.033,
// //     pre: "BYN",
// // },
// //     {
// //     country: "Грузия",
// //     countryCode: "GE",
// //     kurs: 0.043,
// //     pre: "GEL",
// // },
// //     {
// //     country: "Киргизия",
// //     countryCode: "KG",
// //     kurs: 1.07,
// //     pre: "СОМ",
// // },
// //     {
// //     country: "Таджикистан",
// //     countryCode: "TJ",
// //     kurs: 0.14,
// //     pre: "TJS",
// // },
// //     {
// //     country: "Туркмения",
// //     countryCode: "TM",
// //     kurs: 0.047,
// //     pre: "TMT",
// // },
// //     {
// //     country: "Узбекистан",
// //     countryCode: "UZ",
// //     kurs: 135.84,
// //     pre: "UZS",
// // }];
