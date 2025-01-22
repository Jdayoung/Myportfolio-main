$(window).on('load', function(){
    mainScript.gsapFnc();
  })
  const mainScript = {
    gsapFnc: function(){
    gsap.set('.sc_visual .main-tit span', {
        rotateX: 90,
        skewY: 50,
        rotateY: 30,
        opacity: 0,
    })
    gsap.to('.sc_visual .main-tit span', {
        rotateX: 0,
        skewY: 0,
        rotateY: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.5,
    })
    gsap.set('.sc_visual .sub-tit', {
        // x: 70 + '%',
        opacity: 0,
    })
    gsap.to('.sc_visual .sub-tit', {
        delay: 3,
        // x: 70 + '%',
        rotation: 360,
        opacity: 1,
        duration: 1,
    })

    about = gsap.timeline({
      scrollTrigger:{
          trigger:'.sc_about',
          start:'top center', //[트리거기준,윈도우기준]
      }
    })
    about.to('.sc_about .up-txt',.8,{y:0,rotation:0,opacity:1})

    scrollleft = gsap.timeline({
      scrollTrigger:{
        trigger:'.sc_about',
        start:'top top', //[트리거기준,윈도우기준]
        end:'+=100%',
        scrub:1,
        // pin:true,
      },
    })
    .to('.profile_txt span',{x: 30 + '%'})

    scrollMoStrength = gsap.timeline({
      scrollTrigger:{
        trigger:'.sc_label',
        start:'top top', //[트리거기준,윈도우기준]
        end:'+=200%',
        scrub:1,
        pin:true,
        },
    })

    scrollMoStrength.addLabel('MoStrength');
    scrollMoStrength.to('.sc_label .label_txt.black',{x:-100 + '%'},'MoStrength')
    .to('.sc_label .label_txt.white',{x:100 + '%'},'MoStrength')
    .to('.sc_label .hidden-txt',{opacity:1})

    $('.project_wrapper').each(function(i,el){
      child = $(this).find('.bg_shadow')
      gsap.to(child,{
          scrollTrigger:{
              trigger:el,
              start:"top top",
              end:"bottom top",
              scrub:1
          },
          opacity:1
      })
    })

    gsap.to('.line_txt span', {
      stagger: 1,
      scrollTrigger: {
        trigger: '.line_txt span',
        scrub: 3,
        start: 'top center',
        end: 'bottom center',
      },
      color:'#3f3b37'
    });

  },  
}
$(function() {

    $('body').mousemove(function(e){
        gsap.to('.cursor',0.5,{
            x: e.clientX - ($('.cursor').width()/3),
            y: e.clientY -($('.cursor').width()/3),
            stagger:0.03
        })
    })
})

// 프로젝트 개수에 따라 번호 부여
const projectWrappers = document.querySelectorAll('.project_wrapper');
projectWrappers.forEach((wrapper, index) => {
    const strongTag = wrapper.querySelector('.project_number strong');
    if (strongTag) {
        strongTag.textContent = String(index + 1); // 인덱스는 0부터 시작하므로 1을 더해 설정.
    }
});