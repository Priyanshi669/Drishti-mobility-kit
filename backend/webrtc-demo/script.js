// Drishti WebRTC Placeholder Script

console.log("WebRTC Demo Script Loaded (Placeholder)");

async function startVideo() {
    try {
        let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        document.getElementById("video").srcObject = stream;
    } catch (err) {
        console.log("Camera not available:", err);
    }
}

startVideo();
