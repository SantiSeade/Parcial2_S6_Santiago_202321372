export class Aerolinea {
    id: string;
    airlineName: string;
    country: string;
    city: string;
    address: string;
    identityColor: string;
    slogan: string;

    constructor(
        id: string,
        airlineName: string,
        country: string,
        city: string,
        address: string,
        identityColor: string,
        slogan: string
    ) {
        this.id = id;
        this.airlineName = airlineName;
        this.country = country;
        this.city = city;
        this.address = address;
        this.identityColor = identityColor;
        this.slogan = slogan;
    }
}
