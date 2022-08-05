export const TaskRow = ({task, toggleTask}) => {
    return (
        <tr>
            <td className="d-flex justify-content-between">
                {task.name}
                <input 
                    className="form-check-input"
                    checked = {task.done}
                    type='checkbox' 
                    onChange={() => toggleTask(task)}
                />
            </td>
        </tr>
    )
}