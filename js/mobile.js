/*반응형 모바일 움직임 높이 495*/

$(function(){

	function mobile01(){

		$('.mobile_slide01').stop().animate({marginTop:-495},function(){

			$(".mobile_slide01 li:first").appendTo(".mobile_slide01");

			$(".mobile_slide01").css({marginTop:0});
		});


	}
	setInterval(mobile01,3000);



	function mobile02(){

		$('.mobile_slide02').stop().animate({marginTop:-495},function(){

			$(".mobile_slide02 li:first").appendTo(".mobile_slide02");

			$(".mobile_slide02").css({marginTop:0});
		});


	}
	setInterval(mobile02,3000);




});