$('document').ready(function() {
	// console.log('foo');
	// $("#firstimg").animate({
	// 	marginTop: '+=100px'
	// }, 300);
	// $("#firstimg").animate({
	// 	marginTop: '+=-50px'
	// }, 80);
	// $("#firstimg").animate({
	// 	marginTop: '+=50px'
	// }, 80);
	$( "#firstimg" ).effect( "bounce", { times: 4 }, "slow" );
	// $.scrollify({
	// 			section : "begin",
	// 		});
	// $( "#firstimg").stop("slow")
	// console.log('foo')
	// $(".progress-bar").loading();
	$(window).scroll(function show(){                          
            if ($(this).scrollTop() > 200) {
                $('#menu').fadeIn(500);
            } else {
                $('#menu').fadeOut(500);
            }
        });
    $(window).scroll(function show(){                          
            if ($(this).scrollTop() > 200) {
                $('#unique').fadeIn(500);
            } else {
                $('#unique').fadeOut(500);
            }
        });

	var $horizontal = $('#thirdimg');
	var $horizontal2 = $('#bio');
	var $horizontal3 = $('#secondimg');
    $(window).scroll(function () {
        var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();

        scrollPercent = (s / (d - c));

        var position = (scrollPercent * ($(document).width() - $horizontal.width()));
        
        $horizontal.css({
            'left': position
        });
        if (s>300 && s<680) {
        	// console.log(s);
        	$horizontal2.css({
            'marginLeft': position-190
        	});
        };
        // else {
        // 	$horizontal2.css({
        //     'marginLeft': position-590
        // }
        // if (s>750) {
        // 	$horizontal2.css({
        //     'marginLeft': position-400
        // 	});
        // };
        // console.log(s);
        
        if (s>300 && s<600) {
        	$horizontal3.css({
            'marginRight': position - 200
        	});
        };
        
    });

    // setTimeout(show, 1000)

    
    // $(window).scroll(function () {
    //     var s = $(this).scrollTop(),
    //         d = $(document).height(),
    //         c = $(this).height();

    //     scrollPercent = (s / (d - c));

    //     var position = (scrollPercent * ($(document).width() - $horizontal2.width()));
        
    //     $horizontal2.css({
    //         'left': position
    //     });
    // });
	
})



// $.scrollify({
// 		section : "section",
// 		sectionName : "begin",
// 		interstitialSection : "",
// 		easing: "easeOutExpo",
// 		scrollSpeed: 1100,
// 		offset : 0,
// 		scrollbars: true,
// 		standardScrollElements: "",
// 		setHeights: true,
// 		overflowScroll: true,
// 		updateHash: true,
// 		touchScroll:true,
// 		before:function() {},
// 		after:function() {},
// 		afterResize:function() {},
// 		afterRender:function() {}
// 	});