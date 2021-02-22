import React, {Component} from 'react';
import GotService from '../../../services/gotService';
import ItemDetails, {Field} from '../../itemDetails';

export default class BooksItem extends Component {
	gotServ = new GotService();

	render() {
		return(
			<div className='d-flex justify-content-between'>
				<ItemDetails 
				itemId={this.props.bookId}
				getData={this.gotServ.getBook}>
					<Field field='numberOfPages' label='Pages'/>
					<Field field='publiser' label='Publiser'/>
					<Field field='released' label='Released'/>
				</ItemDetails>
				<img src={process.env.PUBLIC_URL + '/img/book.jpg'} alt='book' width='30%' overflow='hidden'></img>
			</div>
		)
	}
}