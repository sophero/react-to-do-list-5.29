class ToDo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }

        this.addToList = this.addToList.bind(this);
    }

    render() {

        let taskList = this.state.list.map(function(task, index) {
            return(
                <li className="task-list-item" key={index}>
                    <div className="task-list-item__descr">
                        {task.description}
                    </div>
                    <div className="task-list-item__priority">
                        {task.priority}
                    </div>
                </li>
            );
        });

        return(
            <div>
                <div className="new-task">
                    <input className="new-task__descr-input" type="text" placeholder="Type task description here"/>
                    <select className="new-task__priority-dropdown">
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    <button onClick={this.addToList}>Add Task</button>
                </div>
                <div className="task-list__container">
                    <ul className="task-list">
                        {taskList}
                    </ul>
                </div>
            </div>
        )
    }

    addToList() {
        let descrInput = document.getElementsByClassName('new-task__descr-input')[0];
        let taskDescr = descrInput.value;
        descrInput.value = "";
        descrInput.focus();

        let taskPriority = document.getElementsByClassName('new-task__priority-dropdown')[0].value;

        let newList = this.state.list;
        newList.push({
            description: taskDescr,
            priority: taskPriority
        });
        this.setState({
            list: newList
        });
    }

}

ReactDOM.render(
    <ToDo />,
    document.getElementsByClassName('main-container')[0]
)
