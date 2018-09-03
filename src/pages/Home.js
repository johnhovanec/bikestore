import React from 'react';
import Client from './../Client';

const Home = () => (
  <div>
    <h3>Home page</h3>
    <p><b>sessionId:</b> {Client.getCookie("sessionId")}</p>
    <p>
      Bacon ipsum dolor amet cillum bresaola pig tri-tip, picanha elit meatball exercitation duis 
      dolore spare ribs veniam enim short loin id. Nostrud biltong in nulla anim commodo pancetta ut 
      buffalo pig ad cillum. Non pancetta bresaola ham hock, prosciutto shank ullamco. Esse et sirloin 
      ribeye spare ribs est pig t-bone venison beef ribs cupim nulla chicken. Laboris shoulder biltong 
      adipisicing, nulla rump meatball ut kielbasa.
    </p>
  </div>
);


export default Home;