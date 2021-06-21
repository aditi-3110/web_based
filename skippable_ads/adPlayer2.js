var myvideo = document.getElementById("myvideo"); 
var skipAdDiv = document.getElementById("skip_Ad");
var currentAdDiv = document.getElementById("currentAdPoints");
var adTextDiv = document.getElementById("adText");
var skipAllAdsButton = document.getElementById("SkipAllAdsButton");

let currentVideoTime2 = 0;

let adPoints = 100;
let currentAdPoint = 0;

document.getElementById("points").innerHTML = adPoints;

var pausing_function = function handler(e) {  

        if(e.target.currentTime >= 1 * 60) {
            console.log("Pausing part1 main video");

            document.getElementById('myvideo').pause();
    
            currentVideoTime2 = e.target.currentTime;
            console.log('saving part1 currentVideoTime ', currentVideoTime2);

            // remove the event listener after you paused the playback
            myvideo.removeEventListener("timeupdate",pausing_function);

            console.log("Play Ad1");

            AdVisible();

            myvideo.src = 'video/ad_lamborghini_short.mp4';
            currentAdPoint = 20;
            document.getElementById("currentAdPoints").innerHTML = "Earn " + currentAdPoint + " credits by watching this Ad !" ;

            myvideo.load();
            myvideo.play();
            myvideo.removeAttribute("controls");

            myvideo.addEventListener("ended", resume_main_function); 

        }
    };
    
var pausing2_function = function handler(e) {  

         if(e.target.currentTime >= 3 * 60) {

            console.log("Pausing part2 main video");

            document.getElementById('myvideo').pause();
    
            currentVideoTime2 = e.target.currentTime;
            console.log('saving part2 currentVideoTime ', currentVideoTime2);

            // remove the event listener after you paused the playback
            myvideo.removeEventListener("timeupdate", pausing2_function);

            console.log("Play Ad2");

            AdVisible();

            myvideo.src = 'video/ad_sugar_bites.mp4';
            currentAdPoint = 10;
            document.getElementById("currentAdPoints").innerHTML = "Earn " + currentAdPoint + " credits by watching this Ad !" ;

            myvideo.load();
            myvideo.play();
            myvideo.removeAttribute("controls");


            myvideo.addEventListener("ended", resume_main_function);

        }
    };
    
    var pausing3_function = function handler(e) {  

        if(e.target.currentTime >= 5 * 60) {
            console.log("Pausing part3 main video");

            document.getElementById('myvideo').pause();
    
            currentVideoTime2 = e.target.currentTime;
            console.log('saving part3 currentVideoTime ', currentVideoTime2);

            // remove the event listener after you paused the playback
            myvideo.removeEventListener("timeupdate",pausing3_function);

            console.log("Play Ad3");

            AdVisible();

            myvideo.src = 'video/yamaha.mp4';
            currentAdPoint = 15;
            document.getElementById("currentAdPoints").innerHTML = "Earn " + currentAdPoint + " credits by watching this Ad !" ;

            myvideo.load();
            myvideo.play();
            myvideo.removeAttribute("controls");

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
    myvideo.src = 'video/dark_knight.mp4';

    myvideo.setAttribute("controls", "");

    console.log('Play Main Video from Paused location ' , currentVideoTime2);

    AdHidden();

    myvideo.currentTime = currentVideoTime2;
    myvideo.load();
    myvideo.play();

  }


  function SkipAllAds() {
    console.log("SkipAllAds");

    let currentAd = 20; //first Ad points
    if(adPoints >= currentAd){
        skipAllAdsButton.setAttribute("disabled", "disabled");

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