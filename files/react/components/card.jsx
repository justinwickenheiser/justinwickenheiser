import React from 'react';

export default function Card(props) {
	return (
		<div className="card">
			<h3>{props.heading}</h3>
			<p>
				{props.text}
			</p>
		</div>
	);
}