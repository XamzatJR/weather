export class WeatherAPI {
    static getCurrentWeather(city) {
        fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=78a188848cae89535c07835d406e402a`)
    }
}