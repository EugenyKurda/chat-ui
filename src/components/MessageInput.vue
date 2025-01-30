<template>
	<footer class="message-input">
		<input v-model="newMessage" placeholder="Type your message here" @keyup.enter="sendMessage" />
		<button @click="sendMessage" class="send-button">
			<img src="@/assets/send.svg" alt="send">
		</button>
	</footer>
</template>

<script setup>
import { ref } from 'vue';
import { useChatStore } from '@/stores/chat.js';

const chatStore = useChatStore();
const newMessage = ref('');
const sendMessage = () => {
	if (newMessage.value.trim()) {
		chatStore.addMessage({
			text: newMessage.value,
			sentByUser: true,
			timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
		});
		newMessage.value = '';
	}
};
</script>

<style lang="scss" scoped>
.message-input {
	display: flex;
	align-items: center;
	padding: 1rem;
	background: #f8f9fa;
	border-top: 1px solid #E8ECF0;
	border-radius: 0 0 10px 10px;

	input {
		flex: 1;
		padding: 0.8rem;
		border: none;
		border-radius: 20px;
		background: #F1F5F9;
		outline: none;
		font-size: 1rem;
	}

	input::-webkit-input-placeholder {
		color: #BBBFC1;
	}

	.send-button {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 1.5rem;
		color: #1F766E;
		margin-left: 0.5rem;
	}
}
</style>y