const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apikey="63Lpz85coWqSlSdB9M9fiA==I5FSzTdLTkdiOwZZ";

const options = {
    method:"GET",
    headers:{
  "X-Api-Key":apikey,

},
};
const apiURL ="https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getjoke(){
    
    try{jokeEl.innerText = "Updating....";
     
       btnEl.disabled =true;
       btnEl.innerText ="Loading";
    
      const response= await fetch(apiURL,options)
      const data=await response.json()
      
       jokeEl.innerText = data[0].joke;

       btnEl.disabled =false;
       btnEl.innerText ="Tell Me a Joke";
       
       jokeEl.innerText = data[0].joke;
       }  catch(error) {
          
          jokeEl.innerText = "An error happened, try again latter";
          
          btnEl.disabled =false;
          btnEl.innerText ="Tell Me a Joke";
          console.log(error);
 }
}
btnEl.addEventListener("click",getjoke)
