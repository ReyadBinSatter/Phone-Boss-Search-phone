const searchPhones = () => {
    const searchPhone = document.getElementById('search-field');
    const searchPhoneName = searchPhone.value;
    // clear data
    searchPhone.value = '';

    // load data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhoneName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => phoneResults(data.data))

}

const phoneResults = (phones) => {
    const phoneSearchResult = document.getElementById('phone-result');
    phoneSearchResult.textContent = '';
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                <div  class="card">
                    <img src="${phone.image}" class="card-img-top w-50" alt="...">
                    <div class="card-body">
                    <h3 class="card-title">${phone.phone_name}</h3>
                    <h5 class="card-title-1">${phone.brand}</h5>
                    </div>
                    <button onclick="phoneDetail('${phone.slug}')" class="btn btn-primary" type="button"
                    id="button-card">Details</button>
                </div>
        `
        phoneSearchResult.appendChild(div);
    });
}



const phoneDetail = phoneId =>{
    console.log(phoneId);
     const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
     console.log(url);
     fetch(url)
        .then(res => res.json())
        .then(data => singlePhoneDetails(data.data));
}


const singlePhoneDetails = details =>{
    console.log(details);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${details.image}" class="card-img-top w-50" alt="...">
    <div class="card-body">
        <h3 class="card-title">${details.name}</h3>
        <h5 class="card-title-1">${details.brand}</h5>
        <p class="card-text">Release date : ${details.releaseDate}</p>
        <p class="card-text">Chip set : ${details.mainFeatures.chipSet}</p>
        <p class="card-text">Display Size : ${details.mainFeatures.displaySize}</p>
        <p class="card-text">Memory : ${details.mainFeatures.memory}</p>
        <h5 class="card-title-1">Others</h5>
        <p class="card-text">Bluetooth : ${details.other.Bluetooth}</p>
        <p class="card-text">GPS : ${details.other.GPS}</p>
        <p class="card-text">NFC : ${details.other.NFC}</p>
        <p class="card-text">Radio : ${details.other.Radio}</p>
        <p class="card-text">USB : ${details.other.USB}</p>
        <p class="card-text">WLAN : ${details.other.WLAN}</p>
    </div>
    `;
    phoneDetails.appendChild(div);
}