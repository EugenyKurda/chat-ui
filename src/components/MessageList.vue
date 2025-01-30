<template>
	<section class="messages">
		<div v-for="message in messages" :key="message.id" :class="['message', {'message-sent': message.sentByUser, 'message-received': !message.sentByUser}]">
			<p>{{ message.text }}</p>
			<span class="timestamp">{{ message.timestamp }}</span>
		</div>
	</section>
</template>

<script setup>
import { computed } from 'vue';
import { useChatStore } from '@/stores/chat.js';

const chatStore = useChatStore();
const messages = computed(() => chatStore.messages);
</script>

<style lang="scss" scoped>
.messages {
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	overflow-y: auto;
	padding: 1rem;
	flex-grow: 1;
}

.message {
	max-width: 50%;

	&-sent {
		align-self: flex-end;
		background: #1F766E;
		padding: 0.5rem;
		margin: 0.5rem;
		border-radius: 5px;

		p {
			color: #FFFFFF;
		}
	}

	&-received {
		align-self: flex-start;
		background: #ddd;
		padding: 0.5rem;
		margin: 0.5rem;
		border-radius: 5px;

		p {
			color: #3b3e40;
		}

		.timestamp {
			color: #3b3e40;
		}
	}
}

.timestamp {
	font-size: 0.8rem;
	color: #FFFFFF;
}
</style>