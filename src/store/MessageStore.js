import { defineStore } from 'pinia';

const users = [
	{ id: 1, name: 'Илон', avatar: 'ilon_mask.jpg' },
	{ id: 2, name: 'Билли', avatar: 'bill_gates.jpg' },
];
let messages = [];

if (localStorage.getItem('messages') === null) {
	messages = [
		{ id: 1727891829446, userFrom: users[0].name, message: 'Привет, Билли! Где деньги, Билли?' },
		{ id: 1727891830963, userFrom: users[1].name, message: 'Хелло, Илон! Нетути(((' },
		{ id: 1727891832236, userFrom: users[0].name, message: 'Куда ты их дел?' },
		{ id: 1727891888856, userFrom: users[1].name, message: 'Поищи в космосе, ты же можешь! Как тебе такое, Илон?))' },
	];
	localStorage.setItem('messages', JSON.stringify(messages));
} else {
	messages = JSON.parse(localStorage.getItem('messages'));
}

export const useMessageStore = defineStore('messageStore', {
	state: () => ({
		users,
		messages,
	}),
	getters: {
		getAllMessages() {
			return this.messages;
		},
		getAllUsers() {
			return this.users;
		},
	},
	actions: {
		addMessage(userFrom, message) {
			this.messages.push({ id: Date.now(), userFrom, message });
			localStorage.setItem('messages', JSON.stringify(this.messages));
		},
		clearHistory() {
			this.messages.length = [];
			localStorage.clear();
		},
	},
});
