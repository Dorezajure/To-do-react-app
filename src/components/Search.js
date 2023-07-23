function Search(props) {
    return (
		<div className="search">
			<input 
				onChange={(e) => {props.changeTerm(e.target.value)}} 
				// Компонент Search становится контролируемым компонентом, так как он связан с App через value указав его в render
				value={props.term}
				type="text" 
				placeholder="введите фразу для поиска" 
				className="form-control me-2" />
			<div className="btn-group" role="group">
				<button type="button" className="btn btn-primary">
					Все
				</button>
				<button type="button" className="btn btn-light">
					Активные
				</button>
				<button type="button" className="btn btn-light">
					Выполненные
				</button>
			</div>
		</div>
	);
}

export default Search;