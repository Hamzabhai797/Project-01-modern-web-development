const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from('#nav', {
        y: '-10',
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut
    })
    .to('.boundingelem', {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2
    })
    .from('#herofooter', {
        y: -10,
        opacity: 0,
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut
    })
}

var time;

function circleChaptaKaro(){
    // define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout)

        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2, dets.clienty - yprev);

        xprev = dets.clientX
        yprev = dets.clienty

        circleMouseFollower(xscale, yscale);
        timeout = setTimeout(function(){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`
        }, 100);
        
    })
}

function circleMouseFollower(xscale,  yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`
    });
}
circleMouseFollower()
firstPageAnim()

document.querySelectorAll(".elem")
.forEach(function(elem){
    elem.addEventListener("mousemove", function(dets){
        console.log("hello")
    });
});