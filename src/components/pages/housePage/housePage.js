import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';
export default class HousePage extends Component {
	gotServ = new GotService();

	state = {
		selectedHouse: null,
		error: false,
	}

	componentDidCath() {
		this.setState({error: true})
	}

	onSelectHouse = (id) => {
		this.setState({
			selectedHouse: id,
		})
	}

	render() {

		const itemList = (
			<ItemList 
			onSelect={this.onSelectHouse}
			getData={this.gotServ.getAllHouses}
			renderItem={(item) => `${item.name}`}/>
		);
		const HouseList = (
			<ItemDetails 
			itemId={this.state.selectedHouse}
			getData={this.gotServ.getHouse}>
				<Field field='region' label='Region'/>
				<Field field='words' label='Words'/>
				<Field field='titles' label='Titles'/>
				<Field field='overload' label='Overload'/>
				<Field field='ancestralWeapons' label='Ancestral Weapons'/>
			</ItemDetails>
		)
		if (this.state.error) {
			return <ErrorMessage/>
		}

		return (
			<RowBlock left={itemList} rigth={HouseList}/>
		)
	}
} 