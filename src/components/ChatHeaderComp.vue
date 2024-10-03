<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
	chatOwner: String,
	chatAvatar: String,
});

const avatar = new URL(`../assets/images/${props.chatAvatar}`, import.meta.url).href
</script>

<template>
	<div class="title">
		<h2>{{ props.chatOwner }}</h2>
		<img class="avatar" :src="avatar" alt="Avatar" width="64" height="64">
	</div>
</template>

<style scoped lang="scss">
@import '../assets/styles/_variables.scss';
.title {
		margin: 0;
		border-radius: $chatRadius $chatRadius 0 0;
		color: white;
		font-size: 1.3em;
		line-height: 0.5;
		padding: 10px;
		padding-left: 20px;
		background-color: $messageColorRight;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content:flex-end;
		gap: 20px;
	}

	.avatar {
		border-radius: 50%;
	}
</style>
