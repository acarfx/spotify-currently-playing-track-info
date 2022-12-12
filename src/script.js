let url;

function get_calan_sarki() {
    $.get( "./src/get_api.php", function( r ) {
        r = JSON.parse(r)
        let root = document.getElementById("app");

        if(r.is_playing) {
            if(url != r.item.preview_url) {
                let sanatcilar = r.item.artists.map(x => {
                    return x.name
                }).join(", ")
                root.innerHTML = `
             
                <div class='music-card'>
                <div class='image' style="background: linear-gradient(rgba(221, 65, 127, 0), #ed4245);">
                  <img src='${r.item.album.images[0].url}'>
                </div>
                <div class='wave'></div>
                <div class='wave'></div>
                <div class='wave'></div>
                <div class='info'>
                  <h2 class='title'>${r.item.name}</h2>
                  <author class='artist'>
                  ${sanatcilar}
                  
                  </author></br>
                  <input id="vol-control" type="range" min="0" max="100" step="1" value="100" oninput="thisVolume(this.value)" onchange="thisVolume(this.value)"></input>
                </div>
              </div>


                `
                url = r.item.preview_url
                playSound("./src/lopp.mp3")
               setTimeout(() => {
                 playSound(r.item.preview_url)
             
               }, 1500);
           
              
            } else {
                url = r.item.preview_url
            }
            
        } else {
            var ourAudio = document.getElementById('audio');
            ourAudio.muted = true;
    
            root.innerHTML = `
             
            <div class='music-card'>
            <div class='image'>
              <img src='./src/no-music.png'>
            </div>
            <div class='wave2'></div>
            <div class='wave2'></div>
            <div class='wave2'></div>
            <div class='info'>
              <h2 class='title'>Not listening to anything!</h2>
              <author class='artist'><a href="https://open.spotify.com/artist/7My5oW9Nyanq8W2mSUmZ05?si=Sd_2BLo3R2S_YxnrRXbFCQ&nd=1">Acarfx</br> <svg xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" version="1.1" viewBox="0 0 168 168">
              <path fill="#1ED760" d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"/>
             </svg></a></author>
           
            </div>
          </div>


            `
        }
      })

}
function playSound(r) { 
    var ourAudio = document.getElementById('audio');
    ourAudio.style.display = "none";
    ourAudio.src = r;
    ourAudio.id = "audio"
    ourAudio.muted = false
    ourAudio.loop = true
    ourAudio.volume = 100 / 100
    ourAudio.autoplay = true; 
    ourAudio.autoload = true;
    ourAudio.preload = "auto";
  }

function thisVolume(volume_value) { 
    var myvideo = document.getElementById("audio"); 
    myvideo.volume = volume_value / 100; 
}