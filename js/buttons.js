$(document).ready(function() {


	$('#start').click('click touchstart', function() {
		$(this).animate({top: '-100px'}, 500);
		//$(this).animate({opacity: '0'}, 2000);

		$("#start").click(function(){
        $("#buttons").show(1000);
    });
		
	});

	$('#btn1').click(function(){
		$(this).fadeOut( "slow", function() {
	    // Animation complete. Can insert callback here.
		  });
	});

	$('#btn2').click(function(){
		$(this).animate({width: '800px'}, 1500);
	});

	$('#btn3').click(function(){
		$(this).addClass('animated shake');
	});

	$('#btn4').click(function(){
		$(this).addClass('animated rubberBand');
	});

	$('#btn5').click(function(){
		$(this).css('background-color', 'pink').slideUp(2000).slideDown(2000);
	});

/*Set rainbow function*/
	(function( $ ) {
 
  $.fn.rainbowize = function() {
    return this.each(function() {
      var rainbowtext = '';
      var hue=0;
      var step=0;
 
      // get the current text inside element
      var text = $(this).text();
 
      // hue is 360 degrees
      if (text.length > 0)
        step = 360 / (text.length);
 
      // iterate the whole 360 degrees
      for (var i = 0; i < text.length; i++)
      {
        rainbowtext = rainbowtext + '<span style="color:' + color_from_hue(hue) + '">' + text.charAt(i) + '</span>';
        hue += step;
      }
 
      $(this).html(rainbowtext);
    });
  };
})( jQuery );
/*end rainbow function*/

	$('#btn6').click(function(){
		$(this).addClass('rainbowize');
	});


	$('#btn7').click(function(){
		$(this).css({"background-color": "red", "color": "yellow"});
	});

	$('#btn8').click(function(){
		$(this).animate({height: '0px'});

	});

	$('#btn9').click(function(){
		$(this).hide();

		$('#pentagon').show(1000);
	});

	$('#btn10').click(function(){
		$('#box10').show();

		jQuery(function($) {
	    $('#box10').mouseover(function() {
	        var dWidth = $(document).width() - 100, // 100 = image width
	            dHeight = $(document).height() - 100, // 100 = image height
	            nextX = Math.floor(Math.random() * dWidth),
	            nextY = Math.floor(Math.random() * dHeight);
	        $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
	    });

    });
});

	$('#btn11').click(function(){
		$(this).css({"borderWidth": "20px", "borderStyle": "solid", "borderColor": "black"});
	});

	$('#btn12').click(function(){
		$(this).css({"borderWidth": "10px", "borderStyle": "dashed", "borderColor": "red"});
	});

	$('#btn13').click(function(){
		$(this).addClass('animated bounceOutRight');
	});

	$('#btn14').click(function(){
		$(this).css({"fontFamily": "Helvetica"});
	});

	$('#btn15').click(function(){

	});

	$('#btn16').click(function(){
		$(this).animate({height: '+=10%', width: '+=10%'});
	});

	$('#btn17').click(function(){
		$('#video').show();
	});

	$('#btn18').click(function (ev) {        
        $("body").append(            
            $('<div></div>').css({
                position: 'absolute',
                top: ev.pageY + 'px',
                left: ev.pageX + 'px',
                width: '10px',
                height: '10px',
                background: '#000000'
            })              
        );               
    });

	$('#btn19').click(function(){
		  $("#btn19").sparkleh({
		    color: "rainbow",
		    count: 150,
		    overlap: 5,
		    speed: .5
		  });
	});

/*begin sparkle effect*/
	$.fn.sparkleh = function( options ) {
    
  return this.each( function(k,v) {
    
    var $this = $(v).css("position","relative");
    
    var settings = $.extend({
      width: $this.outerWidth(),
      height: $this.outerHeight(),
      color: "#FFFFFF",
      count: 30,
      overlap: 0,
      speed: 1
    }, options );
    
    var sparkle = new Sparkle( $this, settings );
    
    $this.on({
      "mouseover focus" : function(e) {
        sparkle.over();
      },
      "mouseout blur" : function(e) {
        sparkle.out();
      }
    });
    
  });
  
}




function Sparkle( $parent, options ) {
  this.options = options;
  this.init( $parent );
}

Sparkle.prototype = {
  
  "init" : function( $parent ) {
    
    var _this = this;
    
    this.$canvas = 
      $("<canvas>")
        .addClass("sparkle-canvas")
        .css({
          position: "absolute",
          top: "-"+_this.options.overlap+"px",
          left: "-"+_this.options.overlap+"px",
          "pointer-events": "none"
        })
        .appendTo($parent);
    
    this.canvas = this.$canvas[0];
    this.context = this.canvas.getContext("2d");
    
    this.sprite = new Image();
    this.sprites = [0,6,13,20];
    this.sprite.src = this.datauri;
    
    this.canvas.width = this.options.width + ( this.options.overlap * 2);
    this.canvas.height = this.options.height + ( this.options.overlap * 2);
    
    
    this.particles = this.createSparkles( this.canvas.width , this.canvas.height );
    
    this.anim = null;
    this.fade = false;
    
  },
  
  "createSparkles" : function( w , h ) {
    
    var holder = [];
    
    for( var i = 0; i < this.options.count; i++ ) {
      
      var color = this.options.color;
      
      if( this.options.color == "rainbow" ) {
        color = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
      } else if( $.type(this.options.color) === "array" ) {
        color = this.options.color[ Math.floor(Math.random()*this.options.color.length) ];
      }

      holder[i] = {
        position: {
          x: Math.floor(Math.random()*w),
          y: Math.floor(Math.random()*h)
        },
        style: this.sprites[ Math.floor(Math.random()*4) ],
        delta: {
          x: Math.floor(Math.random() * 1000) - 500,
          y: Math.floor(Math.random() * 1000) - 500
        },
        size: parseFloat((Math.random()*2).toFixed(2)),
        color: color
      };
            
    }
    
    return holder;
    
  },
  
  "draw" : function( time, fade ) {
        
    var ctx = this.context;
    
    ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height );
          
    for( var i = 0; i < this.options.count; i++ ) {

      var derpicle = this.particles[i];
      var modulus = Math.floor(Math.random()*7);
      
      if( Math.floor(time) % modulus === 0 ) {
        derpicle.style = this.sprites[ Math.floor(Math.random()*4) ];
      }
      
      ctx.save();
      ctx.globalAlpha = derpicle.opacity;
      ctx.drawImage(this.sprite, derpicle.style, 0, 7, 7, derpicle.position.x, derpicle.position.y, 7, 7);
      
      if( this.options.color ) {  
        
        ctx.globalCompositeOperation = "source-atop";
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = derpicle.color;
        ctx.fillRect(derpicle.position.x, derpicle.position.y, 7, 7);
        
      }
      
      ctx.restore();

    }
    
        
  },
  
  "update" : function() {
    
     var _this = this;
    
     this.anim = window.requestAnimationFrame( function(time) {

       for( var i = 0; i < _this.options.count; i++ ) {

         var u = _this.particles[i];
         
         var randX = ( Math.random() > Math.random()*2 );
         var randY = ( Math.random() > Math.random()*3 );
         
         if( randX ) {
           u.position.x += ((u.delta.x * _this.options.speed) / 1500); 
         }        
         
         if( !randY ) {
           u.position.y -= ((u.delta.y * _this.options.speed) / 800);
         }

         if( u.position.x > _this.canvas.width ) {
           u.position.x = -7;
         } else if ( u.position.x < -7 ) {
           u.position.x = _this.canvas.width; 
         }

         if( u.position.y > _this.canvas.height ) {
           u.position.y = -7;
           u.position.x = Math.floor(Math.random()*_this.canvas.width);
         } else if ( u.position.y < -7 ) {
           u.position.y = _this.canvas.height; 
           u.position.x = Math.floor(Math.random()*_this.canvas.width);
         }
         
         if( _this.fade ) {
           u.opacity -= 0.02;
         } else {
           u.opacity -= 0.005;
         }
         
         if( u.opacity <= 0 ) {
           u.opacity = ( _this.fade ) ? 0 : 1;
         }
         
       }
       
       _this.draw( time );
       
       if( _this.fade ) {
         _this.fadeCount -= 1;
         if( _this.fadeCount < 0 ) {
           window.cancelAnimationFrame( _this.anim );
         } else {
           _this.update(); 
         }
       } else {
         _this.update();
       }
       
     });

  },
  
  "cancel" : function() {
    
    this.fadeCount = 100;

  },
  
  "over" : function() {
    
    window.cancelAnimationFrame( this.anim );
    
    for( var i = 0; i < this.options.count; i++ ) {
      this.particles[i].opacity = Math.random();
    }
    
    this.fade = false;
    this.update();

  },
  
  "out" : function() {
    
    this.fade = true;
    this.cancel();
    
  },
  
  
  
  "datauri" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAHCAYAAAD5wDa1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNDNFMzM5REEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNDNFMzM5RUEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM0M0UzMzlCQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM0M0UzMzlDQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jzOsUQAAANhJREFUeNqsks0KhCAUhW/Sz6pFSc1AD9HL+OBFbdsVOKWLajH9EE7GFBEjOMxcUNHD8dxPBCEE/DKyLGMqraoqcd4j0ChpUmlBEGCFRBzH2dbj5JycJAn90CEpy1J2SK4apVSM4yiKonhePYwxMU2TaJrm8BpykpWmKQ3D8FbX9SOO4/tOhDEG0zRhGAZo2xaiKDLyPGeSyPM8sCxr868+WC/mvu9j13XBtm1ACME8z7AsC/R9r0fGOf+arOu6jUwS7l6tT/B+xo+aDFRo5BykHfav3/gSYAAtIdQ1IT0puAAAAABJRU5ErkJggg=="

}; 
// mit license. paul irish. 2010.
// webkit fix from Oren Solomianik. thx!

/*end Sparkle effect*/

	$('#btn20').click(function(){
		var audio = new Audio('sadtrombone.mp3');
		audio.play();
	});

	$('#btn21').click(function(){
		$('#btn21b').hover(
            function(){
                $('#btn21').css('visibility', 'hidden');
                },
            function(){
                $('#btn21').css('visibility', 'visible');
                });
	});



	$("#btn22").click(function () {
		$(this).css({
			transition: 'background-color 4s ease-in-out', "background-color": "black"
		});
	});

	$('#btn23').click(function(){
		$(this).css({
      transition: 'background-color .2s ease-in-out', "background-color": "#FFFF7D"
    });

	});

	$('#btn24').click(function(){
		$(this).hide();
	    $('#cheese').show().style.display = 'block';
	});

	$('#btn25').click(function(){
	    alert("Why you click me?");
	});

	$('#btn26').click(function(){
	    $("body").addClass('rainbowize');
	});

	$('#btn27').click(function(){
	    $("body").removeClass('rainbowize');
	});

	$('#btn28').click(function() {
	    $("#colorbox").css({ '-webkit-filter': "invert(100%)"});
	});

	$('#btn29').click(function(){
		$("#colorbox").addClass('rainbowize');
	    $("#colorbox").css({ '-webkit-filter': "hue-rotate(90deg)"});
	});

	$('#btn30').click(function() {
	    $("#colorbox").css({ 'opacity': ".2"});
	});

	$('#btn31').click(function(){
	    $(this).addClass('animated bounce');
	});

	$('#btn32').click(function(){
	    $("#btn33").css("opacity", "1"), 6000;
	});

	$('#btn33').click(function(){
	    $(this).addClass('animated flash');
	});

	$('#btn34').click(function(){
	    $(this).addClass('animated hinge');
	});

	$('#btn35').click(function(){
	    $(this).addClass('animated zoomOutRight');
	});

	$('#btn36').click(function(){
	    $(this).addClass('animated rotateOutDownLeft');
	});

	$('#btn39').click(function(){
	    $(this).css({ '-webkit-filter': "drop-shadow(10px 10px 20px purple)"});
	});

	$("#btn40").click(function(){
	    $(this).css({ '-webkit-filter': "drop-shadow(-10px -10px 5px yellow)"});
	});

	$("#btn41").click(function(){
	    $("body").removeClass('rainbowize');
	    $(this).css({ '-webkit-filter': "grayscale(100%)"});
	});

	$("#btn42").click(function(){
	    $("#colorbox2").css({ '-webkit-filter': "saturate(40%)"});
	});

	$("#btn43").click(function(){
	    $("#colorbox2").css({ '-webkit-filter': "contrast(200%) brightness(150%)"});
	});

	$("#btn44").click(function(){
	    $("#colorbox2").css({ '-webkit-filter': "sepia(60%)"});
	});
	
	$("#btn45").click(function () {
		$(this).animate({"height": "400px", "width": "200px"},"6000");
	});

	$('#btn46').click(function(){
	    $(this).addClass('hvr-wobble-skew');
	});

	$('#btn47').click(function(){
	    $(this).addClass('hvr-buzz');
	});

	$('#btn48').click(function(){
	    $(this).addClass('hvr-float-shadow');
	});

	$('#btn49').click(function(){
		    $(this).addClass('hvr-ripple-out');
		});

	$('#btn50').click(function(){
	    $(this).addClass('hvr-bubble-float-bottom');
	});

  $('#btn51').click(function(){
      $('#left51').animate({width: '1420px'}, 1600);
      $('#left51').animate({width: '0px'}, 1600);
  });

    $('#btn52').click(function(){
      $('#bottom52').animate({opacity: '1'}, 1200);
      $('#bottom52').animate({height: '755px'}, 800);
      $('#bottom52').animate({height: '20px'}, 3200);
      $('#bottom52').animate({opacity: '.75'}, 100);
  });

  $('#btn53').click(function(){
      $('#left53').animate({width: '710px'}, 2400);
      $('#right53').animate({width: '710px'}, 1200);

      $('#left53').animate({width: '20px'}, 2400);
      $('#right53').animate({width: '20px'}, 1200);

      $('#right53').animate({width: '740px'}, 2000);
      $('#left53').animate({width: '740px'}, 1500);

      $('#right53').animate({width: '20px'}, 2000);
      $('#left53').animate({width: '20px'}, 1500);
  });

    $('#btn54').click(function(){
      $('#left54').animate({width: '710px'}, 1600);
      $('#right54').animate({width: '710px'}, 1500);
  });

  $('#btn55').click(function(){
      $('#left55').animate({width: '1420px'}, 1600);
      $('#right55').animate({width: '1420px'}, 1500);

      $('#left55').animate({width: '20px'}, 1600);
      $('#right55').animate({width: '20px'}, 1500);
  });

    $('#btn56').click(function(){
      $('#left56').animate({width: '1420px'}, 1600);
      $('#right56').animate({width: '1420px'}, 1500);

      $('#left56').animate({opacity: '1'}, 1600);
      $('#left56').animate({opacity: '0'}, 3200);
 
      $('#right56').animate({opacity: '1'}, 1600);
      $('#right56').animate({opacity: '.75'}, 3200);
      $('#left56').animate({opacity: '.75'}, 600);

      $('#right56').animate({width: '20px'}, 1600);
      $('#left56').animate({width: '20px'}, 1000);
  });

  $('#btn57').click(function(){
      $('#left57').animate({width: '1420px'}, 1600);
      $('#right57').animate({width: '1420px'}, 1500);

      $('#left57').animate({width: '20px'}, 1600);
      $('#right57').animate({width: '20px'}, 1500);
  });

//function to return to original picture
function showOriginalPusheen() {
  $('.hidepusheen').hide();
    $('.originalpusheen').show().style.display = 'block';
}
//function to return to original picture done

  $('#btn58').click(function(){

    $('#pusheen58').hide();
      $('#pusheen58b').show().style.display = 'block';

    setTimeout(function() {
      $('.hidepusheen').hide();
      $('.originalpusheen').show().style.display = 'block';
    }, 300);

      // setTimeout(showOriginalPusheen,1000);
  });

$('#btn59').click(function(){

    $('#pusheen59').hide();
      $('#pusheen59b').show().style.display = 'block';
      
    // var clicks = $(this).data('clicks');
    //   if (clicks) {
    //      // odd clicks
    //      $('#pusheen59').hide();
    //     $('#pusheen59b').show().style.display = 'block';
    //   } else {
    //      // even clicks
    //      $('.hidepusheen').hide();
    //      $('.originalpusheen').show();
    //   }
    //   $(this).data("clicks", !clicks);

  });


$('#btn60').click(function(){
    var audio = new Audio('bite.mp3');
    audio.play();

    $('#bird60').css({ 'opacity': "0"});

  });

$('#btn61').click(function(){
    $('#pusheen61').animate({left: "-=300px"});

    var audio = new Audio('bite.mp3');
    audio.play();

    $('#bird61').css({ 'opacity': "0"});

  });


  $('#btn62').click(function(ev){
    var randomSize = Math.round((Math.random() * 100) + 1);    
  
    $("body").append(            
            $('<div></div>').css({
                position: 'absolute',
                top: ev.pageY + 'px',
                left: ev.pageX + 'px',
                width: randomSize + "px",
                height: randomSize + "px",
                "-moz-border-radius" : "50%",
                "-webkit-border-radius" : "50%",
                "border-radius" : "50%",
                background: '#000000'
            })              
        );     
  });           

$('#btn63').click(function(ev){
    var randomSize = Math.round((Math.random() * 100) + 1);    

    var ad = Math.round((Math.random() * 255) + 0);
    var bd = Math.round((Math.random() * 255) + 0);
    var cd = Math.round((Math.random() * 255) + 0);

    $("body").append(     
            $('<div></div>').css({
                position: 'absolute',
                top: ev.pageY + 'px',
                left: ev.pageX + 'px',
                width: randomSize + "px",
                height: randomSize + "px",
                "-moz-border-radius" : "50%",
                "-webkit-border-radius" : "50%",
                "border-radius" : "50%",
                background: "RGB(" + ad + "," + bd + "," + cd + ")"
            })   

        );    
  });   

$('#btn64').click(function(ev){  

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

  }
  var x = randomIntFromInterval(1, 4);
  var myclass;
  switch (x) {
    case 1:
      myclass = "circle";
      break;
    case 2:
      myclass = "square";
      break;
    case 3:
      myclass = "heart";
      break;
    case 4:
      myclass = "diamond-narrow";
      break;
  };

    $("body").append(     
            $('<div></div>')
            .addClass(myclass)
            .css({
                position: "absolute",
                top: ev.pageY + 'px',
                left: ev.pageX + 'px',
                // width: randomSize + "px",
                // height: randomSize + "px",
                //background: "RGB(" + ad + "," + bd + "," + cd + ")"
            })
          
        );    
  });   


// var ea= true;
//    $("#ea").click(function(){
//        if (ea==true) {
     
//            $( "#follow" ).css( "position", "fixed");
//            $( "#ballGame" ).css( "position", "fixed");
//            ea=false;
//        }
       
//    });

//    $('#follow').click(function() {
//            $( "#ballGame" ).css( "position", "absolute");
//            $( "#follow" ).css( "position", "absolute");
           
//            $( "#follow" ).css( "left", "50%");
//            $( "#follow" ).css( "top", "50%");
       
//    });
   
//    $('body').click(function(){
//        if( $("#follow").css('position') == 'fixed') {
//                var xpos = ((event.clientX)/($(document).width())) *100;
//                var ypos = ((event.clientY)/(window.innerHeight)) *100;
//                $( "#follow" ).css( "left", xpos +"%");
//                $( "#follow" ).css( "top", ypos + "%");
           
//        }
//    });

// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//}

$('#yes65').click(function() {
    $( "#drag65" ).draggable({
      appendTo: "div"
    });
});


$('#btn67').click(function(){
    $("#form67").show().style.display('block');
  });

  $('#btn69').click(function(){
      $('#all69').animate({opacity: '.80'}, 200);

      $('#all69').animate({width: '1420px'}, 100);
      $('#all69').animate({height: '1000000px'}, 2400);

      $('#all69').animate({width: '0px'}, 800);
      $('#all69').animate({height: '0px'}, 800);

      $('#all69').animate({opacity: '0'}, 200);
  });

  function openWin() {
    myWindow = window.open("", "", "width=100, height=100");  // Opens a new window
  }

  function resizeWin() {
      myWindow.resizeTo(250, 250);                             // Resizes the new window
      myWindow.focus();                                        // Sets focus to the new window
  }
  function moveWin() {
      myWindow.moveBy(250, 250);                             // Shifts the new window
  }
  function moveWinTo() {
      myWindow.moveTo(750, 500);                             // Shifts the new window
  }

$('#btn70-0').click(function(){
    location.reload();
  });
$('#btn70-1').click(function(){
    openWin();
  });

$('#btn70-2').click(function(){
    resizeWin();
  });

$('#btn70-3').click(function(){
    moveWin();
  });

$('#btn70-4').click(function(){
    moveWinTo();
  });




//btn78-79
$('#btn-french').click(function(){
    $("div:lang(en)").hide();
    $("div:lang(fr)").show();
  });

$('#btn-english').click(function(){
    $("div:lang(fr)").hide();
    $("div:lang(en)").show();
  });
//end button 78-79

  $('#btn80').click(function(){

      $('#red80').animate({opacity: '1'}, 1000);

      $('#orange80').animate({opacity: '1'}, 3000);
            $('#red80').animate({opacity: '0'}, 500);

      $('#yellow80').animate({opacity: '1'}, 6000);
            $('#orange80').animate({opacity: '0'}, 500);

      $('#green80').animate({opacity: '0'}, 3000);
      $('#green80').animate({opacity: '1'}, 6000);
            $('#yellow80').animate({opacity: '0'}, 500);

      $('#blue80').animate({opacity: '0'}, 5000);
      $('#blue80').animate({opacity: '1'}, 6000);
            $('#green80').animate({opacity: '0'}, 500);

      $('#purple80').animate({opacity: '0'}, 6000);
      $('#purple80').animate({opacity: '1'}, 7000);
            $('#blue80').animate({opacity: '0'}, 500);

            $('#purple80').animate({opacity: '0'}, 800);
  });

//button 81
    $('#btn81').click(function(){
      $('#block81').css({ '-webkit-filter': "drop-shadow(50px 50px 100px ghostwhite)"
        });

      $('#red81').animate({opacity: '1'}, 1000);
        setTimeout(function(){
          $('#block81').css({ '-webkit-filter': "drop-shadow(50px 50px 100px red)"
        });
        },600);
      

      $('#orange81').animate({opacity: '1'}, 3000);
            $('#red81').animate({opacity: '0'}, 500);
        setTimeout(function(){
          $('#block81').css({ '-webkit-filter': "drop-shadow(50px 50px 100px orange)"
        });
        },2000);
            

      $('#yellow81').animate({opacity: '1'}, 6000);
            $('#orange81').animate({opacity: '0'}, 500);
        setTimeout(function(){
          $('#block81').css({ '-webkit-filter': "drop-shadow(50px 50px 100px yellow)"
        });
        },4000);

      $('#green81').animate({opacity: '0'}, 3000);
      $('#green81').animate({opacity: '1'}, 6000);
            $('#yellow81').animate({opacity: '0'}, 500);
        setTimeout(function(){
          $('#block81').css({ '-webkit-filter': "drop-shadow(50px 50px 100px green)"
        });
        },6000);

      $('#blue81').animate({opacity: '0'}, 5000);
      $('#blue81').animate({opacity: '1'}, 6000);
            $('#green81').animate({opacity: '0'}, 500);
        setTimeout(function(){
          $('#block81').css({ '-webkit-filter': "drop-shadow(50px 50px 100px blue)"
        });
        },8000);

      $('#purple81').animate({opacity: '0'}, 6000);
      $('#purple81').animate({opacity: '1'}, 7000);
            $('#blue81').animate({opacity: '0'}, 500);
        setTimeout(function(){
          $('#block81').css({ '-webkit-filter': "drop-shadow(50px 50px 100px #4B0082)"
        });
        },10000);

            $('#purple81').animate({opacity: '0'}, 800);
  });

//Button 82

  $('#btn82').click(function(){
      $('#block82').css({ '-webkit-filter': "drop-shadow(50px 50px 100px ghostwhite)"
        });

      $('#red82').animate({opacity: '1'}, 1000);
        setTimeout(function(){
          $('#block82').css({ '-webkit-filter': "drop-shadow(50px 50px 100px red)"
        });
        },600);
      

      $('#orange82').animate({opacity: '1'}, 3000);
            $('#red82').animate({opacity: '0'}, 500);
        setTimeout(function(){
          $('#block82').css({ '-webkit-filter': "drop-shadow(100px 100px 200px orange)"
        });
        },2000);
            

      $('#yellow82').animate({opacity: '1'}, 6000);
            $('#orange82').animate({opacity: '0'}, 500);
        setTimeout(function(){
          $('#block82').css({ '-webkit-filter': "drop-shadow(40px 40px 80px yellow)"
        });
        },4000);

      $('#green82').animate({opacity: '0'}, 3000);
      $('#green82').animate({opacity: '1'}, 6000);
            $('#yellow82').animate({opacity: '0'}, 500);
        setTimeout(function(){
          $('#block82').css({ '-webkit-filter': "drop-shadow(80px 80px 160px green)"
        });
        },6000);

      $('#blue82').animate({opacity: '0'}, 5000);
      $('#blue82').animate({opacity: '1'}, 6000);
            $('#green82').animate({opacity: '0'}, 500);
        setTimeout(function(){
          $('#block82').css({ '-webkit-filter': "drop-shadow(30px 30px 120px blue)"
        });
        },8000);

      $('#purple82').animate({opacity: '0'}, 6000);
      $('#purple82').animate({opacity: '1'}, 7000);
            $('#blue82').animate({opacity: '0'}, 500);
        setTimeout(function(){
          $('#block82').css({ '-webkit-filter': "drop-shadow(60px 60px 180px #4B0082)"
        });
        },10000);

            $('#purple82').animate({opacity: '0'}, 800);
  });

  $('#btn83').click(function(){
      $('#btn83').css({"background-blend-mode": 'multiply'});
      // $('#btn83').css({'background-color': 'red'}, 1500);
  });

$('#btn84').click(function(){
      $('#btn84').css({"background-blend-mode": 'screen'});
      // $('#btn84').css({'background-color': 'red'}, 1500);
  });

  $('#btn85').click(function(){
      $('#btn85').css({"background-blend-mode": 'color-dodge'});
      // $('#btn85').css({'background-color': 'red'}, 1500);
  });

  $('#btn86').click(function(){
      $('#btn86').css({"background-blend-mode": 'color-burn'});
      // $('#btn86').css({'background-color': 'red'}, 1500);
  });

$('#btn87').click(function(){
      $('#btn87').css({"background-blend-mode": 'difference'});
      // $('#btn87').css({'background-color': 'red'}, 1500);
  });

  $('#btn88').click(function(){
      $('#btn88').css({"background-blend-mode": 'lumosity'});
      // $('#btn88').css({'background-color': 'red'}, 1500);
  });

  $('#btn89').click(function(){
      $('#btn89').css({"background-blend-mode": 'saturation'});
      // $('#btn89').css({'background-color': 'red'}, 1500);
  });

//begin paragraph styling
  $('#btn90--2').click(function(){
      $("#btn90").css({'color': "#4682B4"});
  });

  $('#btn90--1').click(function(){
      $("#btn90").css({'text-decoration': "line-through"});
  });

  $('#btn90-0').click(function(){
      $("#btn90").css({'text-decoration': "underline"});
  });

  $('#btn90-1').click(function(){
      $("#btn90").css({'text-decoration': "none"});
      $("#btn90").css({'color': "black"});
  });

  $('#btn90-2').click(function(){
      $("#btn90").css({'text-align': "left"});
  });

  $('#btn90-3').click(function(){
      $("#btn90").css({'text-align': "center"});
  });

  $('#btn90-4').click(function(){
      $("#btn90").css({'text-align': "right"});
  });

  $('#btn90-5').click(function(){
      $("#btn90").css({'letter-spacing': "10px"});
  });

  $('#btn90-6').click(function(){
      $("#btn90").css({'line-height': "1.5em"});
  });

  $('#btn90-7').click(function(){
      $("#btn90").css({'letter-spacing': "0px"});
  });

  $('#btn90-8').click(function(){
      $("#btn90").css({'line-height': "1em"});
  });
//end paragraph styling

  $('#btn99').click(function(){
      document.getElementById("myP").style.cursor = "pointer";
  });


   $('#btn100').click(function(){
      $("#buttons2").css({'display': "none"});
  });


});




