window.onscroll = function(){scrollImages()}

    function scrollImages(){
    	if (window.pageYOffset > document.getElementById("serviceSection").offsetTop - 450) {
    		document.getElementById("brandCard").classList.add("anim");
    		document.getElementById("designCard").classList.add("anim");
    		document.getElementById("devCard").classList.add("anim");
    	}
    }

    let buttons = document.querySelectorAll(".main-list__item");
    function changeScreen(num){
      if(buttons[num].classList.contains("active")) return 1;
      document.querySelector(':root').style.setProperty('--background', 'url(../assets/bg'+ num +'.png)');
      background = document.querySelector("main");
      background.style.background = "url(../assets/bg" + num + ");";
      for(let button of buttons){
        if(button.classList.contains("active")){
          button.classList.toggle("active");
          break;
        }
      }
      buttons[num].classList.toggle("active");
      return 1;
    }