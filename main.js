console.log("THAT");

$(document).ready(function(){
    
    $('.doors')
        
        .mouseover(function(){
            console.log("in");
            $('.door2').addClass('door_animated')
            $('.door2').removeClass('door_animated_release')
    })
        .mouseout(function(){
        console.log("out");
        $('.door2').addClass('door_animated_release')
        $('.door2').removeClass('door_animated')
        
    })
    
    
//    localStorage.setItem('buttonclick', 'false')
    
    
    
    
    console.log(localStorage.getItem('buttonclick'));
    
    $('.float, .float2')
        
        .click(function(){
            localStorage.setItem('buttonclick', 'static')
        
        
        console.log(localStorage.getItem('buttonclick'));
        
    })
        
    if(localStorage.getItem('buttonclick')== "animate"){
        $('.door1').addClass('door_open')
        $('.door2').addClass('door_open')
    
       
       }else if (localStorage.getItem('buttonclick')== "static"){
           $('.door1').removeClass('door_open')
           $('.door2').removeClass('door_open')
           
       }
           
    
    
    $('.roydon').mouseover(function(){
        
        $('.img-hover').addClass('.visible-img').removeClass('.invisible-img').attr('src', 'alrgkjalegkj.jpg')
    })
    
    $('.nav1').mouseover(function(){
        
        $('.nav1').addClass('.visible-img').removeClass('.invisible-img').attr('src', 'CD.jpg')
        
    })
    
    $('.nav1').mouseleave(function(){
        
        $('.nav1').removeClass('.visible-img').addClass('.invisible-img').attr('src', 'CD.jpg')
    })
    
//    need mouse outs otherwise they will stay up
    
    
    
    
})