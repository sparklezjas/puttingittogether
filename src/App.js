import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard name={"Flint Lockwood"}
      age={ 23} 
      occupation={"Inventor"} 
      home={"Swallow Falls"} 
      initialAge={23}/> 
      <PersonCard name={"Tim Lockwood"}
      age={ 49} 
      occupation={"Tackle Shop Owner"} 
      home={"Swallow Falls"} 
      initialAge={49}/>  
      <PersonCard name={"Sam Sparks"}
      age={ 23} 
      occupation={"Meteorologist"} 
      home={"New York City"} 
      initialAge={23}/>  
      <PersonCard name={"Brent McHale"}
      age={ 25} 
      occupation={"Mascot"} 
      home={"Swallow Falls"} 
      initialAge={25}/>  
    </div>
  );
}

export default App;
