const localVideo = document.getElementById('local-video');
const remoteVideo = document.getElementById('remote-video');
const chatLog = document.getElementById('chat-log');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const startCallButton = document.getElementById('start-call-button');
const endCallButton = document.getElementById('end-call-button');

let localStream;
let remoteStream;
let rtcPeerConnection;

startCallButton.addEventListener('click', async () => {
  try {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = localStream;
    rtcPeerConnection = new RTCPeerConnection();

    localStream.getTracks().forEach(track => rtcPeerConnection.addTrack(track, localStream));

    rtcPeerConnection.ontrack = event => {
      remoteStream = event.streams[0];
      remoteVideo.srcObject = remoteStream;
    };

    // Implement signaling and ICE candidate handling here
    // You'll need a signaling server for this

  } catch (error) {
    console.error('Error starting call:', error);
  }
});

endCallButton.addEventListener('click', () => {
  localStream.getTracks().forEach(track => track.stop());
  rtcPeerConnection.close();
  remoteVideo.srcObject = null;
  localVideo.srcObject = null;
});

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  // Send the message using your chosen communication method (e.g., WebSockets)
  // Display the message in the chat log
  chatLog.innerHTML += `<div>You: ${message}</div>`;
  // Clear the input field
  messageInput.value = '';
});
