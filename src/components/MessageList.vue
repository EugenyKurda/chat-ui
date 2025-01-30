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
	display: flex;
	flex-direction: column;
	max-width: 40%;
	padding: 17px;
	border-radius: 15px;

	p {
		font-size: 0.9rem;
		margin: 0;
	}

	.timestamp {
		align-self: self-end;
	}

	&-sent {
		align-self: flex-end;
		background: #309399;
		margin: 0.5rem;
		border-bottom-right-radius: 0;

		p {
			color: #D5E8E9;
		}

		.timestamp {
			color: #E9F4F4;
		}
	}

	&-received {
		align-self: flex-start;
		background: #FFFFFF;
		margin: 0.5rem;
		border-bottom-left-radius: 0;

		p {
			color: #767676;
		}

		.timestamp {
			color: #A7A7A7;
		}
	}
}

.timestamp {
	font-size: 0.8rem;
	color: #FFFFFF;
}
</style>