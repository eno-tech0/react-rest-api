import React from 'react';
import styled from 'styled-components';
import errorImg from './error.jpg';

const ErrorImg = styled.img`
	width: 100%;
`

const ErrorMessage = () => {
	return (
		<>
			<ErrorImg src={errorImg} alt="error"></ErrorImg>
			<span>Something goes wrong...</span>
		</>
	)
}

export default ErrorMessage;