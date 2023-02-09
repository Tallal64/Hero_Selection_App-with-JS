const RandomHeroBtnDiv = document.getElementById('Randomherobtn')
const SearchBtnDiv = document.getElementById('Searchbtn')
const heroimgDiv = document.getElementById('heroimg')
const inputDiv = document.getElementById('input')
const ApiUrl = "https://superheroapi.com/api.php/615026290385060/"





// *** This is for Random selection 
const getherofunction = (id) => {
    fetch(`${ApiUrl}/${id}`)
        .then(Response => Response.json())
        .then(json => {
            const img = json.image.url
            console.log(json)

            const heroname = `<h2>${json.name}<h2/>`
            heroimgDiv.innerHTML = `${heroname} <img src="${img}">`
        })
}





// *** This is for Searching a hero 
const SearchFunction = (name) => {
    console.log(inputDiv.value)

    fetch(`${ApiUrl}/search/${name}`)
        .then(Response => Response.json())
        .then(json => {
            const hero = json.results[0]
            console.log(json)

            const heroname = `<h2>${inputDiv.value}<h2/>`
            heroimgDiv.innerHTML = `${heroname} <img src="${hero.image.url}">`
        })
}





// *** This function will select random hero as id return to 'getherofunction()' 
const Clickhero = () => {
    HeroNumber = 731
    SelectedHero = Math.floor(Math.random() * HeroNumber) + 1
    return SelectedHero
}





// *** This function will run when you click on 'randombtn' 
RandomHeroBtnDiv.onclick = () => {
    getherofunction(Clickhero())
    inputDiv.value = ""
}





// *** This function will run when you click on 'searchbtn' 
SearchBtnDiv.onclick = () => {
    SearchFunction(inputDiv.value)
}