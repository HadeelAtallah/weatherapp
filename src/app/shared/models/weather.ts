//temp
export class Temperature {
  constructor(
    public temp: number,
    public feelsLike: number,
    public tempMax: number,
    public humidity: number
  ) {}
}

//wind data
export class Wind {
  constructor(public speed: number, public deg: number, public gust: number) {}
}

//main weather
export class Weather {
  constructor(public main: string, public description: string) {}
}
