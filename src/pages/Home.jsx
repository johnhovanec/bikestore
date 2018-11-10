import React from 'react';
import Client from './../Client';
import history from './../history';

class Home extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    products: [],
  }
}

  componentDidMount() {
    console.log("Component mounted and now calling search for initial populate.");
    Client.search('', (products) => {
      this.setState({
        products: products.slice(0, 6).filter(p => p.homePageIndex > 0),
      });
    });
  }

  render() {
  return (
    <div className="container text-center mt-5">
      <h4>Home page</h4>
      <div className="filler text-left mt-3">
      <p>
        Bacon ipsum dolor amet cillum bresaola pig tri-tip, picanha elit meatball exercitation duis 
        dolore spare ribs veniam enim short loin id. Nostrud biltong in nulla anim commodo pancetta ut 
        buffalo pig ad cillum. Non pancetta bresaola ham hock, prosciutto shank ullamco. Esse et sirloin 
        ribeye spare ribs est pig t-bone venison beef ribs cupim nulla chicken. Laboris shoulder biltong 
        adipisicing, nulla rump meatball ut kielbasa.
      </p>            
        <div>
          <div className="d-flex justify-content-center">
            <div className="p-2 homeCard">
              <img src="/img/fatbike.jpg" width="" />
            </div>
          </div>
        </div>  
    </div>
    </div>
  );
  }
}
export default Home;


