import React from 'react';

export default function CallToAction(props) {
	return (
		<div className="callToAction">
			<h3>{props.heading}</h3>
			<a href={props.href} className="btn btn-primary" target="_blank">{props.button}</a>
		</div>
	);
}