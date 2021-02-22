import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';

export default class CharacterPage extends Component {
	gotServ = new GotService();

	state = {
		selectedChar: null,
		error: false,
		loading: true
	}

	componentDidCath() {
		this.setState({error: true})
	}

	onSelectChar = (id) => {
		this.setState({
			selectedChar: id,
		})
	}

	render() {
		const itemList = (
			<ItemList 
			onSelect={this.onSelectChar}
			getData={this.gotServ.getAllCharacters}
			renderItem={(item) => `${item.name} (${item.male})`}/>
		);
		const charList = (
			<ItemDetails 
			itemId={this.state.selectedChar}
			getData={this.gotServ.getCharacter}>
				<Field field='male' label='Gender'/>
				<Field field='born' label='Born'/>
				<Field field='died' label='Died'/>
				<Field field='culture' label='Culture'/>
			</ItemDetails>
		)
		if (this.state.error) {
			return <ErrorMessage/>
		}

		return (
			<RowBlock left={itemList} rigth={charList}/>
		)
	}
} 