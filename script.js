fetch("data/pokemon.json")
.then(res => res.json())
.then(data => {

  const container = document.getElementById("pokemon-list")

  data.forEach(p => {

    const card = document.createElement("div")
    card.className = "card"

    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.role}</p>
    `

    container.appendChild(card)

  })

})
