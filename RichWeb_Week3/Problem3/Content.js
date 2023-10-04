//array of images
let smurfcat = "https://i.kym-cdn.com/photos/images/newsfeed/002/652/460/d70.jpg"

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    imgs[i].src = smurfcat
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "I swear to god, if it is another video of the FXXXXXX smurfca-";
}
//do the same for p elements
const p = document.getElementsByTagName("yt-formatted-string");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "We Live, We Love, We Lied";
}

const url = 'https://youtu.be/FYkJXogwOGA';

const links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; i++){
    links[i].href = url;
}