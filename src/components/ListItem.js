import { Component } from 'react';

class ListItem extends Component {
	
	render() {
		const { task, onToggleDone, onToggleImportant, deleteItem } = this.props;

		let classNames = 'todo-item';

		if (task.important) {
			classNames += ' important';
		}

		if (task.done) {
			classNames += ' done';
		}

		return (
			<li className={classNames}>
				<span onClick={() => {onToggleDone(task.id)} } className="todo-item-text">
					{task.title}
				</span>
				<div className="btn-group">
					<button onClick={() => {onToggleImportant(task.id)}} role="button" className="btn btn-outline-dark btn-sm">
						Важное
					</button>
					<button onClick={() => {deleteItem(task.id)}} role="button" className="btn btn-outline-danger btn-sm">
						Удалить
					</button>
				</div>
			</li>
		);
	}
}

export default ListItem;
