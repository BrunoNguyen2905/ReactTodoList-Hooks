import React, {useState} from 'react'
import shortid from 'shortid'

const AddForm = ({addTodo, id}) => {
    const [content, setContent] = useState('');
    const handleChange = (e) => {
        setContent(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        id = shortid.generate();
        addTodo(content, id);
        setContent('')
        // console.log(content)

    }
    return (
       <form onSubmit={handleSubmit}>
            <label>Add new Todo: </label>
            <input type="text" onChange={handleChange} value={content}/>
       </form>
    )
}

export default AddForm
