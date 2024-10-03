<script setup>
import { useMessageStore } from '../store/MessageStore';
import { ref, defineProps, computed, onMounted } from 'vue';

const props = defineProps({ chatOwner: String });

const messageStore = useMessageStore();

const messages = computed(() => {
	return messageStore.getAllMessages;
});

const messageTime = (time) => {
	const date = new Date(time);
	const dayName = date.toLocaleDateString('ru-RU', { weekday: 'short' });
	return dayName + ' ' + date.getHours() + ':' + date.getMinutes();
};

const bottomEl = ref();

const scrollDown = () => {
	bottomEl.value.scrollTop = bottomEl.value.scrollHeight;
};

onMounted(() => {
	scrollDown();
});

</script>

<template>
	<ul
		class="feed"
		ref="bottomEl"
	>
		<transition-group name="add" @enter="scrollDown">
			<li
				class="message"
				:class="
					message.userFrom === props.chatOwner
						? 'message-right'
						: 'message-left'
				"
				v-for="message in messages"
				:key="message.id"
			>
				<p class="message-text">{{ message.message }}</p>
				<span class="message-time">{{ messageTime(message.id) }}</span>
			</li>
		</transition-group>
	</ul>
</template>

<style scoped lang="scss">
@import '../assets/styles/_variables.scss';
.feed {
	padding: 10px 10px;
	display: flex;
	flex-direction: column;
	max-height: 50vh;
	overflow-y: auto;
	scrollbar-gutter: stable;
	scrollbar-color: $scrollbarColor transparent;
	scrollbar-width: thin;
}
.message {
	list-style: none;
	padding: 10px 20px;
	border-radius: 20px;
	margin-bottom: 10px;
	max-width: 80%;
	display: flex;
	flex-direction: column;
	align-items: end;
	&:last-child {
		margin-bottom: 0px;
	}
	&-left {
		background-color: $messageColorLeft;
		text-align: left;
		margin-right: auto;
	}
	&-right {
		background-color: $messageColorRight;
		text-align: right;
		margin-left: auto;
	}
	&-text {
		padding: 0;
		margin: 0;
	}
	&-time {
		padding: 0;
		margin: 0;
		color: $headerColor;
		font-size: 10px;
	}
}
.add-enter {
	&-active {
		transition: opacity 0.6s ease-in;
	}
	&-from {
		opacity: 0;
	}
}
</style>
