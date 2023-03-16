export interface IDistrict {
  Id: number;
  District: string;
}

export interface ICanton {
  Canton: string;
  Districts: IDistrict[];
}

export interface IProvince {
  Province: string;
  Cantons: ICanton[];
}
