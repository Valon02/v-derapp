//Variabler
const button = document.querySelector('.button');
let cityName;
let tempElement = document.getElementsByClassName('temp');
let body = document.body;

// create elements for data input
let city = document.createElement('h1');
let weather = document.createElement('div');
let temp = document.createElement('div');
let sunrise = document.createElement('div');
let sunset = document.createElement('div');
let humidity = document.createElement('div');
let wind = document.createElement('div');
let date = document.createElement('div');


// add id:s
temp.setAttribute('id', 'styleTemp');
city.setAttribute('id', 'styleCity');

//setInterval(returnText, )

function updateWeather() {
    // fetching api data
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=b7f54065b845de9e09800599d822d2d7&units=metric'
    )
        .then((response) => response.json())
        .then((data) => {
            // console log all data
            console.log(data);
            // create variables for specific data
            let fetchDescription = data['weather']['0']['description'];
            let fetchTemp = data['main']['temp'];
            let fetchHumidity = data['main']['humidity']
            let fetchSunrise = data['sys']['sunrise']
            let fetchSunset = data['sys']['sunset']
            let fetchWind = data['wind']['speed'];
            let fetchTimezone = data['timezone'];
            //let time = data['calctime']

            // console log fetched data
            console.log('description: ' + fetchDescription)
            console.log('temp: ' + fetchTemp + ' °C');
            console.log('fetchHumidity: ' + fetchHumidity)
            console.log('Wind speed: ' + fetchWind + ' m/s')
            console.log(fetchSunrise)
            console.log(fetchSunset)

            //write data in browser
            //div.innerText = 'This is a div!' + wind;
            city.innerText = cityName;
            weather.innerText = fetchDescription;
            temp.innerText = fetchTemp + ' °C';
            humidity.innerText = fetchHumidity;
            sunrise.innerText = fetchSunrise;
            sunset.innerText = fetchSunset;
            wind.innerText = fetchWind + ' m/s';

            function myTimer() {
                let time = Date.now();
                let timezone = time + (fetchTimezone * 1000); // gör om timezone i s till ms
                let dateDate = new Date(timezone);
                //date.innerText = dateDate.toISOString();
                date.innerText = dateDate.getDate() + " " + (dateDate.getHours() - 1) + ":" + dateDate.getMinutes() + ":" + dateDate.getSeconds();

            }
            setInterval(myTimer, 1000);
        })
}
    
function returnText() {
                let input = document.getElementById("insertCity").value;
                cityName = input;
                console.log(cityName)
                updateWeather();
                setInterval(updateWeather, 60000) //1 800000 = 30 min
            };
        





button.addEventListener('click', function () {
    console.log('you klicked me!');


});

// append all 
body.append(city, weather, temp, humidity, sunrise, sunset, wind, date);