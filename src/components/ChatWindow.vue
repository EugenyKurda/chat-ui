<template>
	<main class="chat">
		<header class="chat-header">
			<h2>Background check request</h2>
		</header>
		<MessageList />
		<MessageInput />
	</main>
</template>

<script setup>
import MessageList from "@/components/MessageList.vue";
import MessageInput from "@/components/MessageInput.vue";
</script>

<style lang="scss" scoped>
.chat {
	display: flex;
	flex-direction: column;
	background: #f9f9f9;
	height: 100vh;
	width: 100%;

	&-header {
		background: #ddd;
		padding: 1rem;
		display: flex;
		justify-content: space-between;

		h2 {
			margin: 0;
		}
	}
}
</style>