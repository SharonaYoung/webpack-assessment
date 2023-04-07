const display = document.querySelector('#display');

// api call
export async function numbers() {
  try{
    const res = await fetch('http://numbersapi.com/random/trivia');
    const data = await res.text();
    console.log(data);
    display.innerHTML=data;
  }
  catch(error){
    console.log(error);
  }
}

export function numbersCall(event){
  event.preventDefault();
  console.log("submit clicked");
  numbers();
};