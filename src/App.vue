<script setup>
import { useMessageStore } from './store/MessageStore';
import ChatComp from './components/ChatComp.vue';

const messageStore = useMessageStore();
const users = messageStore.getAllUsers;
</script>

<template>
	<div class="container">
		<ChatComp
			v-for="user in users"
			:key="user.id"
			:user="user"
		/>
	</div>
	<button class="clear" @click="messageStore.clearHistory()">Очистить историю переписки</button>
</template>

<style scoped lang="scss">
.container {
	display: flex;
	justify-content: center;
	gap: 40px;
}
.clear{
	text-transform: uppercase;
	margin-top: 40px;
	padding: 10px 40px;
	background-color: transparent;
	border: none;
	cursor: pointer;
	border-radius: 10px;
	border: 1px solid #ccc;
	color: #ccc;
	transition: all 0.3s ease;
	&:hover{
		background-color: #ccc;
		color: white;
	}
}
</style>
