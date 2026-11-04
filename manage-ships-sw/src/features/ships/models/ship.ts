export interface Ship {
    id: number;
    matricule: string;
    size: number;
}

export type AddShip = Omit<Ship, 'id'>

export type UpdateShip = Pick<Ship, 'id'> & Partial<AddShip>

// Omit
export type Ships = Ship[];