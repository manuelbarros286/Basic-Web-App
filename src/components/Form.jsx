import {useState} from "react";
function Form(props){
    const [name, setName] = useState("");
    function handleChange(event){
        console.log(event.target.value);
        setName(event.target.value);
        console.log(name);
    }
    function handleSubmit(event)
    {
        if(name.length >0){
        event.preventDefault();
        props.addTask(name);
        setName("");
        } else{
            alert("Please enter a task");
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo=output">
                    What task are we adding?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit"
                    className="btn btn__primary btn__lg"
            >Add
            </button>
        </form>
    );
}

export default Form;