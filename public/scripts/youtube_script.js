console.log('Import - Youtube Script');

document.getElementsByClassName('video_list')[0].style.display = "none";

async function searchYoutube(value) {
    var part = 'snippet';
    var maxResults = 5;
    var type = "video";
    var q = encodeURIComponent(value)
    var key = "";
    var fetchUrl = "https://www.googleapis.com/youtube/v3/search?part=" + part + "&maxResults=" + maxResults + "&type=" + type + "&q=" + q + "&key=" + key;
    const response = await fetch(fetchUrl);
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    clearVideoList();
    fillVideoList(myJson.items);

}

function clearVideoList() {
    var videoList = document.getElementsByClassName('video_list')[0];
    videoList.innerHTML = '';
}

function fillVideoList(items) {
    var videoList = document.getElementsByClassName('video_list')[0];
    for (var i = 0; i < items.length; i++) {
        //console.log(items[i]);
        var videoId = items[i].id.videoId;
        var title = items[i].snippet.title;
        var thumbnail = items[i].snippet.thumbnails.medium.url;
        
        var videoItem = createVideoItem(videoId, title, thumbnail);
        videoList.appendChild(videoItem);

        videoItem.addEventListener('mousedown', (event) => {
            var video = null;
            if (event.target.className.includes('video_thumbnail') || event.target.className.includes('video_title')) {
                video = event.target.closest('.video_item');
            } else {
                video = event.target;
            }
            console.log(video.getAttribute('videoId'));
            clickVideo(video.getAttribute('videoId'));
        });

    }
}

function createVideoItem(videoId, title, thumbnail) {
    var videoItem = document.createElement('div');
    videoItem.className = 'video_item';
    videoItem.setAttribute('videoId', videoId);
    var imgItem = document.createElement('img');
    imgItem.className = 'video_thumbnail';
    imgItem.src = thumbnail;
    imgItem.alt = 'Thumbnail Missing';
    var titleItem = document.createElement('p');
    titleItem.className = 'video_title';
    titleItem.innerHTML = title;

    videoItem.appendChild(imgItem);
    videoItem.appendChild(titleItem);

    return videoItem;
}


function clickVideo(videoId) {
    document.getElementsByClassName('video_list')[0].style.display = "none";
    var videoPlayerDiv = document.getElementsByClassName('video_player_div')[0];
    videoPlayerDiv.innerHTML = '';
    videoPlayerDiv.style.display = "block";
    var video = document.createElement('iframe');
    video.className = 'video_player';
    video.src = "https://www.youtube.com/embed/" + videoId + "?enablejsapi=1&version=3&playerapiid=ytplayer";
    video.frameborder = '0';
    video.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    videoPlayerDiv.appendChild(video);
}