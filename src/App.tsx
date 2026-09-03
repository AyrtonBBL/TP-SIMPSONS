import Avatar from './Avatar';
import './App.css';

const bart = {

 firstName: "Bart",
 lastName: "Simpsons",
 Image: "https://www.stickees.com/files/cartoon/the-simpsons/2241-bart-simpson-scare.png"
};

const homer = {

 firstName: "Homer",
 lastName: "Simpsons",
 Image: "https://www.stickees.com/files/cartoon/the-simpsons/2247-homer-simpson-beer.png"
};

function App() {
 return (
  <section>
 <Avatar
 firstName={bart.firstName}
 lastName={bart.lastName}
 image={bart.Image}
 />
 <Avatar
 firstName={homer.firstName}
 lastName={homer.lastName}
 image={homer.Image}
 />
 </section>
 );
}


export default App;
