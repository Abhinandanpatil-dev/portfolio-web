let flag ="";
let buttons =document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    console.log(e.target)
    flag = flag += e.target.innerHtml;
    document.querySelector('input').value + flag;
  })
})