import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <Button 
      size = "large"      
      onClick = {()=>{console.log('Hello world')}} variant="contained" color="secondary">
        Secondary
      </Button>
    </div>
  );
}

export default App;
