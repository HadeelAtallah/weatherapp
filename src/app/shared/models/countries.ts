export class Country {
  constructor(
    public name: string,
    //used to get capital city
    public iso2: string,
    public cities: string[]
  ) {}
}
