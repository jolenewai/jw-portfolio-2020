var ellipse = document.querySelectorAll('ellipse');
var triangles = document.querySelectorAll('.st9')
var el3 = document.querySelectorAll('.st3.st7')
var avatar = document.querySelector('#avatar')

var animation1 = anime({
  targets: ellipse,
  translateX: [-270, 0],
  direction: 'alternate',
  delay: anime.stagger(20), // increase delay by 100ms for each elements.
  loop: true,
  autoplay: false
});

var animation2 = anime({
    targets: triangles,
    translateY: [-200, 0],
    direction: 'alternate',
    delay: anime.stagger(100), // increase delay by 100ms for each elements.
    loop: true,
    autoplay: false,
})

var animation3 = anime({
    targets: el3,
    translateY: [100, 0],
    direction: 'alternate',
    delay: anime.stagger(80, {easing: 'easeOutQuad'}),
    loop: true,
    autoplay: false
})

var avatarAnimation = anime({
    targets: avatar,
    translateX: [(window.innerWidth/2)+200, 0],
    delay: 1200,
    autoplay: false,
})