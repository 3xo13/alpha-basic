const imgsLinks = [
    {
        image: "https://images.unsplash.com/photo-1658844709274-f733f5da778c?ixlib=rb-1.2.1&ix",
        name: 'random1',
        discreption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. some text for testing num 1'
    }, {
        image: "https://images.unsplash.com/photo-1658824224587-6bd07d3b913f?ixlib=rb-1.2.1&ix",
        name: 'random2',
        discreption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. some text for testing num 2'
    }, {
        image: "https://images.unsplash.com/photo-1658763440438-2391eba32774?ixlib=rb-1.2.1&ix",
        name: 'random3',
        discreption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. some text for testing num 3'
    }, {
        image: "https://images.unsplash.com/photo-1658225595905-7bd75d10a265?ixlib=rb-1.2.1&ix",
        name: 'random4',
        discreption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. some text for testing num 4'
    }, {
        image: "https://images.unsplash.com/photo-1658498042419-be460a938f93?ixlib=rb-1.2.1&ix",
        name: 'random5',
        discreption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. some text for testing num 5'
    }, {
        image: "https://images.unsplash.com/photo-1658324362365-aa0b067fd804?ixlib=rb-1.2.1&ix",
        name: 'random6',
        discreption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. some text for testing num 6'
    }, {
        image: "https://images.unsplash.com/photo-1658311208604-80db77909163?ixlib=rb-1.2.1&ix",
        name: 'random7',
        discreption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. some text for testing num 7'
    }, {
        image: "https://images.unsplash.com/photo-1658039615872-f3369fa3e1fd?ixlib=rb-1.2.1&ix" ,
        name: 'random 8',
        discreption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. some text for testing num 8'
    }
]

const gallery = document.getElementById("footer-gallery");
const mainImg = document.getElementById("mainImg");
const projecyName = document.getElementById('product-name');
const decription = document.getElementById('product-decription');
const container = document.getElementById('projects-container');
//console.log(gallery)

const creatImgs = () => {
    gallery.innerHTML = "";
    for(let i = imgsLinks.length -1; i > 0 ; i--){
        const img = document.createElement("img")
        gallery.append(img);
        img.src = imgsLinks[i].image;
        img.className = "footer-img"
    }
    mainImg.src = imgsLinks[Math.floor(imgsLinks.length /2)].image ;
    projecyName.innerText = imgsLinks[Math.floor(imgsLinks.length /2)].name;
    decription.innerText = imgsLinks[Math.floor(imgsLinks.length /2)].discreption;
}
creatImgs()

let pause = false;
// const mainImgWrapper = document.getElementById("mainImgWrapper");
//pause or continue changing the main image 
container.addEventListener("mouseover",()=>{
     pause = true ;
     mainImgChanger()
})
container.addEventListener("mouseout",()=>{
    pause = false;
    mainImgChanger()
})
// change the main img every 3 seconds
function mainImgChanger(){
    if(pause){return clearTimeout(this.timout)}
    else{
        //using this to declare the timout as propert of the function so we can use it above
    this.timout = setTimeout(()=>{
    const lastLink = imgsLinks[imgsLinks.length -1];
    imgsLinks.pop();
    imgsLinks.unshift(lastLink);
    creatImgs()
    mainImgChanger()
    },3000)
}
}
mainImgChanger()




const left = document.getElementById("left-btn");
const right = document.getElementById("right-btn");

left.addEventListener("click",() => {
    const firstLink = imgsLinks[0];
    imgsLinks.shift();
    imgsLinks.push(firstLink);
    creatImgs()
})
right.addEventListener("click",() => {
    const lastLink = imgsLinks[imgsLinks.length -1];
    imgsLinks.pop();
    imgsLinks.unshift(lastLink);
    creatImgs()
})


//trying to change the main img with the img that have the mouse on

const imgList = document.getElementsByClassName("footer-img");
//console.log(imgList)

//imgList[Math.floor(imgList.length /2)].focus();

// imgList.forEach((el) => {
//     el.addEventListener("mouseover",() => {
//         console.log(el);
//     })
// })