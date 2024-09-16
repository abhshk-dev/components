let newX=0,newY=0,startX=0,startY=0;

let box=document.querySelector('.box');


const mouseDown=(e)=>{
    startX=e.clientX;
    startY=e.clientY;

    // console.log({startX,startY})
    document.addEventListener('mousemove',mouseMove);
    document.addEventListener('mouseup',mouseUp);
}

const mouseMove=(e)=>{
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    
    box.style.top=(box.offsetTop-newY) + 'px';
    box.style.left=(box.offsetLeft-newX) + 'px';

    console.log({newX,newY})
    console.log({startX,startY})

}

const mouseUp=(e)=>{
    document.removeEventListener('mousemove',mouseMove)
}

box.addEventListener('mousedown',mouseDown);