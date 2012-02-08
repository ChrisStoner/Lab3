function main() {
	var s = new Spotter("twitter.search",
			    {q:"bieber", period:60, lang:"en"},
			    {buffer:true, bufferTimeout:750}
			   );
	var tweetArray = [];
	var count = 0;
	s.register(function(tweet) {
	  var color;
	  var profile_image = "<img src='" + tweet.profile_image_url + "' />";
	  if(count%2===0)
		color = "'blue'";
	  else
		color = "'green'";
	  var twit = $("<p class="+color+">"+profile_image+tweet.text+"</p>");
	  tweetArray.push(twit);
	  twit.hide();
	  $("#tweets").prepend(twit);
	  twit.slideDown();
	  if(tweetArray.length > 5) {
		var twitRemove = tweetArray.shift();
		twitRemove.fadeOut(2000, function(){
			twitRemove.remove();
		});
	  }
	  count = count + 1;
	});
	s.start();
}
main();
