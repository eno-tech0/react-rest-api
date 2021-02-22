import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const DIV404 = styled.h1`
	margin: auto;
	text-align: center;
	h1 {
		font-size: 46px;
		color: #fff;
	}
`;
const Button = styled.button`
	background-color: #1e3654;
	color: #fff;
	font-size: 26px;
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
	:a {
		text-decoration: none;
		color: #fff;
	}
`;

const NotFound = () => {
	return (
		<DIV404>
			<h1>404 NOT FOUND</h1>
			<Button>
				<Link to='/'>Back to HOME</Link>
			</Button>
		</DIV404>
	)
}

export default NotFound;