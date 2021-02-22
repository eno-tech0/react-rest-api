import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const DivItemDetails = styled.div`
		border-radius: 0.25rem !important;
		background-color: #fff;
		padding: 25px 25px 15px 25px;
		margin-bottom: 40px;
		width: 100%;
		vertical-align: middle;
		h4 {
			margin-bottom: 20px;
			text-align: center;
		}
`;

const UlGroup = styled.ul`
		display: flex;
		flex-direction: column;
		padding-left: 0;
		margin-bottom: 0;
		li {
			position: relative;
			display: block;
			padding: 0.75rem 1.25rem;
			background-color: #fff;
			border: 1px solid rgba(0, 0, 0, 0.125);
			border-right-width: 0;
			border-left-width: 0;
			border-radius: 0;
			:first-child {
				border-top-width: 0;
			}
			:last-child {
				border-bottom-width: 0;
			}
		}
`;

const SpanBold = styled.span`
		font-weight: bold;
`;

const SpanNull = styled.span`
		color: #fff;
		font-weigth: bold;
		font-size: 24px;
`;

const Field = ({item, field, label}) => {
	return (
		<li className="d-flex justify-content-between">
			<SpanBold>{label}</SpanBold>
			<span>{item[field]}</span>
		</li>
	)
}

export {Field}
const ItemDetails = ({itemId, getData, children}) => {

	const [item, updateItem] = useState(null);

	useEffect(() => {
		updateCardItem();
	}, itemId)

	function updateCardItem() {
		
		if (!itemId) {
			return;
		}

		getData(itemId)
			.then((item) => updateItem(item))
	}

		if (!item) {
			return <SpanNull>Please select item in the list</SpanNull>
		}

		const {name} = item;

      return (
            <DivItemDetails>
               <h4>{name}</h4>
               <UlGroup>
						{
							React.Children.map(children, (child) => {
								return React.cloneElement(child, {item})
							})
						}
               </UlGroup>
            </DivItemDetails>
      );
   }
export default ItemDetails;