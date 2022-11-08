const slider = document.getElementById('partners-slider');
const projectSlider = document.getElementById('projects-slider');

const partnersImgs = ["./alpha-photos/partners/amaron.png",
"./alpha-photos/partners/cummins.png" ,
"./alpha-photos/partners/dossan.jpg" ,
"./alpha-photos/partners/emg.jpg" ,
"./alpha-photos/partners/etw.png" ,
"./alpha-photos/partners/federal.png" ,
"./alpha-photos/partners/kingsmill.png",
"./alpha-photos/partners/lucyElectric.jpg",
"./alpha-photos/partners/perkins.png" ,
"./alpha-photos/partners/raychem.png" ,
"./alpha-photos/partners/sfim.jpg" ,
"./alpha-photos/partners/tec.png" ,
"./alpha-photos/partners/tescom.png" ,
"./alpha-photos/partners/tosmac.png" ,
"./alpha-photos/partners/ultralight.jpg",
"./alpha-photos/partners/wxide.png" ,
"./alpha-photos/partners/yamuna.jpg" ];

const projects = [["./alpha-photos/projects/AlQwaiyaMall.jpg",'AlQwaiya Mall'],
      
["./alpha-photos/projects/aramco.jpg",'aramco'],
            
["./alpha-photos/projects/businessPark.jpg",'business Park'],
      
["./alpha-photos/projects/clemenceauMedicalCenter.jpg","clemenceau Medical Center"] ,
["./alpha-photos/projects/formulla1stadium.jpg","formulla1 stadium"],
  
["./alpha-photos/projects/kaustHotel.jpg","kaust Hotel"],
        
["./alpha-photos/projects/formullaRelated.png","formulla Related"],
   
["./alpha-photos/projects/kaustHousing.jpg","kaust Housing"],
      
["./alpha-photos/projects/SchoolsProjects.jpg","Schools Projects"],
   
["./alpha-photos/projects/TheZone.jpg","TheZone"],
           
["./alpha-photos/projects/UniversityBoulevard.jpg","University Boulevard"],
["./alpha-photos/projects/parking/parkingLotAbove.png.jpg","parking Lot"]]

const htmlImgs = partnersImgs.map(link => {
    let img = document.createElement('img');
    img.src = link;
    img.alt = 'partners logo';
    img.className = 'partners-img'
    return img;
})
slider.append(...htmlImgs)
console.log(htmlImgs)

const slide = ()=>{
    
    let leftImg = htmlImgs.shift();
    htmlImgs.push(leftImg)
    slider.append(...htmlImgs)
   setTimeout(()=>{slide()},2000)
}
slide()



const projectImgs = projects.map(link => {
    let card = document.createElement('div');
    let name = document.createElement('h3');
    let description = document.createElement('p');
    card.className = 'projects-card';
    name.className = 'projects-name';
    name.innerText = link[1];
    
    let img = document.createElement('img');
    img.src = link[0];
    img.alt = 'project image';
    img.className = 'projects-img'
    card.append(img);
    card.append(name)
    return card;
})
projectSlider.append(...projectImgs)
const projectSlide = ()=>{
    
    let leftImg = projectImgs.pop();
    projectImgs.unshift(leftImg)
    projectSlider.append(...projectImgs)
   setTimeout(()=>{projectSlide()},4000)
}
projectSlide()

// const imgsLinks = [
//     {
//         image: "https://images.unsplash.com/photo-1658844709274-f733f5da778c?ixlib=rb-1.2.1&ix",
//         name: 'random1',
//         discreption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. some text for testing num 1'
//     }, {
//         image: "https://images.unsplash.com/photo-1658824224587-6bd07d3b913f?ixlib=rb-1.2.1&ix",
//         name: 'random2',
//         discreption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. some text for testing num 2'
//     }, {
//         image: "https://images.unsplash.com/photo-1658763440438-2391eba32774?ixlib=rb-1.2.1&ix",
//         name: 'random3',
//         discreption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. some text for testing num 3'
//     }, {
//         image: "https://images.unsplash.com/photo-1658225595905-7bd75d10a265?ixlib=rb-1.2.1&ix",
//         name: 'random4',
//         discreption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. some text for testing num 4'
//     }, {
//         image: "https://images.unsplash.com/photo-1658498042419-be460a938f93?ixlib=rb-1.2.1&ix",
//         name: 'random5',
//         discreption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. some text for testing num 5'
//     }, {
//         image: "https://images.unsplash.com/photo-1658324362365-aa0b067fd804?ixlib=rb-1.2.1&ix",
//         name: 'random6',
//         discreption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. some text for testing num 6'
//     }, {
//         image: "https://images.unsplash.com/photo-1658311208604-80db77909163?ixlib=rb-1.2.1&ix",
//         name: 'random7',
//         discreption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. some text for testing num 7'
//     }, {
//         image: "https://images.unsplash.com/photo-1658039615872-f3369fa3e1fd?ixlib=rb-1.2.1&ix" ,
//         name: 'random 8',
//         discreption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. some text for testing num 8'
//     }
// ]

// const gallery = document.getElementById("footer-gallery");
// const mainImg = document.getElementById("mainImg");
// const projecyName = document.getElementById('product-name');
// const decription = document.getElementById('product-decription');
// const container = document.getElementById('projects-container');
// //console.log(gallery)

// const creatImgs = () => {
//     gallery.innerHTML = "";
//     for(let i = imgsLinks.length -1; i > 0 ; i--){
//         const img = document.createElement("img")
//         gallery.append(img);
//         img.src = imgsLinks[i].image;
//         img.className = "footer-img"
//     }
//     mainImg.src = imgsLinks[Math.floor(imgsLinks.length /2)].image ;
//     projecyName.innerText = imgsLinks[Math.floor(imgsLinks.length /2)].name;
//     decription.innerText = imgsLinks[Math.floor(imgsLinks.length /2)].discreption;
// }
// creatImgs()

// let pause = false;
// // const mainImgWrapper = document.getElementById("mainImgWrapper");
// //pause or continue changing the main image 
// container.addEventListener("mouseover",()=>{
//      pause = true ;
//      mainImgChanger()
// })
// container.addEventListener("mouseout",()=>{
//     pause = false;
//     mainImgChanger()
// })
// // change the main img every 3 seconds
// function mainImgChanger(){
//     if(pause){return clearTimeout(this.timout)}
//     else{
//         //using this to declare the timout as propert of the function so we can use it above
//     this.timout = setTimeout(()=>{
//     const lastLink = imgsLinks[imgsLinks.length -1];
//     imgsLinks.pop();
//     imgsLinks.unshift(lastLink);
//     creatImgs()
//     mainImgChanger()
//     },3000)
// }
// }
// mainImgChanger()




// const left = document.getElementById("left-btn");
// const right = document.getElementById("right-btn");

// left.addEventListener("click",() => {
//     const firstLink = imgsLinks[0];
//     imgsLinks.shift();
//     imgsLinks.push(firstLink);
//     creatImgs()
// })
// right.addEventListener("click",() => {
//     const lastLink = imgsLinks[imgsLinks.length -1];
//     imgsLinks.pop();
//     imgsLinks.unshift(lastLink);
//     creatImgs()
// })


// const homeIcon = document.getElementById('home-icon');

// homeIcon.addEventListener('mouseenter',()=>{homeIcon.src = './icons/house.png'});
// homeIcon.addEventListener('mouseleave',()=>{homeIcon.src = './icons/homeFirst.png'})

$(document).ready(function(){
    let menuState = false;
    $('#menu').click(()=>{
        menuState = !menuState;
        if(menuState){
        $('#home-item').animate({
            right: 90,
            top: 10
        });
        $('#about-item').animate({
            right: 60,
            top: 65
        });
        $('#projects-item').animate({
            right: 120,
            top: 65
        });
        $('#products-item').animate({
            right: 160,
            top: 10
        });
        $('#catalog-item').animate({
            right: 220,
            top: 10
        });
        $('#contacts-item').animate({
            right: 190,
            top: 65
        });
        }
        if(!menuState){
            $('#home-item').animate({
                right: 0,
                top: 45
            });
            $('#about-item').animate({
                right: 0,
                top: 45
            });
            $('#projects-item').animate({
                right: 0,
                top: 45
            });
            $('#products-item').animate({
                right: 0,
                top: 45
            });
            $('#catalog-item').animate({
                right: 0,
                top: 45
            });
            $('#contacts-item').animate({
                right: 0,
                top: 45
            });  
        }
        
    })
  
  }); 