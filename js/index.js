$(document).ready(function(){
	var tl = new TimelineLite()
	,inter = 30
  ,speed = 1
  ,$text = $('.text');
  function animInfinite(){
    $('.text').each(function(index,val) {
      index = index + 1;
      TweenMax.fromTo(
        $(this), speed, {autoAlpha:0},{autoAlpha:0+(0.01*index),delay:0.1*index});
     });
    TweenMax.to(
      $('.text:nth-child(30)'), speed,{autoAlpha:2.5,delay:3.5}
    );
  }
	var myVar = setInterval(myTimer, 5000);
	var cars = ["Presenting","Trailer of Our Love","Where V Got Lucky","Destiny Helped Us","And Technology By","Chat,Calls,Video","We fell in Love","Became So Caring","Started Missing","Waiting to Meet","Live for eachother","Thanks you Kajal","For being so special","Will Always","Love You!","Care for You!","Live for You!"];
	var i=0;
	function myTimer() {
		$text.text(cars[i]);
		i++;
		if(i>cars.length)
			i=0;
		animInfinite();
	}
  animInfinite();
});