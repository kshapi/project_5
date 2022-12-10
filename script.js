let add = document.querySelector('.add');
let main = document.querySelector('.main');
let counter = 0;

add.addEventListener('click',()=>{
  let input = document.querySelector('.input');
  counter ++;
  
  const elemcontent = document.createElement('div');
  elemcontent.classList.add('content');
  main.append(elemcontent);
  
  
  const elemscreen = document.createElement('div');
  elemscreen.classList.add('screen');
  elemscreen.innerText = counter + ' : ' + input.value;
  elemcontent.append(elemscreen);
  
  
  const elemdel = document.createElement('button');
  elemdel.classList.add('del');
  elemdel.innerText = 'Delete'
  elemcontent.append(elemdel);
  
  input.value = '';
  
  elemdel.addEventListener('click',()=>{
    main.removeChild(elemcontent);
    counter -= 1;
  });
});
