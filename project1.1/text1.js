const toolbox = document.getElementById('toolbox');
const contentArea = document.getElementById('content-area');
const saveButton = document.getElementById('save-button');

toolbox.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', event.target.dataset.element);
});

contentArea.addEventListener('dragover', (event) => {
  event.preventDefault();
});

contentArea.addEventListener('drop', (event) => {
  event.preventDefault();
  const elementType = event.dataTransfer.getData('text/plain');
  const element = createContentElement(elementType);
  contentArea.appendChild(element);
});

function createContentElement(elementType) {
  switch (elementType) {
    case 'text':
      return createTextElement();
    case 'image':
      return createImageElement();
    case 'video':
      return createVideoElement();
    // Add more cases for other draggable elements as needed
    default:
      return null;
  }
}

function createTextElement() {
  const textElement = document.createElement('div');
  textElement.textContent = 'This is a text element';
  textElement.className = 'content-element';
  return textElement;
}

function createImageElement() {
  const imageElement = document.createElement('img');
  imageElement.src = 'path/to/image.jpg';
  imageElement.alt = 'Image';
  imageElement.className = 'content-element';
  return imageElement;
}

function createVideoElement() {
  const videoElement = document.createElement('video');
  videoElement.src = 'path/to/video.mp4';
  videoElement.controls = true;
  videoElement.className = 'content-element';
  return videoElement;
}

saveButton.addEventListener('click', () => {
  const contentElements = contentArea.querySelectorAll('.content-element');
  const contentData = Array.from(contentElements).map((element) => element.outerHTML);
  // Save contentData to the server or database
  console.log(contentData);
});
