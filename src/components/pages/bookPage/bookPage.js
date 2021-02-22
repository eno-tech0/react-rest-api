import React, {Component} from 'react';
import ItemList from '../../itemList';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import {withRouter} from 'react-router-dom';

class BookPage extends Component {
	gotServ = new GotService();

	state = {
		error: false,
	}

	componentDidCath() {
		this.setState({error: true})
	}

	render() {

		if (this.state.error) {
			return <ErrorMessage/>
		}

		return (
			<ItemList 
			onSelect={(itemId) => {
				this.props.history.push(itemId)
			}}
			getData={this.gotServ.getAllBooks}
			renderItem={(item) => item.name}/>
		)
	}
} 
export default withRouter(BookPage);