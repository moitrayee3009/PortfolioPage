/*-----------------------------------------------------
Skills chart
------------------------------------------------------- */
var chart = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(chart, {
type: 'bar',
data: {
    labels: ["HTML5", "CSS3","Bootstrap","JavaScript", "jQery","NodeJs"],
    datasets: [{
        label: 'Level of skills',
        data: [75, 55, 50, 35,30,20,100],
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(143, 200, 55, 0.2)',
        'rgb(255, 255, 255)'
        ],
        borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(143, 200, 55, 1)'
        ],
        borderWidth: .5,
        hoverBorderWidth: 2,
        hoverBackgroundColor:[
        'rgb(255,99,132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(143, 200, 55)'
        ], 

    }]
},
options: {
    title: {
        display:true,
        text: 'My level of skills.',
        fontSize: 18
    },
    scales: {
        xAxes: [{
            gridLines: {
              display: false,
              drawOnChartArea: false,
              drawTicks: false
            }
        }],
        yAxes: [{
            gridLines: {
                display: false
            },
            ticks: {
                beginAtZero:true,
                    }
                }]
            },
    legend: {
        display: false
        },
    tooltips: {
        enabled: false
    },
    labels: {        
        fontColor: '#000',
        fontSize: 16,
    },
    }
});


/*-----------------------------------------------------
Smooth Scrolling within Sections
------------------------------------------------------- */ 

$(document).ready(function(){
    // var scrollLink = $('a');
    
    $(".side-navbar a").on('click', function(event) {
  
      if (this.hash !== "") {
        
        event.preventDefault();
        $(".side-navbar a").removeClass("selected");
        $(this).addClass("selected");
  
        var hash = this.hash;
    
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 2000, function(){
     
          window.location.hash = hash;
        });
      } 
    });

$(window).scroll(function(event) {
    var scrollbarLocation = $(this).scrollTop();
    var pxShow = 300; // height on which the button will show
    var fadeInTime = 100; // how slow/fast you want the button to show
    var fadeOutTime = 100; // how slow/fast you want the button to hide
    var scrollSpeed = 300; 

    event.preventDefault();

/*-----------------------------------------------------
Back to top
------------------------------------------------------- */

    if (!( $("#header-search").hasClass('is-visible'))) {

        if ($(window).scrollTop() >= pxShow) {
            $("footer .block-title").removeClass("block-title-onTop")
            $("#go-top").removeClass("hidden");
            $("#go-top").fadeIn(fadeInTime);
        } else {
            $("#go-top").fadeOut(fadeOutTime);
            $("footer .block-title").addClass("block-title-onTop")
        }
    }	
/*-----------------------------------------------------
Active link switching
------------------------------------------------------- */ 
    $(".side-navbar a").each(function() {   
        
      var sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(".side-navbar a").removeClass("selected");
        $(this).addClass("selected");
      }
    })
    
});
    
/*-----------------------------------------------------
Smooth Scrolling
------------------------------------------------------- */ 
  	
  	$('.smoothscroll').on('click', function (e) {
	 	
        e.preventDefault();

      var hash = this.hash,
       $hash = $(hash);

       $('html, body').stop().animate({
          'scrollTop': $hash.offset().top
     }, 2000, 'swing', function () {
         window.location.hash = hash;
      });

    });
});
