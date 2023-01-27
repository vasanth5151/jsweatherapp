let api_key = '4825c9cdc8ede6e6d6c3b03f5b938cc3';

getweatherdata = (city) =>{
    let full_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    let weatherget = fetch(full_url);
    
    console.log(city)

    return weatherget.then((response) =>{
       return response.json()
    })
};

function searchweather(){
    const city = document.getElementById('city-name').value;

    getweatherdata(city)
    .then((response) =>{
        showweatherdata(response)
        console.log(response)
    })
    .catch((error) =>{
        alert("Invaild Message")
        console.log(error)
    })
};


showweatherdata = (data)=> {
    document.getElementById('name').innerHTML = data.name;
    document.getElementById('weather-type').innerHTML = data.weather[0].main;
    document.getElementById('temp').innerHTML = data.main.temp;
    document.getElementById('min-temp').innerHTML = data.main.temp_min;
    document.getElementById('max-temp').innerHTML = data.main.temp_max;








}

    // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

