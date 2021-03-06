// const h1 = document.querySelector("div.hello:first-child h1");


// function handleTitleClick() {
//   h1.style.color = "blue";
// }

// function handleMouseEnter(){
//   h1.innerText = "Mouse is here";
// }

// function handleMouseLeave(){
//   h1.innerText = "Mouse is gone";
// }

// function handleWindowResize(){
//   document.body.style.backgroundColor = "tomato";
// }

// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);



//const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
//const h1 = document.querySelector("div.hello:first-child h1")

//const superEventHandler = {
//  handleMouseEnter: function (){
//    h1.innerText = "Mouse is here"
//    h1.style.color = colors[0];
//  },

//  handleMouseLeave: function (){
//    h1.innerText = "Mouse is gone"
//    h1.style.color = colors[1];
//  },

//  handleWindowResize: function (){
//    h1.innerText = "You just resized"
//    h1.style.color = colors[2];
//  },

//  handleContextMenu: function (){
//    h1.innerText = "That was a right click"
//    h1.style.color = colors[3];
//  },
  
//};

//h1.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
//h1.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
//window.addEventListener("resize", superEventHandler.handleWindowResize);
//h1.addEventListener("contextmenu", superEventHandler.handleContextMenu);

const h1 = document.querySelector("h1");
const colors = ["#1ABC9C", "#3498DB", "#9B59B6", "#F39C12", "#E74C3C"];
const superEventHandler = {
  mouseenter : function(){
    h1.innerText = "Mouse is here";
    h1.style.color = colors[0];
    },
    mouseleave : function(){
      h1.innerText = "Mouse is gone";
      h1.style.color = colors[1];
  },
  resize : function(){
    h1.innerText = "You just resized";
    h1.style.color = colors[2];
  },
  contextmenu : function(){
    h1.innerText = "That was a right click";
    h1.style.color = colors[3];
},
};
h1.addEventListener("mouseenter", superEventHandler.mouseenter);
// ???????????? ?????? ???????????? ??? ???????????? ?????????
h1.addEventListener("mouseleave", superEventHandler.mouseleave );
// ???????????? ????????? ??? ???????????? ?????????
window.addEventListener("resize", superEventHandler.resize );
// ???????????? ?????? ???????????? ?????? ??? ???????????? ?????????
h1.addEventListener("contextmenu", superEventHandler.contextmenu );
// ????????? ????????? ????????? ??? ????????? ????????? ??? ??? ???????????? ?????????