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

const phoneResults = (phones) =>{
    const phoneSearchResult = document.getElementById('phone-result');
    phones.forEach(phone => {
        //console.log(phone);

    });
}