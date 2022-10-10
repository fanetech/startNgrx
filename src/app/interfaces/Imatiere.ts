import { Detail } from "../models/detail";

export interface Matiere {
    id: Number;
    libelle: String;
    coefficient: Number;
    detail: Detail[]
}