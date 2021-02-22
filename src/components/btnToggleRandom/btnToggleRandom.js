import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color: #1e3654;
	color: #fff;
	font-size: 16px;
	text-align: center;
	padding: 6px 15px;
	border-radius: 6px;
	border: 1px solid rgba(255, 255, 255, 0.5);
	coursor: pointer;
	margin-bottom: 30px;
	:hover {
		background-color: #fff;
		color: #000;
		border: 1px solid #1e3654;
	}
`


export default class BtnToggleRandom extends React.Component {

	onToggleRandomVisible = () => {
		this.props.onToogleRandom();
	}
	render() {
		return (
			<Button onClick={this.onToggleRandomVisible}>Toggle Random Char</Button>
		)
	}

}
