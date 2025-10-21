let btn = document.querySelector(".txt");
let box = document.querySelector(".imgBox");
let url = "https://dog.ceo/api/breeds/image/random";

async function getImg(){
    try{
        box.innerHTML = `<img src="dogLoading.png">`;
        let res = await axios.get(url);
        let image = res.data.message;
        console.log(image);
        box.innerHTML = `<img src="${image}">`
    }catch(err){
        console.log("ERROR -",err);
    }
}

btn.addEventListener("click",getImg);