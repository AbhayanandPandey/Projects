const video = document.getElementById('video');
async function openCam()
{
    const stream = await navigator.mediaDevices.getUserMedia({video: true});
    video.srcObject = stream;
    window.localStream = stream;
    console.log("video/camera start")
}

function closeCam() {
    localStream.getVideoTracks()[0].stop();
    video.src = '';
    console.log("video/camera stop")

}