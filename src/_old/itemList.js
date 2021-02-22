import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const DivList = styled.div`
		border-radius: 0.25rem;
`;

const UlGroup = styled.ul`
		display: flex;
		flex-direction: column;
		padding-left: 0;
		margin-bottom: 15px;
		li {
			position: relative;
			display: block;
			padding: 0.75rem 1.25rem;
			background-color: #fff;
			border: 1px solid rgba(0, 0, 0, 0.125);
			border-right-width: 0;
			border-left-width: 0;
			border-radius: 0;
			cursor: pointer;
			:first-child {
				border-top-width: 0;
			}
			:last-child {
				border-bottom-width: 0;
			}
			:hover {
				background-color: #1e3654;
				color: #fff;
			}
		}
`;


export default class ItemList extends Component {

	state = {
		itemList: null,
		error: false
	}
	
	componentDidCatch() {
		this.setState({error: true})
	}

	componentDidMount() {
		const {getData} = this.props;

		getData()
			.then(itemList => {
				this.setState({itemList})
			})
	}

	renderItems = (arr) => {

		return arr.map((item) => {
			const index = item.url.slice(item.url.lastIndexOf('/') + 1);
			const label = this.props.renderItem(item);
			
			return (
				<li 
				className="list-group-item" 
				key={item.url}
				onClick={() => {this.props.onSelect(index)}}>
					{label}
				</li>
			)
		})
	}

   render() {

		const {itemList, error} = this.state;
		if(!itemList) {
			return <Spinner/>
		}
		if(error) {
			return <ErrorMessage/>
		}

		const items = this.renderItems(itemList);

      return ( 
				<DivList>
					<UlGroup>
						{items}
					</UlGroup>
				</DivList>
      );
   }
}