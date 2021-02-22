
export default class GotService {
	constructor() {
		this._apiBase = 'https://www.anapioficeandfire.com/api';
	}

	getResourse = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`)
		}

		return await res.json();
	}

	getAllCharacters = async () => {
		const res = await this.getResourse('/characters?page=5&pageSize=10');
		return res.map(item => this._transformCharacter(item));
	}
	getCharacter = async (id) => {
		const res = await this.getResourse(`/characters/${id}`);
		return this._transformCharacter(res);
	}
	getAllBooks = async () => {
		const res = await this.getResourse('/books?page=1&pageSize=10');
		return res.map(this._transformBook);
	}
	getBook = async (id) => {
		const res = await this.getResourse(`/books/${id}`);
		return this._transformBook(res);
	}
	getAllHouses = async () => {
		const res = await this.getResourse('/houses?page=5&pageSize=10');
		return res.map(this._transformHouse);
	}
	getHouse = async (id) => {
		const res = await this.getResourse(`/houses/${id}`);
		return this._transformHouse(res);
	}

	isSet(data) {
		if (data && data.length >= 1) {
			return data
		} else {
			return 'no info :('
		}
	}

	_transformCharacter = (char) => {
		return {
			name: this.isSet(char.name),
			male: this.isSet(char.gender),
			born: this.isSet(char.born),
			died: this.isSet(char.died),
			culture: this.isSet(char.culture),
			url: char.url
		}
	}
	_transformHouse = (house) => {

		return {
			name: this.isSet(house.name),
			region: this.isSet(house.region),
			words: this.isSet(house.words),
			titles:this.isSet(house.titles),
			overload: this.isSet(house.overload),
			ancestralWeapons: this.isSet(house.ancestralWeapons),
			url: house.url
		}
	}
	_transformBook = (book) => {
		return {
			name: this.isSet(book.name),
			numberOfPages: this.isSet(book.numberOfPages),
			publiser: this.isSet(book.publiser),
			released: this.isSet(book.released),
			url: book.url
		}
	}
};
