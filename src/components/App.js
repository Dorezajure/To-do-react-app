import {Component } from 'react';
import Header from './Header';
import Search from './Search';
import List from './List';
import Footer from './Footer';

class App extends Component {
	// данные для состояния
	state = {
		todoData: [
			{ id: 0, title: 'Выпить кофе', important: false, done: false},
			{ id: 1, title: 'Сделать React приложение', important: false, done: false},
			{ id: 2, title: 'Позавтракать', important: false, done: false},
		],
		term: '',
	};

	// Вспомогательная функция для onToggleImportant и onToggleDone
	toggleParam = (id, param) => {
		this.setState((state) => {
			const newArray = state.todoData.map((task) => {
				return {
					...task,
					[param]: id === task.id ? !task[param] : task[param],
				};
			});
			return { todoData: newArray };
		});
	}

	// Метод, который мы используем по нажатию на кнопку 
	onToggleImportant = (id) => {
		this.toggleParam(id, 'important');
	};

	// Метод для перечеркивания задачи
	onToggleDone = (id) => {
		this.toggleParam(id, 'done');
	};

	// Метод для удаления задач
	deleteItem = (id) => {
		this.setState((state) => {
			return {
				todoData: state.todoData.filter((task) => task.id !== id )
			}
		});
	}

	// Метод для создания и добавления новой задачи в существующий массив 
	addItem = (title) => {
		this.setState((state) => {
			// Создание индивидуального id для каждой новой задачи
			const ID = state.todoData[state.todoData.length - 1]['id'] + 1;
			// Шаблон для новой задачи
			const newItem = { id: ID, title: title, important: false, done: false};
			// Формируем массив с новыми задачами 
			const newArray = [...state.todoData, newItem];
			return {
				todoData: newArray,
			};
		});
	};

	search = (items, term) => {
		// Проверка на то, что колличество совпадений поэлементно не равно 0 
		if(term.trim().length === 0){
			return items;
		}

		return items.filter((item) => {
			// Метод toLoverCase() переводит все в нижний регистр независимо от набранного в поиске 
			if(item.title.toLowerCase().indexOf(term.toLowerCase().trim()) > -1){
				return true
			}
		});
	}

	changeTerm = (term) => {
		this.setState({term});
	}

	render() {
		const visibleItems = this.search(this.state.todoData, this.state.term);

		return (
			<div>
				<Header/>
				<Search changeTerm={this.changeTerm} term={this.state.term}/>
				<List 
					data={visibleItems} 
					onToggleImportant={this.onToggleImportant} 
					onToggleDone={this.onToggleDone}
					deleteItem={this.deleteItem}/>
				<Footer addItem={this.addItem}/>
			</div>
		);
	}
}

export default App;
