export interface IRescue {
    Abbreviation: string;
    AnimalName: string;
    AnimalId: number;
    ClassificationName: string;
    ConservationStatusName: string;
    CreatedAt: string;
    Fields: string;
    IsApproved: boolean;
    ScientificName: string;
    id: number;
}

export interface IAddress {
    Canton: string;
    Exacta: string;
    Distrito: string;
    Provincia: string;
}
