import { useState } from "react"

function SearchBar (){
    const [term,setTerm] = useState ('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('Necesito decirle al componente padre sobre los datos')
        onSubmit(term)
    }
    const handleChange = (event) => {
        console.log(event.target.value)
    }
    const handleClick = () => {
        onSubmit(term)
    }
    return(
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="">Picture Search</label>
            <input onChange={handleChange}value={term}/>
           </form>
           <button onClick={handleClick}>Click me!</button>

        </div>
    )
}

export default SearchBar