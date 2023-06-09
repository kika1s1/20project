const videoElement = document.getElementById("video")
const button = document.getElementById("button")
async function SelectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
        
    }catch(error){
        console.log("here is an error occured", error)
    }
}
button.addEventListener("click", async () => {
    // disable button
    button.style.visibility = "hidden";
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // button.style.visibility = "visible"
})
SelectMediaStream();