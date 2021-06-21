var video_player = document.getElementById("video_player"),
links = video_player.getElementsByTagName('a');
for (var i=0; i<links.length; i++) {
	links[i].onclick = handler;
}
function handler(e) {
	e.preventDefault();
	videotarget = this.getAttribute("href");
	filename = videotarget.substr(0, videotarget.lastIndexOf('.'))||videotarget;
	
	console.log('player filename ', filename);

	video = document.querySelector("#video_player video");
	//video.removeAttribute("poster");
	source = document.querySelectorAll("#video_player video source");
	source[0].src = filename + ".mp4";
	//source[1].src = filename + ".webm";

	console.log("player - video load and play ");
	video.load();
	video.play();
}
