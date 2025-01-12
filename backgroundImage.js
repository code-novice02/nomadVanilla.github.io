const images = [
    {color: "#8f8f8f", name: "Default"},
    {url: "https://cdn.pixabay.com/photo/2018/08/21/23/15/clouds-3622489_1280.jpg", name: "Dark Cloudy City"},
    {url: "https://cdn.pixabay.com/photo/2019/10/25/21/53/sunset-4578229_1280.jpg", name: "Sunset City"},
    {url: "https://cdn.pixabay.com/photo/2018/08/17/22/28/creak-3613927_1280.jpg", name: "Nature"},
    {url: "https://cdn.pixabay.com/photo/2017/08/07/13/52/dark-2604020_1280.jpg", name: "Night Galaxy"}
];
const body = document.querySelector('body');
// background Change Button
const backgroundChangeButton = document.querySelector('#backgroundChanger button');

function getRandomIndex(){
    const randomIndex = Math.floor(Math.random() * images.length);
    return randomIndex;
};

function changeToImage() {
    const randomIndex = getRandomIndex();
    const bgImage = images[randomIndex];

    body.style.backgroundImage = `url(${bgImage.url})`;
    body.style.backgroundPosition = "50% 50%";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundAttachment = "fixed";
    body.style.backgroundSize = "cover";

    backgroundChangeButton.innerText = `${bgImage.name}`;
}

backgroundChangeButton.addEventListener('click', changeToImage);