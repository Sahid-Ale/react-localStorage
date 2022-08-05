import {useState} from 'react'


export const TaskCreator = ({creatNewTask}) => {
    // el useState es antes de que se renderice nuestro componente
    const [newTaskName, setNewTaskName] = useState('')
    const handleSubmit = (e) => { // onSubmit recibia un evento que se pasa indirectamente a nuestra funcion
        e.preventDefault();
        creatNewTask(newTaskName)
        setNewTaskName('')
    }

    return (
        <form onSubmit={handleSubmit} className = 'my-2 row'>
            <div className='col-9'>
                <input 
                    value={newTaskName}
                    type="text" 
                    placeholder='Enter a nex task' 
                    onChange={(e) => setNewTaskName(e.target.value)}
                    className = "form-control"

                />
            </div>
            <div className='col-3'>
                <button className='btn btn-primary btn-sm' type='submit'>Save Task</button>
            </div>
        </form>
    )
}