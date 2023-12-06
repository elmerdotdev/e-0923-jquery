$(function() {  // checks if the DOM/HTML has loaded

  // JQUERY

  $('#JQ').attr('custom-attribute', '123')

  $('input[type="text"]').css('background', 'yellow')

  $('input[type="text"]').parent().css('background', 'green')

  $('.jquery-wrapper').children('input').css('font-size', '24px')

  $('.ancestor').find('.child').css('color', 'white')
  $('.child').parents('.ancestor').css('background', 'pink')

  const wrapperWidthJQ = $('.jquery-wrapper').width()
  console.log(wrapperWidthJQ)

  $('.jquery-wrapper p').html('Hi again world!!!!!!!!!').css({
    'background-color': 'red',
    'color': 'white'
  })
  
  const para1 = $('.paragraph1').text()
  console.log(para1)

  $('#btn').click(function() {
    $('.jquery-wrapper p').css('background', 'orange')
  })

  $('input[type="text"]').on('mouseenter', function (){
    $('.jquery-wrapper p').css('background', 'purple')
  }).on('mouseleave', function() {
    $('.jquery-wrapper p').css('background', 'red')
  })

  $('.jquery-wrapper p').first().next().next().css('font-size', '30px')


  // VANILLA JS

  const className = document.querySelector('#noJQ').getAttribute('class')
  console.log(className)

  document.querySelector('textarea[name="message"]').style.backgroundColor = 'yellow'

  document.querySelector('.no-jquery-wrapper').style.backgroundColor = 'black'

  const wrapperWidth = document.querySelector('.no-jquery-wrapper').getBoundingClientRect().width
  console.log(wrapperWidth)

  document.querySelectorAll('.no-jquery-wrapper p').forEach(paragraph => {
    paragraph.style.backgroundColor = 'blue'
    paragraph.style.color = 'white'
    paragraph.innerHTML = 'Hi world!!!!'
  })

  document.querySelector('#btn2').addEventListener('click', () => {
    document.querySelectorAll('.no-jquery-wrapper p').forEach(paragraph => {
      paragraph.style.backgroundColor = 'grey'
    })
  })

})