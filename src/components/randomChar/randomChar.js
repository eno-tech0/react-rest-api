import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';



const DivRandom = styled.div`
		background-color: #fff;
		padding: 25px 25px 15px 25px;
		margin-bottom: 40px;
		border-radius: 0.25rem;
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

const RandomChar = () => {

	const [char, updateChar] = useState({});
	const [loading, updateLoading] = useState(true);
	const [error, updateError] = useState(false);

	const gotServ = new GotService();

	useEffect(() => {
		updateCardChar();
		let timerId = setInterval(updateCardChar, 5000);
		return () => {
			clearInterval(timerId);
		}
	}, [])

	function updateCardChar() {
		const id = Math.floor(Math.random() * 140 + 25);
		gotServ.getCharacter(id)
			.then(onCharLoaded)
			.catch(onError)
	}	

	function onCharLoaded(char) {
		updateChar(char);
		updateLoading(false);
	}

	function onError() {
		updateLoading(false);
		updateError(true)
	}
		
		const spinner = loading ? <Spinner/> : null;
		const err = error ? <ErrorMessage/> : null;
		const content = !(loading || error) ? <View char={char}/> : null;

		return (
			<DivRandom>
				{spinner}
				{err}
				{content}
			</DivRandom>
		);
	}

const View = ({char}) => {
	const {name, male, born, died, culture} = char;
	return (
		<>
				<h4>Random Character: {name}</h4>
				<UlGroup>
					<li className="d-flex justify-content-between">
						<SpanBold>Gender </SpanBold>
						<span>{male}</span>
					</li>
					<li className="d-flex justify-content-between">
						<SpanBold>Born </SpanBold>
						<span>{born}</span>
					</li>
					<li className="d-flex justify-content-between">
						<SpanBold>Died </SpanBold>
						<span>{died}</span>
					</li>
					<li className="d-flex justify-content-between">
						<SpanBold>Culture </SpanBold>
						<span>{culture}</span>
					</li>
				</UlGroup>
		</>
	)
}
export default RandomChar;