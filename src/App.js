import { useEffect, useState } from 'react';
import './App.css';
import Info from './Info';
import Swal from 'sweetalert2';
import { Ingr } from './Ingr';
import LoaderPage from './Loader/LoaderPage';


function App() {

  const API_ID = '1f0b6d3c';
  const API_KEY = '7cb4d6da6b865e83d85d5f73cfce5590';

  const [mySearch, setMySearch] = useState('');
  const [nutrition, setNutrition] = useState();
  const [wordSubmitted, setWordSubmitted] = useState('');
  const [loader, setLoader] = useState(true);

  const [par, setPar] = useState([])
   
 const getInput = (e) => {
    setMySearch(e.target.value);
  }

  const formSubmit = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
  }
 

  const getNutrition = async (ingr) => {
    const response = await fetch(`https://api.edamam.com/api/nutrition-details?app_id=${API_ID}&app_key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ingr })
    });

    if (response.ok) {    
      let data = await response.json();
      setNutrition(data);
      setLoader(false);
    } else {
      setLoader(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Submit ingredients correctly!"
      });
    }
  }

 
  useEffect(() => {
    if (wordSubmitted !== ''){
      let ingr = wordSubmitted.split(/,(?![|])/);
      getNutrition(ingr)
      setPar(ingr)
    }
  }, [wordSubmitted])

  return (
    <div>
        {
          loader && <LoaderPage/>
        }
    
        <div className='header containerLine'>
        <img className='headerImage' src='https://img.icons8.com/?size=100&id=wv8L54LM9yiu&format=png&color=000000' width='80px' alt='icon'/>
          <a href='https://bobbyhadz.com/blog/react-button-link' target='_blank' rel="noreferrer">
            <button className='btnLink'>Recipes</button>
          </a>
        </div>

        <div className='containerLine container'>
          <h1>Nutrition App</h1>
          <div className='instruction'>
             <p>Please, separate products with comma.</p>
             <img src='https://img.icons8.com/?size=100&id=40018&format=png&color=000000' alt='comma' width='25px'/>
          </div>

          <form className='container-input' onSubmit={ formSubmit }>
            <input type='text' onChange={ getInput } value={mySearch}/>
            <button className='submit' type='submit' onChange={ formSubmit }>Submit</button>
          </form>
        </div>

      <div className='container'>
        <div className='containerLine'>        
          <Ingr par={ par } nutrition={ nutrition }/>
        </div>
        
        <div className='box'>
          <div className='container'>
            <h4>The Nutritional Value</h4>
          </div>
            {      
              nutrition && Object.values(nutrition.totalNutrients).map((item, id) => (
                <Info key={id} 
                label ={item.label}
                quantity={item.quantity}
                unit={item.unit}/>
              ))
            }
        </div>  
      </div> 
    </div>
  );
}

export default App;
