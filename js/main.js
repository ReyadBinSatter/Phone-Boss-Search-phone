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
                <div onclick="phoneDetail('${phone.slug}')" class="card">
                    <img src="${phone.image}" class="card-img-top w-50" alt="...">
                    <div class="card-body">
                    <h3 class="card-title">${phone.phone_name}</h3>
                    <h5 class="card-title-1">${phone.brand}</h5>
                    </div>
                </div>
        `
        phoneSearchResult.appendChild(div);
    });
}



const phoneDetail = phoneId =>{
    console.log(phoneId);
}