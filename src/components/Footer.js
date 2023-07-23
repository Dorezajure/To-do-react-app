import { Component } from "react";

class Footer extends Component {

	// Параметр состояния для записи символов из инпута
	state = {
		taskTitle: '',
	}

	//Метод компонента 
	onInputChange = (e) => {
		this.setState({
			taskTitle: e.target.value
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		// Проверка на пустую строку в списке задач, а также метод trim() для удаление пустых полей по обе стороны от введенного текста
		if(this.state.taskTitle.trim()){
			this.props.addItem(this.state.taskTitle);
		}
		this.setState({
			taskTitle: ''
		});
	}

	render() {
		return (
			<form onSubmit={this.onSubmit} className="footer">
				<input value={this.state.taskTitle} onChange={this.onInputChange} type="text" placeholder="Что необходимо сделать" className="form-control me-2" />
				<button type="submit" className="btn btn-primary">
					Добавить
				</button>
			</form>
		);
	}
}

export default Footer;
