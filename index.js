const bodyEl=document.querySelector('body')
console.log(bodyEl)

bodyEl.addEventListener('mousemove', (e)=>{
     const xPos=e.offsetX
     const yPos=e.offsetY
     const spanEl=document.createElement('span')
     bodyEl.appendChild(spanEl)
     const size=Math.random()*100
     spanEl.style.width=size +"px"
     spanEl.style.height=size + "px"
     spanEl.style.left=xPos + "px"
     spanEl.style.top=yPos + "px" 
     setTimeout(()=>{
        spanEl.remove()
     },2000)
     
})