$(document).ready(function(){
	$("nav a,a[href='#top'],a[rel='scroll__']").mPageScroll2id({
		highlightSelector:"nav a"
	});
	$("a[rel='next']").click(function(e){
		e.preventDefault();
		var to=$(this).parent().parent().parent("section").next().attr("id");
		$.mPageScroll2id("scrollTo",to);
	});
	
    var full_height=0;
    var height_head=0;
	var $full_height = $("body").height();
	var $height_head = $(".wrap_logo .head").height();
	var full_h = $full_height - $height_head;
	var full_h = full_h - 100;
	$(".wrap_logo .boxscroll").css('height', full_h+'px');
	
	$("#boxscroll_1").niceScroll({cursorborder:"",cursorcolor:"#333",boxzoom:false,touchbehavior:true});
	$("#boxscroll_2").niceScroll({cursorborder:"",cursorcolor:"#333",boxzoom:false,touchbehavior:true});
	$("#boxscroll_3").niceScroll({cursorborder:"",cursorcolor:"#333",boxzoom:false,touchbehavior:true});
	
	$('#b4, #b5, #sec1 .close, #sec2 .close, #sec3 .close').click(function () {
		$("body").removeClass("hhh");
		$("#block_left nav a").removeClass("act");	
		$("#block_right > section").addClass("open_block").removeClass("close_block");
		$("#block_right > section#sec1, #block_right > section#sec2, #block_right > section#sec3").removeClass("open_block").addClass("close_block");
	});
	
	$('#x1, #b1').click(function () {
		$("body").addClass("hhh");
		$(".wrap_logo").removeClass("open_block");
		$("#block_left nav a").removeClass("act").removeClass("mPS2id-highlight-first");
		
		$("#block_right > section").addClass("close_block");
		$("#block_right > section#sec1").addClass("open_block").removeClass("close_block");
		$("#b1 a").addClass("act");
	});
	$('#x2, #b2').click(function () {
		$("body").addClass("hhh");
		$(".wrap_logo").removeClass("open_block");
		$("#block_left nav a").removeClass("act").removeClass("mPS2id-highlight-first");
		
		$("#block_right > section").addClass("close_block");
		$("#block_right > section#sec2").addClass("open_block").removeClass("close_block");
		$("#b2 a").addClass("act");
	});
	$('#x3, #b3').click(function () {
		$("body").addClass("hhh");
		$(".wrap_logo").removeClass("open_block");
		$("#block_left nav a").removeClass("act").removeClass("mPS2id-highlight-first");
		
		$("#block_right > section").addClass("close_block");
		$("#block_right > section#sec3").addClass("open_block").removeClass("close_block");
		$("#b3 a").addClass("act");
	});
	
	
	$('#mob_header .bar .open_mob').click(function () {$("body").addClass("hhh");$("#mob_header").addClass("act");$("#gb").addClass("open__");$("#mob_header .bar .open_mob").addClass("act");$("#mob_header .bar .close_mob").addClass("act");});
	$('#mob_header .bar .close_mob').click(function () {$("body").removeClass("hhh");$("#mob_header").removeClass("act");$("#gb").removeClass("open__");$("#mob_header .bar .open_mob").removeClass("act");$("#mob_header .bar .close_mob").removeClass("act");});
	$('#mob_header .nav').click(function () {$("body").removeClass("hhh");$("#mob_header").removeClass("act");$("#gb").removeClass("open__");$("#mob_header .bar .open_mob").removeClass("act");$("#mob_header .bar .close_mob").removeClass("act");});
	$('#gb').click(function () {$("body").removeClass("hhh");$("#mob_header").removeClass("act");$("#gb").removeClass("open__");$("#mob_header .bar .open_mob").removeClass("act");$("#mob_header .bar .close_mob").removeClass("act");});
	
var modal_id = location.href.split('#');
  modal_id = (modal_id.length > 1) ? modal_id[1] : '';
  if(modal_id != '') {
    $('#' + modal_id).modal('show');
  }
    
	//$('#modal-window').modal('show');

	
});