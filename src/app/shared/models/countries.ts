export class Country {
  constructor(
    private name: string,
    //used to get capital city
    private iso2: string,
    private cities: string[]
  ) {}
}
