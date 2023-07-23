import ListItem from './ListItem';

function List(props) {

	const render = props.data.map((task) => {
		return <ListItem 
				onToggleDone={props.onToggleDone} 
				onToggleImportant={props.onToggleImportant} 
				deleteItem = {props.deleteItem}
				key={task.id} 
				task={task} 
			/>;
	});

	const emptyList = (
		<li className="todo-item justify-content-center">
			<span className="todo-item-text">Список дел пуст</span>
		</li>
	);

	return <ul className="todo-list">{props.data.length > 0 ? render : emptyList}</ul>;
}

export default List;
