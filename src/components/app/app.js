import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import BtnToggleRandom from '../btnToggleRandom';
import NotFound from '../notFound';
import CharacterPage from '../pages/chacterPage';
import BookPage from '../pages/bookPage';
import HousePage from '../pages/housePage';
import BooksItem from '../pages/pageItems/booksItem';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './app.css';


export default class App extends Component {

	state = {
		randomVisible: true,
	}

	onToggleRandomVisible = () => {
		this.setState(({randomVisible}) => ({
			randomVisible: !randomVisible,
		}))
	}

	render() {
		const {randomVisible} = this.state;
		const charRandom = randomVisible ? <RandomChar/> : null;
		return (
			<div className='app'>
			<Router>
				<Container>
					<Header />
				</Container>
				<Container>
						<Switch>
							<Route path='/' exact component={() => {
								return (
									<Row>
										<Col lg={{size: 5, offset: 0}}>
											{charRandom}
											<BtnToggleRandom onToogleRandom={this.onToggleRandomVisible}/>
										</Col>
									</Row>	
								)
							}}/>
							<Route path='/characters' exact component={CharacterPage}/>
							<Route path='/houses' exact component={HousePage}/>
							<Route path='/books' exact component={BookPage}/>
							<Route path='/books/:id' render={
								({match}) => {
									const {id} = match.params;
									return <BooksItem bookId={id}/>
								}
							}/>
							<Route component={NotFound}/>
						</Switch>
				</Container>
			</Router>
			</div>
		);
	}

};
