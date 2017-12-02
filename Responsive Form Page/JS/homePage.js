/***Author:Aditya Sharma
  emailID:adityakumarsharma1988@gmail.com    
***/
$(function() {

 window.data={
            carousel:[
                    {
                        "image" : "./images/item-1.png",
                        "heading" : "Careers",
                        "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    },
                    {
                        "image" : "./images/item-2.png",
                        "heading" : "Contact Us",
                        "text" : "Morbi tincidunt commodo scelerisque."
                    },
                    {
                        "image" : "./images/item-3.png",
                        "heading" : "About Us",
                        "text" : "Duis porttitor diam vitae leo elementum accumsan."
                    }
            ]
  }
  window.data.length=data.carousel.length;
  var layout   = $("#insert").html();
  var template = Handlebars.compile(layout);
  $(".carousel").html(template(data));
  $(".mobileCarousel").html(template(data));    
    if(data.length>0){
        $(".carousel .carouselItems")[0].className="carouselItems active";
        $(".carousel .carouselButton")[0].className="carouselButton active";
        $(".mobileCarousel .carouselItems")[0].className="carouselItems active";
        $(".mobileCarousel .carouselButton")[0].className="carouselButton active";
    }
    $.each($(".carousel .carouselButton"), function( index, value ) {   /*binding of carousel event*/
            $(this).on("click",function(){
              $(".carousel .carouselItems").removeClass("active");
              $(".carousel .carouselButton").removeClass("active");
              $(this).addClass("active");
              $(".carousel .carouselItems")[index].className="carouselItems active";
      });
    });    
    $.each($(".mobileCarousel .carouselButton"), function( index, value ) { /*binding of Mobilecarousel event*/
            $(this).on("click",function(){
              $(".mobileCarousel .carouselItems").removeClass("active");
              $(".mobileCarousel .carouselButton").removeClass("active");
              $(this).addClass("active");
              $(".mobileCarousel .carouselItems")[index].className="carouselItems active";
      });
    }); 


    /*On Submit*/  
    $("#submit").on("click",function(){
        $("input").removeClass("activeInlineMessage");
        $(".inlineMessage").removeClass("active");
        if(validateForm()){
            $(".message").text("Form Submitted Successfully!!");
            $(".message").addClass("success");
            return false; // just to prevent page refreshing
        }else{
            $(".message").text("! Something Went Wrong");
            $(".message").addClass("error");
            return false;
        }
            
    })

  /*form validation*/  
    function validateForm(){
       var name = $("input[name='name']");
       var password = $("input[name='password']");
       var cPassword = $("input[name='cPassword']");
       var email = $("input[name='email']");
       var url = $("input[name='url']");
       if(name.val()==""){
           
             name.addClass("activeInlineMessage");
             name.next().addClass("active");
             return false;  
           
       } else {  
           
            if (password.val()=="") {
                password.addClass("activeInlineMessage");
                password.next().addClass("active");
                return false;              
            } else {
           
                 if (password.val()!=cPassword.val()) {
                     cPassword.addClass("activeInlineMessage");
                     cPassword.next().addClass("active");
                     return false;
                   } else {
                       var tempLength=email.val().split("@").length;
                       if (email.val().split("@")[tempLength-1]!="kpmg.com") {
                            email.addClass("activeInlineMessage");
                            email.next().addClass("active");
                           return false;       
                       } 
                    $("input").removeClass("activeInlineMessage");
                    $(".inlineMessage").removeClass("active");
                    return true;   
                   }           
            }       
      }
   }
    
})