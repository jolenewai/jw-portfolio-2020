var ellipse = document.querySelectorAll('ellipse, .st2');
var triangles = document.querySelectorAll('.st9, .st7, .st5')
var el3 = document.querySelectorAll('.st6, .st8')
var avatar = document.querySelector('#avatar')

var animation1 = anime({
  targets: ellipse,
  translateX: [-270, 0],
  direction: 'alternate',
  delay: anime.stagger(50), // increase delay by 100ms for each elements.
  endDelay: 500,
  loop: true,
  autoplay: false
});

var animation2 = anime({
    targets: triangles,
    translateY: [-200, 0],
    direction: 'alternate',
    delay: anime.stagger(200), // increase delay by 100ms for each elements.
    endDelay: 1000,
    loop: true,
    autoplay: false,
})

var animation3 = anime({
    targets: el3,
    translateY: [100, 0],
    direction: 'alternate',
    delay: anime.stagger(800, {easing: 'easeOutQuad'}),
    loop: true,
    autoplay: false
})

var avatarAnimation = anime({
    targets: avatar,
    translateX: [(window.innerWidth/2)+200, 0],
    delay: 100,
    autoplay: false,
})