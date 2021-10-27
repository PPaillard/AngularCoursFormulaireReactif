export class Article {
  private _reference: string;
  private _nom: string;
  private _description: string;
  private _prix: number;

  constructor(reference: string, nom: string, description:string, prix: number) {
    this._reference = reference
    this._nom = nom
    this._description = description
    this._prix = prix
	}
    /**
     * Getter reference
     * @return {string }
     */
	public get reference(): string  {
		return this._reference;
	}

    /**
     * Getter nom
     * @return {string }
     */
	public get nom(): string  {
		return this._nom;
	}

    /**
     * Getter description
     * @return {string }
     */
	public get description(): string  {
		return this._description;
	}

    /**
     * Getter prix
     * @return {number }
     */
	public get prix(): number  {
		return this._prix;
	}

    /**
     * Setter reference
     * @param {string } value
     */
	public set reference(value: string ) {
		this._reference = value;
	}

    /**
     * Setter nom
     * @param {string } value
     */
	public set nom(value: string ) {
		this._nom = value;
	}

    /**
     * Setter description
     * @param {string } value
     */
	public set description(value: string ) {
		this._description = value;
	}

    /**
     * Setter prix
     * @param {number } value
     */
	public set prix(value: number ) {
		this._prix = value;
	}
}
