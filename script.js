const myFetchall = async () => {
  let response = await fetch(
    `https://www.anapioficeandfire.com/api/books?pageSize=50`
  );
  return await response.json();
};

const myFetchChar = async (c) => {     //console.log(`${c}`);
  let response = await fetch(c)
  return await response.json();
};

let parentDiv = document.createElement("div");
parentDiv.classList.add("row","text-center","mx-2","my-2","text-light","bg-primary");
document.body.appendChild(parentDiv);

let childDiv = document.createElement("div");
childDiv.classList.add("row","text-center","mx-2","my-2","text-dark");
document.body.appendChild(childDiv)

let div1 = document.createElement("div");
div1.classList.add("col-1","fw-bold","border","border-dark","py-4","fs-4")
div1.innerText = "S.No";
parentDiv.appendChild(div1);

let div2 = document.createElement("div");
div2.classList.add("col-2","fw-bold","border","border-dark","py-4","fs-5")
div2.innerText = "NAME";
parentDiv.appendChild(div2);

let div3 = document.createElement("div");
div3.classList.add("col-2","fw-bold","border","border-dark","py-4","fs-5")
div3.innerText = "ISBN";
parentDiv.appendChild(div3);

let div4 = document.createElement("div");
div4.classList.add("col-1","fw-bold","border","border-dark","py-3","fs-5")
div4.innerText = "NO. OF PAGES";
parentDiv.appendChild(div4);

let div5 = document.createElement("div");
div5.classList.add("col-2","fw-bold","border","border-dark","py-4","fs-5")
div5.innerText = "AUTHORS";
parentDiv.appendChild(div5);

let div6 = document.createElement("div");
div6.classList.add("col-2","fw-bold","border","border-dark","py-3","fs-5")
div6.innerHTML = "PUBLISHER & RELEASED DATE";
parentDiv.appendChild(div6);

let div7 = document.createElement("div");
div7.classList.add("col-2","fw-bold","border","border-dark","py-4","fs-5")
div7.innerText = "CHARACTERS";
parentDiv.appendChild(div7);

   myFetchall()
   .then((arrobj) => {
      arrobj.map((e,i) => { 
         let d1 = document.createElement("div");
         d1.classList.add("col-1", "fw-bold", "border", "border-dark", "py-4", "fs-5");
         d1.innerText = i+1;
         childDiv.appendChild(d1);

         let d2 = document.createElement("div");
         d2.classList.add("col-2", "fw-bold", "border", "border-dark", "py-4", "fs-6");
         d2.innerText = e.name;
         childDiv.appendChild(d2);

         let d3 = document.createElement("div");
         d3.classList.add("col-2", "fw-bold", "border", "border-dark", "py-4", "fs-6");
         d3.innerText = e.isbn;
         childDiv.appendChild(d3);

         let d4 = document.createElement("div");
         d4.classList.add("col-1", "fw-bold", "border", "border-dark", "py-4", "fs-6");
         d4.innerText = e.numberOfPages;
         childDiv.appendChild(d4);

         let d5 = document.createElement("div");
         d5.classList.add("col-2", "fw-bold", "border", "border-dark", "py-4", "fs-6");
         d5.innerText = e.authors;
         childDiv.appendChild(d5);

         let d6 = document.createElement("div");
         d6.classList.add("col-2", "fw-bold", "border", "border-dark", "py-3", "fs-6");
         d6.innerHTML = `${e.publisher} <br> ${e.released.slice(0,10)}`
         childDiv.appendChild(d6);

         let d7 = document.createElement("div");
         d7.classList.add("col-2", "fw-bold", "border", "border-dark", "py-4", "fs-6");

        
         // let dummy = async () => {

            let str;
            let charArr = [];
           
            // e["characters"].map((c) => {
            

            for (let j = 0; j < 2; j++) {
               if (e.characters[j] == undefined) { continue; }
               else {
                  // console.log(e.characters[j]);
                  myFetchChar(e.characters[j])
                     .then((charObj) => {
                        // if (charObj.name == "") { }
                        // else {
                        // console.log(charObj.name)
                        str = charObj.name;
                        charArr.push(str)
                        // }
                     })
               }
            }
         
            // })
            // debugger;
            // console.log(str)
            // console.log(charArr);
            // let html = "";
         
            //    for(var x=0; x < charArr.length; x++){
            //       html += charArr[x];   // Populate string with array values
            //    }
            //    // document.body.innerHTML = html; // Append string only once
            // return await charArr;
        
         // }
         console.log(str)
         console.log(charArr)
         d7.innerText = charArr;
         // d7.textContent = str
         childDiv.appendChild(d7);
           
      })
      
   })

let searchBar = document.getElementById("searchBar");
let searchBtn = document.getElementById("searchBtn");
let searchWikiBtn = document.getElementById("searchWikiBtn")
let link = "https://en.wikipedia.org/wiki/";

// searchBtn.addEventListener("click", () => {
onchange = () => {
   if (searchBar.value.length > 0) {
      window.find(searchBar.value)
   }
}
// })

searchWikiBtn.addEventListener("click", () => {
    if (searchBar.value.length > 0) {
      location.href = link + searchBar.value;
   }
})






