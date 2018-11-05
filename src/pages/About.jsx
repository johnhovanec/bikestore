import React from 'react';
import Client from './../Client';

const About = ({match}) => (
	<div className="container filler">
		<h3>About page</h3>
		<p><b>sessionId:</b> {Client.getCookie("sessionId")}</p>
		<p>
			Bacon ipsum dolor amet cillum bresaola pig tri-tip, picanha elit meatball exercitation duis 
			dolore spare ribs veniam enim short loin id. Nostrud biltong in nulla anim commodo pancetta ut 
			buffalo pig ad cillum. Non pancetta bresaola ham hock, prosciutto shank ullamco. Esse et sirloin 
			ribeye spare ribs est pig t-bone venison beef ribs cupim nulla chicken. Laboris shoulder biltong 
			adipisicing, nulla rump meatball ut kielbasa.
			<br />
			Drumstick sausage filet mignon dolore fatback, short loin ea. Ham officia beef ribs non tempor sed. 
			Magna pariatur mollit ut. T-bone picanha occaecat pig rump, bresaola meatloaf et ut tri-tip. Laboris 
			labore strip steak turducken shank. Buffalo drumstick ut excepteur boudin, sirloin officia.
		</p>
	</div>
);

export default About;