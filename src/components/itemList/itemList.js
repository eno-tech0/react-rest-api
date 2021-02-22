import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';

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


const ItemList = ({getData, renderItem, onSelect}) => {
	const [itemList, updateItemList] = useState([]);
	
	useEffect(() => {
		getData()
			.then(data => {
				updateItemList(data)
			})
	}, [])

	function renderItems(arr) {

		return arr.map((item) => {
			const index = item.url.slice(item.url.lastIndexOf('/') + 1);
			const label = renderItem(item);
			
			return (
				<li 
				className="list-group-item" 
				key={item.url}
				onClick={() => {onSelect(index)}}>
					{label}
				</li>
			)
		})
	}

		if(!itemList) {
			return <Spinner/>
		}

		const items = renderItems(itemList);

      return ( 
				<DivList>
					<UlGroup>
						{items}
					</UlGroup>
				</DivList>
      );
}
export default ItemList;