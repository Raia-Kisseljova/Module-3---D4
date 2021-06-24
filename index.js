
const container = document.querySelector(".row")
//=======================STEP 1=========================

const retrieveBooks = function(){
    fetch("https://striveschool-api.herokuapp.com/books")
    .then(response => response.json())
    .then(createBooks) //End of .then
} //End of RetrieveBooks function


function createBooks( data ) {
        // console.log(data)
        for(let i = 0; i < data.length; i++){
            
            container.innerHTML += `
                <div class="book col-md-3 ${i}"> 
                    <img src="${data[i].img}" class = "img-fluid">
                    <button class="btn btn-primary cart-btn" id = "${i}"> 
                        Add to card 
                    </button>
                </div>`
            
        } //forLoop 

        //  for(let i = 0; i < data.length; i++){
        //     let list = document.querySelector("#cardList")
        //     let newLi = document.createElement("li")
        //     newLi.innerText = data[i].title
        //     list.appendChild("newLi")
        //     }

     
        // let cartButtons = document.querySelectorAll(".btn.btn-primary.cart-btn")
        // for(let i = 0; i < cartButtons.length; i++){
        //     cartButtons.addEventListener("click", createLi())
        // }


    } //function whatever I do with the data


        


retrieveBooks()














// let cartButtons = document.querySelectorAll(".cart-btn")
// for(let i = 0; i < cartButtons.length; i++){
//     cartButtons.addEventListener("click",)
// }


