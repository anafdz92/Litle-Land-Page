"use strict";

const link =document.querySelectorAll( 'li');
const div = document.querySelectorAll('.menu__btn--textContainer');
let icon = document.querySelectorAll('.icon');


const guideTextContent = `Integer vel arcu ac dolor tincidunt dapibus. Nam sit amet lacinia velit. Pellentesque vel urna diam. Nunc sit
amet justo malesuada, tincidunt massa eu, placerat est. Suspendisse commodo pellentesque gravida. Donec
suscipit vulputate odio, at eleifend purus condimentum in. Praesent sed cursus sem. Donec mattis urna
efficitur diam sagittis, id maximus orci dictum. Etiam non congue felis, et varius augue. Aliquam et ullamcorper
massa. Nullam interdum lobortis volutpat. Etiam leo arcu, vulputate vel commodo sit amet, ullamcorper varius
dui. `;
let careTextContent = `Quisque a turpis fermentum, dapibus mauris quis, dignissim ligula. Aliquam aliquet tellus nunc, non
fermentum leo dictum vel. Morbi vehicula laoreet felis ac blandit. Sed mi urna, feugiat nec rhoncus vitae,
sollicitudin non dui. Vestibulum in porttitor urna, ut posuere elit. Suspendisse mi magna, molestie nec aliquam
id, porttitor in ante. Nullam posuere ipsum odio, at placerat ante eleifend vitae. Suspendisse vestibulum
magna pretium velit venenatis venenatis. Donec dapibus, justo ut aliquam varius, quam tortor dignissim tellus,
imperdiet scelerisque risus ex ac magna. Nunc sed purus nibh. Phasellus elit erat, scelerisque sed volutpat
non, interdum vitae urna.`;
let materialsTextContent =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh arcu, ultricies nec purus quis, consequat
luctus orci. Sed non mi nisi. Donec vulputate erat odio, eget lacinia lectus accumsan sed. Phasellus diam lorem,
ullamcorper quis velit a, ultricies facilisis turpis. Sed laoreet efficitur odio, ut consequat arcu iaculis non.
Quisque lectus ligula, venenatis quis ullamcorper vitae, euismod in nisi. Sed sed arcu tortor. Phasellus a iaculis
metus, sed suscipit dui. Nunc mollis, ipsum at tristique dignissim, enim mi sodales nulla, sed dapibus lorem
tortor et nisi.`;


function handleClick(ev) {
    
    const textForPC = document.querySelector(".js__text");
    const textForMobile1= document.querySelector(".js__textMobile1");
    const textForMobile2= document.querySelector(".js__textMobile2");
    const textForMobile3= document.querySelector(".js__textMobile3");
    const currentTargetId= ev.currentTarget.id;
    

    if (screen.width<768){
        textForPC.innerHTML=``;
        div.forEach(item => {
            item.classList.add('js__textContentMobile')
          });

        icon.forEach(item => {
            item.classList.add('js__none')
          })

    
    
        if (currentTargetId == "1"){
            textForMobile1.innerHTML=`<p class="js__textSection js__fade-in ">${guideTextContent}</p>`;
            textForMobile2.innerHTML=``;
            textForMobile3.innerHTML=``;
        }else if(currentTargetId == "2"){
            textForMobile2.innerHTML=`<p class="js__textSection js__fade-in ">${careTextContent}</p>`;
            textForMobile1.innerHTML=``;
            textForMobile3.innerHTML=``;
        }else{
            textForMobile1.innerHTML=``;
            textForMobile2.innerHTML=``;

            let CodeHTML="";
        
            CodeHTML += `<div class="js__materialsContainer js__fade-in"> `;
    
            CodeHTML += `<div class="js__percentContainer"> `;
            CodeHTML += `<p class="js__numbers">50%</p> `;
            CodeHTML += `<p class="js__material">cashmere</p> `;
            CodeHTML += `</div> `;
    
            CodeHTML += `<div class="js__percentContainer"> `;
            CodeHTML += `<p class="js__numbers">46%</p> `;
            CodeHTML += `<p class="js__material">wool</p> `;
            CodeHTML += `</div> `;
    
            CodeHTML += `<div class="js__percentContainer"> `;
            CodeHTML += `<p class="js__numbers">4%</p> `;
            CodeHTML += `<p class="js__material">modal</p> `;
            CodeHTML += `</div> `;
    
            CodeHTML += `</div> `;
            CodeHTML +=`<p class="js__textSection js__fade-in ">${materialsTextContent}</p>`;
            textForMobile3.innerHTML= CodeHTML;
        }
    
    
    
    }
    else if(screen.width>768) {
        
        icon.classList.add('.js__none');
        
        if (currentTargetId == "1"){
            textForPC.innerHTML=`<p class="js__textSection js__fade-in ">${guideTextContent}</p>`;
        } else if(currentTargetId == "2"){
            textForPC.innerHTML=`<p class="js__textSection js__fade-in ">${careTextContent}</p>`;
        }else{

            let CodeHTML="";
        
            CodeHTML += `<div class="js__materialsContainer js__fade-in"> `;
    
            CodeHTML += `<div class="js__percentContainer"> `;
            CodeHTML += `<p class="js__numbers">50%</p> `;
            CodeHTML += `<p class="js__material">cashmere</p> `;
            CodeHTML += `</div> `;
    
            CodeHTML += `<div class="js__percentContainer"> `;
            CodeHTML += `<p class="js__numbers">46%</p> `;
            CodeHTML += `<p class="js__material">wool</p> `;
            CodeHTML += `</div> `;
    
            CodeHTML += `<div class="js__percentContainer"> `;
            CodeHTML += `<p class="js__numbers">4%</p> `;
            CodeHTML += `<p class="js__material">modal</p> `;
            CodeHTML += `</div> `;
    
            CodeHTML += `</div> `;
            CodeHTML +=`<p class="js__textSection js__fade-in ">${materialsTextContent}</p>`;
            textForPC.innerHTML= CodeHTML;
        }


    }
    
};

function animation(ev){setTimeout(function(ev) {
    console.log("soy una animación");
    console.log(ev)
    ev.currentTarget.className = 'js__slideDown';
  }, 3000);}


 link.forEach(item => {
    item.addEventListener('click', handleClick, )
    //item.addEventListener('click', animation,false)
  });


//# sourceMappingURL=main.js.map
