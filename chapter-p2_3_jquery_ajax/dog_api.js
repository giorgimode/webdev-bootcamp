$("#btn").click(function(){
	$.getJSON("https://dog.ceo/api/breeds/image/random")
		.done(function(data){
			console.log(data.file)
			$('#dogImg').attr("src", data.message);
		})
		.fail(function(){
			alert("REQUEST IS NOT PAWSIBBLE");
		})
})