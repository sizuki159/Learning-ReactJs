//import logo from './logo.svg';
import './App.css';

function Feature() {
  return (
    <div id="feature" className="feature">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" className="feature__image" />
      <h3 className="feature__title">Title</h3>
      <p className="feature__desc">lorem</p>
    </div>
  );
};

function App() {
  return (
    <div>
    <Feature></Feature>
    <Feature></Feature>
    <Feature></Feature>

    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
