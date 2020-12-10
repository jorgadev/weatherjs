class Weather {
  constructor(city) {
    this.apiKey = "7520b59019465820b55674f5f30bc87d";
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change the weather location
  changeLocation(city) {
    this.city = city;
  }
}
