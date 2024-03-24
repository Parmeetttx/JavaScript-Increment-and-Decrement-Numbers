let minus = document.querySelector('.minus'),
    text = document.querySelector('.text'),
    plus = document.querySelector('.plus'),
    num = 1 ;

    // console.log(minus , text , plus , num)

    plus.addEventListener("click" , () => {
        num++;
        num = (num < 10) ? "0" + num : num;
        text.innerHTML = num;
    })

    minus.addEventListener("click" , () => {
        if( num > 0 ){
            num--;
            num = (num < 10) ? "0" + num : num;
            text.innerHTML = num;
        }
    })