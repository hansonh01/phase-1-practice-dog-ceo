console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded',()=>{
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then((resp)=>resp.json())
    .then((data)=>{
        const dogImageContainer = document.getElementById('dog-image-container');
        data.message.forEach((imgUrl)=>{
            const img = document.createElement('img');
            img.src = imgUrl;
            dogImageContainer.appendChild(img);
        });
    });
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then((resp)=>resp.json())
    .then((data)=>{
        const dogBreeds = document.getElementById('dog-breeds');
        const breeds = data.message;
        const fontColor = {'':'red','red':''};
        for (const breed in breeds){
            const li = document.createElement('li');
            li.textContent = breed;
            dogBreeds.appendChild(li);
            li.addEventListener('click',()=>{
                li.style.color = fontColor[li.style.color];
            });
        };
        const breedDropdown = document.getElementById('breed-dropdown');
        breedDropdown.addEventListener('change',(e)=>{
            const firstLetter = e.target.value;
            const typeOfBreeds = dogBreeds.getElementsByTagName('li');
            for (let i = 0; i < typeOfBreeds.length; i++) {
                const types = typeOfBreeds[i];
                const name = types.textContent;
                if (name.startsWith(firstLetter)){
                    types.style.display = 'block';
                } else {
                    types.style.display = 'none';
                };
            };
        });
    });
});