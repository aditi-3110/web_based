
var myvideo = document.getElementById("myvideo"); 
var skipAdDiv = document.getElementById("skip_Ad");
var currentAdDiv = document.getElementById("currentAdPoints");
var adTextDiv = document.getElementById("adText");
var skipAllAdsButton = document.getElementById("SkipAllAdsButton");
var undoSkipAllAdsButton = document.getElementById("UndoSkipAllAdsButton");

var adMark = document.getElementById("adMark");
var adMark2 = document.getElementById("adMark2");
var adMark3 = document.getElementById("adMark3");

let currentVideoTime3 = 0;
let adPoints = 100;
let originalPoints = 100;
let currentAdPoint = 0;

var insertAdMarks23 = "false";
var insertAdMarks3 = "false";

document.getElementById("points").innerHTML = adPoints;


var video_player = document.getElementById("video_player"),
links = video_player.getElementsByTagName('a');
for (var i=0; i<links.length; i++) {
	links[i].onclick = handler;
}
function handler(e) {
  console.log("Clicked Video Link");

  undoSkipAllAdsButton.removeAttribute("disabled");
  skipAllAdsButton.removeAttribute("disabled");

	e.preventDefault();
	videotarget = this.getAttribute("href");
	filename = videotarget.substr(0, videotarget.lastIndexOf('.'))||videotarget;
	video = document.querySelector("#video_player video");
	video.removeAttribute("poster");
	source = document.querySelectorAll("#video_player video source");

  console.log('filename ', filename);
	source[0].src = filename + ".mp4";
  console.log('source[0].src ', source[0].src );

  console.log("Player Handler");

  video.currentTime = 0;
	video.load();
	video.play();

}

//var positions = [1*60, 3*60, 5];
// Add each marker to the #seekbar element.
//positions.forEach(function(position) {
  // Is position within range of the duration?
  //if (position <= myvideo.duration) {
    // Calculate position in percentage and add to the #seekbar.
    //var left = (position / video.duration) * 100 + '%';
    // Create marker and give it the left value.
    //var marker = document.createElement('div');
    //marker.classList.add('bubles');
    //marker.style.left = left;
    //myvideo.appendChild(marker);

  //}
//})


function playVideo1() { 
  //e.preventDefault();
  //video.removeAttribute("poster");
  console.log("Play Video 1 from beginning");

  myvideo.src = 'video/great_wall.mp4';
  myvideo.setAttribute("controls", "");
  AdHidden();
  myvideo.currentTime = 0;
  myvideo.load();
  myvideo.play();

};

function playVideo2()  { 
  //e.preventDefault();
  //video.removeAttribute("poster");
  console.log("Play Video 2 from beginning");

  myvideo.src = 'video/dark_knight.mp4';
  myvideo.setAttribute("controls", "");
  AdHidden();
  myvideo.currentTime = 0;
  myvideo.load();
  myvideo.play();
};

//var playVideo3 = function handler(e)  { 
function playVideo3(){
  //e.preventDefault();
  //video.removeAttribute("poster");
  console.log("Play Video 2 from beginning");

  myvideo.src = 'video/marvel.mp4';
  myvideo.setAttribute("controls", "");
  AdHidden();
  myvideo.currentTime = 0;
  myvideo.load();
  myvideo.play();
};

   
function playAd1() { 

  console.log("Play Ad1");
  AdVisible();
  adMark.style.display = "none";
  adMark.style.visibility = "hidden";
  adMark2.style.display = "none";
  adMark2.style.visibility = "hidden";
  adMark3.style.display = "none";
  adMark3.style.visibility = "hidden";

  myvideo.src = 'video/ad_lamborghini_short.mp4';
  currentAdPoint = 20;
  document.getElementById("currentAdPoints").innerHTML = "Earn " + currentAdPoint + " credits by watching this Ad !" ;
  myvideo.load();
  myvideo.play();
  myvideo.removeAttribute("controls");

 
}

function playAd2() { 

 console.log("Play Ad2");
 AdVisible();
  adMark.style.display = "none";
  adMark.style.visibility = "hidden";
  adMark2.style.display = "none";
  adMark2.style.visibility = "hidden";
  adMark3.style.display = "none";
  adMark3.style.visibility = "hidden";
 
 myvideo.src = 'video/ad_sugar_bites.mp4';
 currentAdPoint = 10;
 document.getElementById("currentAdPoints").innerHTML = "Earn " + currentAdPoint + " credits by watching this Ad !" ;
 myvideo.load();
 myvideo.play();
 myvideo.removeAttribute("controls");

}

function playAd3() { 

console.log("Play Ad3");
AdVisible();
adMark.style.display = "none";
adMark.style.visibility = "hidden";
adMark2.style.display = "none";
adMark2.style.visibility = "hidden";
adMark3.style.display = "none";
adMark3.style.visibility = "hidden";

myvideo.src = 'video/yamaha.mp4';
currentAdPoint = 15;
document.getElementById("currentAdPoints").innerHTML = "Earn " + currentAdPoint + " credits by watching this Ad !" ;
myvideo.load();
myvideo.play();
myvideo.removeAttribute("controls");

}


var pausing_function = function handler(e) {  

        if(e.target.currentTime >= 1 * 60) {
            console.log("Pausing part1 main video");

            skipAllAdsButton.setAttribute("disabled", "disabled");
            undoSkipAllAdsButton.setAttribute("disabled", "disabled");          

            document.getElementById('myvideo').pause();
            currentVideoTime3 = e.target.currentTime;
            console.log('saving part1 currentVideoTime ', currentVideoTime3);

            // remove the event listener after you paused the playback
            myvideo.removeEventListener("timeupdate",pausing_function);

            playAd1();
           
            insertAdMarks23 = true;
            insertAdMarks3 = false;

            myvideo.addEventListener("ended", resume_main_function); 

        }
    };

var pausing2_function = function handler(e) {  

         if(e.target.currentTime >= 3 * 60) {

            console.log("Pausing part2 main video");

            skipAllAdsButton.setAttribute("disabled", "disabled");
            undoSkipAllAdsButton.setAttribute("disabled", "disabled");

            document.getElementById('myvideo').pause();
    
            currentVideoTime3 = e.target.currentTime;
            console.log('saving part2 currentVideoTime ', currentVideoTime3);

            // remove the event listener after you paused the playback
            myvideo.removeEventListener("timeupdate", pausing2_function);

            playAd2();

            insertAdMarks23 = false;
            insertAdMarks3 = true;

            myvideo.addEventListener("ended", resume_main_function);

        }
    };
    
  var pausing3_function = function handler(e) {  

        if(e.target.currentTime >= 5 * 60) {
            console.log("Pausing part3 main video");

            skipAllAdsButton.setAttribute("disabled", "disabled");
            undoSkipAllAdsButton.setAttribute("disabled", "disabled");


            document.getElementById('myvideo').pause();
    
            currentVideoTime3 = e.target.currentTime;
            console.log('saving part3 currentVideoTime ', currentVideoTime3);

            // remove the event listener after you paused the playback
            myvideo.removeEventListener("timeupdate",pausing3_function);

            playAd3();
    
            adMark3.style.display = "none";
            adMark3.style.visibility = "hidden";

            myvideo.addEventListener("ended", resume_main_function); 

        }
    };

myvideo.addEventListener("timeupdate", pausing_function);
myvideo.addEventListener("timeupdate", pausing2_function);
myvideo.addEventListener("timeupdate", pausing3_function);


var resume_main_function = function handler(e) {  
 
        myvideo.removeEventListener("ended",resume_main_function);

        adPoints = adPoints + currentAdPoint;
        console.log('adPoints ' , adPoints);
        document.getElementById("points").innerHTML = adPoints;

        resume();
        
  };

function skipTheAd() { 
    console.log("skipTheAd");

    if(adPoints >= currentAdPoint){
        document.getElementById('myvideo').pause();

        adPoints = adPoints - currentAdPoint;

        resume();

    }

    console.log('adPoints ' , adPoints);
    document.getElementById("points").innerHTML = adPoints;    
    
  } 

  function AdVisible() { 
    skipAdDiv.style.display = "block";
    skipAdDiv.style.visibility = "visible";
    
    currentAdDiv.style.display = "block";
    currentAdDiv.style.visibility = "visible";

    adTextDiv.style.display = "block";
    adTextDiv.style.visibility = "visible";

  }

  function AdHidden() { 
    skipAdDiv.style.display = "none";
    skipAdDiv.style.visibility = "hidden";

    currentAdDiv.style.display = "none";
    currentAdDiv.style.visibility = "hidden";

    adTextDiv.style.display = "none";
    adTextDiv.style.visibility = "hidden";

  }

  function resume() { 
    myvideo.src = 'video/marvel.mp4';

    myvideo.setAttribute("controls", "");

    console.log('Play Main Video from Paused location ' , currentVideoTime3);

    AdHidden();

    if(insertAdMarks23){
      adMark.style.display = "none";
      adMark.style.visibility = "hidden";

      adMark2.style.display = "block";
      adMark2.style.visibility = "visible";

      adMark3.style.display = "block";
      adMark3.style.visibility = "visible";
    }

    if(insertAdMarks3){
      adMark.style.display = "none";
      adMark.style.visibility = "hidden";

      adMark2.style.display = "none";
      adMark2.style.visibility = "hidden";

      adMark3.style.display = "block";
      adMark3.style.visibility = "visible";
    }

    myvideo.currentTime = currentVideoTime3;
    myvideo.load();
    myvideo.play();

  }

  function SkipAllAds() {
    console.log("SkipAllAds");

    let currentAd = 20; //first Ad points
    if(adPoints >= currentAd){

        skipAllAdsButton.setAttribute("disabled", "disabled");
        
        undoSkipAllAdsButton.removeAttribute("disabled");

        adPoints = adPoints - currentAd; 
        myvideo.removeEventListener("timeupdate",pausing_function);

        currentAd = 10; //second Ad points
        if(adPoints >= currentAd){
        adPoints = adPoints - currentAd; 
        myvideo.removeEventListener("timeupdate", pausing2_function);
        }

        currentAd = 15; //third Ad points
        if(adPoints >= currentAd){
            adPoints = adPoints - currentAd; 
            myvideo.removeEventListener("timeupdate",pausing3_function);
        }

    }
    
    console.log('adPoints ' , adPoints);
    document.getElementById("points").innerHTML = adPoints;   

  }

  function UndoSkipAllAds(){
    console.log("UndoSkipAllAds");

    undoSkipAllAdsButton.setAttribute("disabled", "disabled");

    console.log('originalPoints ' , originalPoints);
    document.getElementById("points").innerHTML = originalPoints;  


    adPoints = originalPoints;
    
    skipAllAdsButton.removeAttribute("disabled");

    myvideo.addEventListener("timeupdate", pausing_function);
    myvideo.addEventListener("timeupdate", pausing2_function);
    myvideo.addEventListener("timeupdate", pausing3_function);

  }
  