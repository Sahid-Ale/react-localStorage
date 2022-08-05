export const VisibilityControl = ({ setShowCompleted, CleanTask, isChecked }) => {
    
    const handleDelete = () => {
        if(window.confirm('¿Estás seguro de querer eliminar las tareas completadas?')){
            CleanTask()
        }
    }
    
    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2">
            <div className="form-check form-switch">
                <input 
                    className="form-check-input"
                    checked = {isChecked}
                    type={'checkbox'} 
                    onChange = {e => setShowCompleted(e.target.checked)}
                    
                /> 
                <label>Show Task Done</label>
            </div>

            <button onClick={handleDelete} className = 'btn btn-danger btn-sm'>
                Clear
            </button>
        </div>
    )
}