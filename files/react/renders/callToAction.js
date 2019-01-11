import React from 'react';
import ReactDOM from 'react-dom';
import CallToAction from '../components/callToAction.jsx';

ReactDOM.render(
	<CallToAction heading={data.callToAction.heading} href={data.callToAction.href} button={data.callToAction.button} />,
	document.getElementById('callToAction-container')
);