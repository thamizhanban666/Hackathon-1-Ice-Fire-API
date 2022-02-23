const myFetchall = async () => {
   try {
      let response = await fetch(
         `https://www.anapioficeandfire.com/api/books?pageSize=50`
      );
      return await response.json();
   }
   catch (err) {
      console.log(error)
   }
};

const myFetchChar = async (c) => {  
   try {
      let response = await fetch(c)
      return await response.json();
   }
   catch (error) {
      console.log(error)
   }
};

let showCharacter = (c) => {
   let mBody = document.getElementById("modal-body");   
   let nameArr = [];
   let i = 0;
   c.map((e) => {     
      let n = e.slice(49);
      myFetchChar(`https://www.anapioficeandfire.com/api/characters/${n}`)
         .then((charObj) => {
            let name = charObj.name;
            if (name.length > 0) {
               i++;
               nameArr.push(`${i}.  ${name}`);
            }
         })
   })

   setTimeout(() => {
      mBody.innerHTML = nameArr.join(`<br>`);
   }, 1000);


}

let parentDiv = document.createElement("div");
parentDiv.classList.add("row","text-center","mx-2","my-2","text-light","bg-primary","p-div");
document.body.appendChild(parentDiv);

let childDiv = document.createElement("div");
childDiv.classList.add("row","text-center","mx-2","my-2","text-dark");
document.body.appendChild(childDiv)

let div1 = document.createElement("div");
div1.classList.add("col-1","fw-bold","border","border-light","py-4","fs-4")
div1.innerText = "S.No";
parentDiv.appendChild(div1);

let div2 = document.createElement("div");
div2.classList.add("col-2","fw-bold","border","border-light","py-4","fs-5")
div2.innerText = "NAME";
parentDiv.appendChild(div2);

let divimg = document.createElement("div");
divimg.classList.add("col-1","fw-bold","border","border-light","py-4","fs-5")
divimg.innerText = "Img";
parentDiv.appendChild(divimg);

let div3 = document.createElement("div");
div3.classList.add("col-2","fw-bold","border","border-light","py-4","fs-5")
div3.innerText = "ISBN";
parentDiv.appendChild(div3);

let div4 = document.createElement("div");
div4.classList.add("col-1","fw-bold","border","border-light","py-3","fs-5")
div4.innerText = "NO. OF PAGES";
parentDiv.appendChild(div4);

let div5 = document.createElement("div");
div5.classList.add("col-2","fw-bold","border","border-light","py-4","fs-5")
div5.innerText = "AUTHORS";
parentDiv.appendChild(div5);

let div6 = document.createElement("div");
div6.classList.add("col-2","fw-bold","border","border-light","py-3","fs-5")
div6.innerHTML = "PUBLISHER & RELEASED DATE";
parentDiv.appendChild(div6);

let div7 = document.createElement("div");
div7.classList.add("col-1","fw-bold","border","border-light","py-4","px-0","fs-6")
div7.innerText = "CHARACTERS";
parentDiv.appendChild(div7);

myFetchall()
.then((arrobj) => {
   arrobj.map((e, i) => { 
      let cDiv = document.createElement("div");
      cDiv.classList.add("row","border","border-primary","bg-light","mx-1","my-2","div-hover");
      childDiv.appendChild(cDiv)

      let d1 = document.createElement("div");
      d1.classList.add("col-1", "fw-bold", "my-auto", "fs-5");
      d1.innerText = i+1;
      cDiv.appendChild(d1);

      let d2 = document.createElement("div");
      d2.classList.add("col-2", "fw-bold", "my-auto", "fs-6");
      d2.innerText = e.name;
      cDiv.appendChild(d2);

      let dimg = document.createElement("div");
      dimg.classList.add("col-1", "fw-bold","my-1", "fs-6","img");
      let img = document.createElement("img");
      img.classList.add()
      img.setAttribute("src", `./img${i+1}.jpg`);
      img.setAttribute("style","width:100%")
      dimg.appendChild(img);
      cDiv.appendChild(dimg);

      let d3 = document.createElement("div");
      d3.classList.add("col-2", "fw-bold", "my-auto", "fs-6");
      d3.innerText = e.isbn;
      cDiv.appendChild(d3);

      let d4 = document.createElement("div");
      d4.classList.add("col-1", "fw-bold", "my-auto", "fs-6");
      d4.innerText = e.numberOfPages;
      cDiv.appendChild(d4);

      let d5 = document.createElement("div");
      d5.classList.add("col-2", "fw-bold", "my-auto", "fs-6");
      d5.innerText = e.authors;
      cDiv.appendChild(d5);

      let d6 = document.createElement("div");
      d6.classList.add("col-2", "fw-bold", "my-auto", "fs-6");
      d6.innerHTML = `${e.publisher} <br> ${e.released.slice(0,10)}`
      cDiv.appendChild(d6);

      let d7 = document.createElement("button");
      d7.classList.add("col-1", "fw-bold","px-auto","mx-auto", "my-auto", "fs-6","btn","btn-sm","btn-outline-success","show-btn");
      d7.setAttribute("style", "width:4rem");
      d7.setAttribute("data-bs-toggle","modal")
      d7.setAttribute("data-bs-target","#cModal")
      d7.innerText = "show"         
      cDiv.appendChild(d7);

      d7.addEventListener("click", () => {
         showCharacter(e.characters)
      })
   })      
})

let searchBar = document.getElementById("searchBar");
let searchBtn = document.getElementById("searchBtn");
let searchWikiBtn = document.getElementById("searchWikiBtn")
let link = "https://en.wikipedia.org/wiki/";

onchange = () => {
   if (searchBar.value.length > 0) {
      window.find(searchBar.value)
   }
}

searchWikiBtn.addEventListener("click", () => {
    if (searchBar.value.length > 0) {
      location.href = link + searchBar.value;
   }
})

