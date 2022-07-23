const buttonAll = document.querySelectorAll(".btn");
const ratingId =  document.querySelector("#rating");
const submitButton = document.querySelector("#submit");
const firstBlock = document.querySelector(".first-block");
const secondBlock = document.querySelector(".second-block");



for(var i = 0 ; i < buttonAll.length ; i++){

      buttonAll[i].addEventListener("click", function (){

            var ratingGiven = this.innerText;
            ratingId.innerText = ratingGiven;
      });
}



submitButton.addEventListener("click", function (){

      firstBlock.classList.add("hidden");
      secondBlock.classList.remove("hidden");
});