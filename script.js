fetch("data/pokemon.json")
.then(r=>r.json())
.then(data=>{

const grid=document.getElementById("pokemon-grid")
const detail=document.getElementById("pokemon-detail")
const search=document.getElementById("search")

// Homepage
if(grid){

function render(list){

grid.innerHTML=""

list.forEach(p=>{

const card=document.createElement("div")
card.className="card"

card.innerHTML=`
<a href="pokemon.html?name=${p.name}">
<img src="${p.image}">
<h3>${p.name}</h3>
<p>${p.role}</p>
</a>
`

grid.appendChild(card)

})

}

render(data)

search.addEventListener("input",()=>{

const q=search.value.toLowerCase()

const filtered=data.filter(p=>p.name.toLowerCase().includes(q))

render(filtered)

})

}

// Pokemon page
if(detail){

const params=new URLSearchParams(location.search)
const name=params.get("name")

const p=data.find(x=>x.name===name)

if(p){

detail.innerHTML=`
<h1>${p.name}</h1>

<img src="${p.image}" width="200">

<p>Role: ${p.role}</p>

${p.gif ? `<h3>Animation</h3><img src="${p.gif}" width="300">` : ""}

${p.video ? `
<h3>Video</h3>
<video class="video" width="400" controls>
<source src="${p.video}" type="video/mp4">
</video>
` : ""}

`

}

}

})
