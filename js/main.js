let todoInput;
let errorInfo;
let addBtn;
let ulList;
let newTodo;
let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn

const main = () => {
	prepareDomElements();
	prepareDomEvents();
};

const prepareDomElements = () => {
	todoInput = document.querySelector('.todo-input');
	errorInfo = document.querySelector('.error-info');
	addBtn = document.querySelector('.btn-add');
	ulList = document.querySelector('.todolist ul');
};

const prepareDomEvents = () => {
	addBtn.addEventListener('click', addNewTodo);
	ulList.addEventListener('click', checkClick);
};

const addNewTodo = (params) => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li');
		newTodo.textContent = todoInput.value;
		createToolsArea();
		ulList.append(newTodo);

		todoInput.value = '';
		errorInfo.textContent = 'dodano nowe zadanie';
		errorInfo.style.color = 'green';
	} else {
		errorInfo.textContent = 'Wpisz treść zadania';
		errorInfo.style.color = 'tomato';
	}
};

const createToolsArea = () => {
	const toolsPanel = document.createElement('div');
	toolsPanel.classList.add('tools');
	newTodo.append(toolsPanel);

	const completeBtn = document.createElement('button');
	completeBtn.classList.add('complete');
	completeBtn.innerHTML = '<i class="fas fa-check"></i>';
	const editBtn = document.createElement('button');
	editBtn.classList.add('edit');
	editBtn.textContent = 'EDIT';
	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete');
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

	toolsPanel.append(completeBtn, editBtn, deleteBtn);
};

const checkClick = (e) => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed');
		e.target.classList.toggle('completed');
	} else if (e.target.matches('.edit')) {
		console.log('edit');
	} else if (e.target.matches('.delete')) {
		console.log('delete');
	}
};

document.addEventListener('DOMContentLoaded', main);
