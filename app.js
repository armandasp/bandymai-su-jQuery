// pasiekti h1 elementą

$('h1').css('background', 'orange')
$('h1').click(function () {
    $('h1').css('color', 'purple')
})

$('li').css('font-weight', 600)

$('li').click(function () {
    $(this).css('letter-spacing', '5px')
})

$('h2').click(function () {
    $('ul').slideToggle()
})

$('.box').click(function () {
    $('.box').fadeOut()
})

$('.gallery img').click(function () {
    var src=($(this).attr('src'))
    $('.main').fadeOut(500, function () {
        $('.main').attr('src', src).fadeIn(500)
    })
})

for(let x=0; x<10; x++){

    var l=Math.random()*window.innerWidth
    var t=Math.random()*document.body.offsetHeight


    var img =`<img 
    src="img/bitcoin.png"
    style="top:${t}px; left:${l}px"
    class="coin">`
    $('body').append(img)
}



var count=0

$('.coin').mouseenter(function () {
    var l=Math.random()*window.innerWidth
    var t=Math.random()*document.body.offsetHeight
    $(this).off('mouseenter')
    $(this).animate({
        left: `${l}px`,
        top: `${t}px`
    }, 2000, function () {
        $(this).fadeOut('slow', function () {
            count++
            $('h3').html(`Counter: ${count}`)
        })

    })

})
