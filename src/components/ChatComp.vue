<script setup>
import { defineProps } from 'vue';

import ChatHeaderComp from './ChatHeaderComp.vue';
import MessageFeedComp from './MessageFeedComp.vue';
import InputMessageComp from './InputMessageComp.vue';

const props = defineProps({
	user: Object,
});
</script>
<template>
	<section class="chat">
		<ChatHeaderComp :chatOwner="props.user.name" :chatAvatar="props.user.avatar" />
		<MessageFeedComp :chatOwner="props.user.name" />
		<InputMessageComp :chatOwner="props.user.name" />
	</section>
</template>

<style scoped lang="scss">
@import '../assets/styles/_variables.scss';

.chat {
	width: 100%;
	background-image: url('../assets/images/pattern.jpg');
	border-radius: $chatRadius;
	box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
}
</style>
