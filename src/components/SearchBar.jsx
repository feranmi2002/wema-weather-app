export default function SearchBar({input, setInput, search, loadState})
    {return(
        <input className = "city-search"
        type = "text"
        placeholder = "Enter City Name.."
        name = "query"
        value = {input}
        onChange = {(event) =>  setInput(event.target.value)}
        onKeyPress= {search}
        disabled = {loadState}>
        </input>
    )}