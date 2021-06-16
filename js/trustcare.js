
import {User} from './user.js'
/*-------to swithch between links when click*/

/*---------loading Screen------------*/
(function loadingScreen ()
{
    $(document).ready(()=>{
   
        $('body').css('overflow','auto');
        $('.loading').animate({opacity:'0'},2000,()=>{
           $('.loading').css('z-index','-20000000')
        })

    

});
})();

/*------switch between links on NavBar*/

(function activeLinks()
{
    $('.nav-link').click((e)=>
    {
      let cureentLink=e.target;
       
        $('.nav-item').siblings().removeClass("active")
        $(cureentLink).parent().addClass("active");
    
    });
})();


/*----------display logIn carsuol---------------------*/
(function loginInterFace()
{
    $('#logIn').click(()=>{
        $('.bg').css('display','block');
        $('.carsuol-login').animate({right:'0px'}),2000;
    });
    $('.close').click(()=>
    {
        $('.bg').css('display','none');
    $('.carsuol-login').animate({right:'-300px'}),2000;
        });

     $('.eye').click(()=>
        {
    if ($('.eye').parent().prev().attr('type')=='password')
        $('.eye').parent().prev().attr('type','text');
        else
        $('.eye').parent().prev().attr('type','password');
        })

})();
/*---------------Add new User and Check the Input-------------- */

(function registration()
{
    let regestrationBtn=document.getElementById('regestrationBtn');
    regestrationBtn.addEventListener('click',()=>{
       let userName=document.getElementById('newUserName');
       let userEmail=document.getElementById('newUserEmail');
       let userPassword=document.getElementById('newUserPassword');
       let newUser=new User(userName,userPassword,userEmail);
       newUser.Registration();
   });
}());


/*---------------User LogIN------------------------------*/
(function userLogIn()
{
    document.getElementById('loginBtn').addEventListener('click',()=>
    {
        let userName=document.getElementById('userName');
        let userPassword=document.getElementById('userPassword');
        let user= new User(userName,userPassword);
        user.logIn(); 
    });
}());

/*---------------Btn Up------------------------------*/
$('.btn-up').click(function() {
    let homeSec = $('#home').offset().top;
    $('body , html').animate({
        scrollTop: homeSec
    }, 2000)


});
$(window).scroll(function() {
    let x = $(window).scrollTop();
    if (x >= 800) {
        $('.btn-up').fadeIn(1000);
    } else {
        $('.btn-up').fadeOut(1000);
    }
});

