var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

$('#home').click(function(){
    $(document).scrollTop(100) // any value you need
    });

    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    // function callbackFunc() {
    //   for (var i = 0; i < items.length; i++) {
    //     if (isElementInViewport(items[i])) {
    //       if(!items[i].classList.contains("in-view")){
    //         items[i].classList.add("in-view");
    //       }
    //     } else if(items[i].classList.contains("in-view")) {
    //         items[i].classList.remove("in-view");
    //     }
    //   }
    // }
     
    // window.addEventListener("load", callbackFunc);
    // window.addEventListener("scroll", callbackFunc);
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry=>{
    const timeline=entry.target.querySelector('.timeline-box');

    if(entry.isIntersecting){
      timeline.classList.add('timeline-box-animation');
      return;
    }

    timeline.classList.remove('timeline-box-animation');
  })
})

observer.observe(document.querySelector('.timeline-box-wrapper1'));
observer.observe(document.querySelector('.timeline-box-wrapper2'));
observer.observe(document.querySelector('.timeline-box-wrapper3'));
observer.observe(document.querySelector('.timeline-box-wrapper4'));
observer.observe(document.querySelector('.timeline-box-wrapper5'));

