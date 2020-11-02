import React from 'react'; 

export default function Form(props) { 
    return ( 
        <div className = 'container'>
           
           <form>
            <div class="form-group">
                <label htmlFor="search"><h3>Search Books</h3></label>
                <input 
                    onChange={props.handleInputChange}
                    value={props.search}
                    type="text" 
                    className="form-control" 
                    id="search" 
                    placeholder='Enter a book.'
                    aria-describedby="searchHelp" />
                <button type="submit" className="btn btn-primary" onClick={props.handleForSubmit}> Submit </button>
            </div>
            </form>
        </div>
    )
}