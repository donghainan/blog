import { observable, action, computed, toJS } from 'mobx'

class todoList {
	@observable todos = [
		{
			id: parseInt(Math.random() * 100000),
			isComplete: false,
			title: 'ddd',
		},
		{
			id: parseInt(Math.random() * 100000),
			isComplete: true,
			title: 'ddd',
		},
	]

	@computed get unfinishedTodoCount() {
		return this.todos.filter((todo) => !todo.isComplete).length
	}

	@computed get finishedTodoCount() {
		return this.todos.filter((todo) => todo.isComplete).length
	}

	@action
	toggleComplete = (val) => {
		const todos = toJS(this.todos).map((item) => {
			if (item.id == val) {
				item.isComplete = true
			}
			return item
		})
		this.todos = todos
	}

	@action
	toggleTodo = (val) => {
		const todos = toJS(this.todos).map((item) => {
			if (item.id == val) {
				item.isComplete = false
			}
			return item
		})
		this.todos = todos
	}

	@action
	AddTodo = (val) => {
		const todo = this.todos
		this.todos = [val, ...todo]
	}

	@action
	deletes = (val) => {
		const todos = toJS(this.todos).filter((item) => item.id != val)
		this.todos = todos
	}
}

const store = new todoList()
export default store
