import React from 'react';

export default function FooterWidgets(props) {
	return (
		<div className="row">
			<div className="col col-3">
				<div className="footer-widget-content">
					<img src="/files/img/comp_3.jpg" alt="Justin Wickenheiser posing in fraternity composite shot." className="footer-image" />
				</div>
			</div>
			<div className="col col-4">
				<div className="footer-widget-content">
					<h3 className="primaryColor">Connect With Me</h3>
					<p>
						<a href="https://www.instagram.com/justinwickenheiser/" target="_blank">
							<span className="fa fa-instagram socialMedia"></span>
						</a>
						<a href="https://www.twitter.com/j_wickenheiser" target="_blank">
							<span className="fa fa-twitter socialMedia"></span>
						</a>
						<a href="https://www.github.com/justinwickenheiser" target="_blank">
							<span className="fa fa-github socialMedia"></span>
						</a>
					</p>
				</div>
			</div>
			<div className="col col-4"><div className="footer-widget-content"></div></div>
		</div>
	);
}