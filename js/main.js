const searchPhones = () => {
    const searchPhone = document.getElementById('search-field');
    const searchPhoneName = searchPhone.value;
    // clear data
    searchPhone.value = '';

    // load data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhoneName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => phoneResults(data.data.slice(0,10)))

}

const phoneResults = (phones) => {
    const phoneSearchResult = document.getElementById('phone-result');
    phoneSearchResult.textContent = '';
    phones.forEach(phone => {
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
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    if(details.releaseDate==''){
        div.innerHTML = `
    <img src="${details.image}" class="card-img-top w-50 mx-auto" alt="...">
    <div class="card-body mx-auto">
        <h3 class="card-title">${details.name}</h3>
        <h5 class="card-title-1">${details.brand}</h5>
        <p class="card-text"><strong>Chip set :</strong> ${details.mainFeatures.chipSet}</p>
        <p class="card-text"><strong>Display Size :</strong> ${details.mainFeatures.displaySize}</p>
        <p class="card-text"><strong>Memory :</strong> ${details.mainFeatures.memory}</p>
        <h5 class="card-title-1">Others</h5>
        <p class="card-text"><strong>Bluetooth :</strong> ${details.others.Bluetooth}</p>
        <p class="card-text"><strong>GPS :</strong> ${details.others.GPS}</p>
        <p class="card-text"><strong>NFC :</strong> ${details.others.NFC}</p>
        <p class="card-text"><strong>Radio :</strong> ${details.others.Radio}</p>
        <p class="card-text"><strong>USB :</strong> ${details.others.USB}</p>
        <p class="card-text"><strong>WLAN :</strong> ${details.others.WLAN}</p>
        <p class="card-text"><strong>Sensor :</strong> ${details.mainFeatures.sensors}</p>
    </div>
    `;
    }
    else{
        div.innerHTML = `
    <img src="${details.image}" class="card-img-top w-50" alt="...">
    <div class="card-body">
        <h3 class="card-title">${details.name}</h3>
        <h5 class="card-title-1">${details.brand}</h5>
        <p class="card-text"><strong>Release date :</strong> ${details.releaseDate}</p>
        <p class="card-text"><strong>Chip set :</strong> ${details.mainFeatures.chipSet}</p>
        <p class="card-text"><strong>Display Size :</strong> ${details.mainFeatures.displaySize}</p>
        <p class="card-text"><strong>Memory :</strong> ${details.mainFeatures.memory}</p>
        <h5 class="card-title-1">Others</h5>
        <p class="card-text"><strong>Bluetooth :</strong> ${details.others.Bluetooth}</p>
        <p class="card-text"><strong>GPS :</strong> ${details.others.GPS}</p>
        <p class="card-text"><strong>NFC :</strong> ${details.others.NFC}</p>
        <p class="card-text"><strong>Radio :</strong> ${details.others.Radio}</p>
        <p class="card-text"><strong>USB :</strong> ${details.others.USB}</p>
        <p class="card-text"><strong>WLAN :</strong> ${details.others.WLAN}</p>
        <p class="card-text"><strong>Sensor :</strong> ${details.mainFeatures.sensors}</p>
    </div>
    `;
    }
    phoneDetails.appendChild(div);
}