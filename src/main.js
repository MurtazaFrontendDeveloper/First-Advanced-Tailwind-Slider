let spans = document.querySelector('.spans')
    let images = document.querySelectorAll('.images>a>img')
    let content = document.querySelectorAll('.content')
    
    for(let i=0; i<images.length; i++){
        let span = document.createElement('span')
        span.classList.add('btn')
        span.innerText = "Step" + (i + 1)
        spans.appendChild(span)
    }
    let btnslide = document.querySelectorAll('.spans>span')
    btnslide.forEach((btn,index)=>{
        btn.addEventListener('click',()=>{
        btnslide[0].classList.add('ON') 
            if(btn.classList.contains('show')) return
            let isExsist = btn.classList.contains('show')
            btnslide.forEach((span)=> span.classList.remove('show'))
            if(!isExsist){
                btn.classList.add('show')
            }
            ImageSlidr(index)
            contentSlider(index)
        })
    })
    function ImageSlidr(i){
        let imgslide = images[i]
        let isalready =imgslide.classList.contains('ON')
        images.forEach((img)=> img.classList.remove('ON'))
        if(!isalready){
            imgslide.classList.add('ON')
        }
    }
    function contentSlider(index){
        let currentContent = content[index]
        let isalready = currentContent.classList.contains('ON')
        content.forEach((con)=> con.classList.remove('ON'))
        if(!isalready){
            currentContent.classList.add('ON')
        }
    }
    images[0].classList.add('ON')
    content[0].classList.add('ON')
    btnslide[0].classList.add('show')