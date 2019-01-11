import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/card.jsx';

for (var i = 0; i < data.cards.length; i++) {
	ReactDOM.render(
		<Card heading={data.cards[i].heading} text={data.cards[i].text} />,
		document.getElementById('card-container-'+i)
	);
}