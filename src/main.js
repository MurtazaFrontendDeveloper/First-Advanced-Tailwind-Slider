    const spanfigure = document.querySelector('.buttons')

    const imgdiv = document.querySelectorAll('.main-left img')

    
    const Btnclass = ['btn-primary','btn-Danger','btn-secendary']


    for(let i = 0; i<imgdiv.length; i++){
        let span = document.createElement('button')
        span.classList.add('btn')
        span.classList.add(Btnclass[i])
        span.textContent = i + 1;
        spanfigure.appendChild(span)
    }
    
    
    let button = document.querySelectorAll('.buttons>button')
    if (button.length > 0) {
        button[0].classList.add('active')
        imgslider(0)
    }
    button.forEach((btn,index)=>{
        btn.addEventListener('click',()=>{
            if(btn.classList.contains('active')) return
            let isalready = btn.classList.contains('active')
            button.forEach((btn)=> btn.classList.remove('active'))
            if(!isalready){
                btn.classList.add('active')
            }
            imgslider(index)
        })
    })

    function imgslider (i){
        let imgslide = imgdiv[i]
        let imagesslider = imgslide.classList.contains('ON')
        imgdiv.forEach((img)=> img.classList.remove('ON'))
        if(!imagesslider){
            imgslide.classList.add('ON')
        }
    }