import type { Matrix } from "d3";



class Ship {
    private pilote: any;

    private _matricule: string | undefined | null;
    private _color: string | number = 'yellow';

    // private _name = '';

    // constructor(name: string) {
    //     this._name = name;
    // }

    constructor(private _name: string) {
        this.pilote = 1;
        this.pilote = "Luke";
        this.pilote = {};
    }

    get name(): string {
        return this._name;
    }

    set color(colorIndex: number) {
        this._color = colorIndex;
    }

    get color(): string | number {
        return this._color;
    }
}

export default Ship;