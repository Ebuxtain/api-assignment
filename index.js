const characterslist = document.querySelector('.characters-list');
const characterDetails = document.querySelector('.character-details');


// functions to fetch stars wars characters from Api
async function fetchStarWarsCharacters() {
    try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        console.log(data);
        const characters = data.results;


        //display characters with images
        characters.forEach(character => {
            const characterImage =`./images/${character.name}.png`;
            character.image = characterImage;

        });

        displayCharacters(characters);
            
    } catch (error)  {
        console.error('Error fetching data:', error);
    }
}


// dispaly character in the list
function displayCharacters(characters) {
    characterslist.innerHTML ='';
    characters.forEach(character => {
        const characterItem = document.createElement('div');
        characterItem.classList.add('character-item');
        characterItem.innerHTML = `
           <img src="${character.image}" alt="${character.name}">
           <p>${character.name}</p>
        `;
        characterItem.addEventListener('click', ()  => displayCharacterDetails(character));
        characterslist.appendChild(characterItem);
    });
    
}


// display character details
function displayCharacterDetails(character) {
    characterDetails.innerHTML= `
      <h2>${character.name}</h2>
      <p>Gender: ${character.gender}</p>
      <p>Height: ${character.height} cm</P>
    `;
}

//initialize the app by fetching characters
fetchStarWarsCharacters();