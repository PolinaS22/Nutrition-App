export const Ingr = ( { par, nutrition } ) => {
    return (
        <div className="productsCont">
            <div className="innerContProducts">
                <h4>Products:</h4>
                <div>
                    {par.map((element, idx) => (
                        <p className="ingredient" key={ idx }>
                            <img src='https://img.icons8.com/?size=100&id=MkFMsOJRAJYW&format=png&color=000000' width='20px' alt='icon'/>
                            { element }
                            </p>
                    ))}
                </div>  
                <div className='calories'>
                    {
                    nutrition && <p>{ nutrition.calories } kcal</p>
                    }
                </div>    
            </div>  
        </div>
    )
}