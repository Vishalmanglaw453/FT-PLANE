function openNav() {
  document.getElementById("navbar").classList.toggle("!left-[0%]");
  document.body.classList.toggle("overflow-hidden");
}

$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 300,
  button:false,
  slidesToShow: 1,
  nextArrow:'.next-btn',
  prevArrow:'.prev-btn',
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
             }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
});
	
function navtabs(tabs) {
  const tabshow = document.querySelectorAll('.tabshow')
  const tabbtn = document.querySelectorAll('.tabs button')
  tabshow.forEach(content => {
      content.style.display = 'none'
  })
  tabbtn.forEach(content => {
      content.classList.remove('bg-blue')
  })

  const selecttoshow = document.getElementById(tabs)
  selecttoshow.style.display = 'block'

  const activeTab = document.querySelector(button[onclick = "navtabs('${tabs}')"])
  activeTab.classList.add("bg-blue")
}
navtabs('tab1');