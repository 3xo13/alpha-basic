

const slider = document.querySelector('#partners-slider');
const sliderReplica = document.querySelector('#partners-slider-replica');
const projectSlider = document.querySelector('#projects-slider');
const replica = document.querySelector('#projects-slider-replica');

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


// create html images for the slider
const partnersImages = () => {
    const htmlImgs = partnersImgs.map(link => {
    let img = document.createElement('img');
    img.src = link;
    img.alt = 'partners logo';
    img.className = 'partners-img'
    return img;
})
    return htmlImgs;
}
// adding images to the page
slider.append(...partnersImages());
sliderReplica.append(...partnersImages());

// create the images for the projects section

const imgsMaker = () => {
const arr = projects.map(link => {
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
return arr;
}

projectSlider.append(...imgsMaker());
replica.append(...imgsMaker());


// back to top button
const backUp = document.querySelector('.backToTop');


const scrollContainer = () => {
  return document.documentElement || document.body;
};
// show or hide ( back to top ) button on scroling 
document.addEventListener("scroll", () => {
    const showOnPx = 200;
  if (scrollContainer().scrollTop > showOnPx) {
    backUp.classList.remove("hidden")
  } else {
    backUp.classList.add("hidden")
  }
})

// menu button animation

$(document).ready(function(){
    let menuState = false;
    $('#menu').click(()=>{
        menuState = !menuState;
        // animate menu elements when the btn is active
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
        // animate menu elements when the btn is inactive
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
    // animate menu items back when one of them is clicked
    $('.nav-item').click(()=>{
        if(menuState){
            menuState = !menuState;
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
    });

//    const partnersSlider = () => {

//     $('.partners-img').animate({
//         left: '200px'
//    },500)
    
//    }
    
  
  }); 

const submit = document.querySelector('#submit');
const custumerName = document.querySelector('#name');
const phoneNumber = document.querySelector('#phone');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');

let message = {
    custumer: '',
    phone: '',
    subject: ''
};

function emailWriter (){
    console.log(arguments)
}


custumerName.addEventListener('keyup',(e)=>{
    //console.log(e.target.value)
    message.custumer = e.target.value;
})
phoneNumber.addEventListener('keyup',(e)=>{
    //console.log(e.target.value)
    message.phone = e.target.value;
})
email.addEventListener('keyup',(e)=>{
    //console.log(e.target.value)
    message.email = e.target.value;
})
subject.addEventListener('keyup',(e)=>{
    //console.log(e.target.value)
    message.subject = e.target.value;
})


const linkSubmit = document.querySelector('#link-submit');

// read more button 

const about = document.querySelector('.about');
const aboutSecondSection = document.querySelector('.about-second');
const readMoreBtn = document.querySelector('.read-more')
let readMoreState = false;
const readMore = () => {
    readMoreState = !readMoreState;
    readMoreBtn.innerText = readMoreState ? 'Read less ...' : 'Read more ...';
    about.style.height = readMoreState ? '200vh' : '100vh';
    $(aboutSecondSection).toggle()
    console.log(about,aboutSecondSection)
}

//   submit.addEventListener('click',(e)=>{
//     linkSubmit.href = `mailto:${message.email}`;
    
//   })