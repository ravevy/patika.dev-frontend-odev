//İnput talebi
var name = window.prompt("What's your name?");

//İnput verilmemesi halinde tekrar sorma
if(name == "" || name == "null"){
  name = window.prompt("You didn't tell us your name.")
}
//Tekrar input verilmezse rastgele isim belirleyip name variableına denkleme
if(name == "" || name == "null"){
  name = ["Jane Doe", "Velma Dinkley", "Red John", "John Doe", "Allison Reynolds", "Director Fury", "Hannah Montana", "Sia", "Daft Punk", "Walter White"][Math.floor(Math.random()*this.length)];
  window.alert("Okay, I'm gonna call you " + name + " then.")
}
//Eğer input verilirse inputun ilk harfini büyük yapma
else{
  name = name.charAt(0).toUpperCase() + name.slice(1);
}

//zamanın elde edilmesi ve htmle yerleştirilmesi fonksiyonu
function showTime(){
  var days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
  var months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
  var date = new Date();
  var newDate = date.getHours() + ":" + date.getMinutes("00") + ":" + date.getSeconds() + ", " + date.getDay() + " " + months[date.getMonth()] + " " + days[date.getDay()]
  document.getElementById("tarih").innerHTML = newDate;
}
//zaman fonksiyonunu her 1 saniyede tekrar gerçekleştirerek yeni bir tarih alır ve dolayısıyla o an ki saniyeye ulaşabiliyoruz.
setInterval(showTime, 1000)

//sayfa kurulum fonksiyonu
function pageStart(){
//başlığın yerleştirilmesi
  document.getElementById("başlık").innerHTML = "Merhaba, " + name + "! Hoşgeldin!"

//yerleştirilmeye ihtiyaç duyulmayan html kodlarının başlık ve tarihle beraber gözükmesi için görünür hale getirilmesi
  document.getElementById("root").classList.replace("unvisible", "visible")
}

//sayfa kurulumu saatin yenilenmesi ile uyumlu olması adına timeout
setTimeout(pageStart, 1000)