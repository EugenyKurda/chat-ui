<template>
	<section class="messages">
		<div v-for="(message, index) in messages" :key="message.id" class="message-container">
			<p v-if="shouldShowDate(message, index)" class="date-token">
				{{ formatDate(message.timestamp) }}
			</p>

			<div :class="['message', { 'message-sent': message.sentByUser, 'message-received': !message.sentByUser }]">
				<p>{{ message.text }}</p>
				<span class="timestamp">{{ formatedDate(message.timestamp) }}</span>
			</div>
		</div>
	</section>
</template>

<script setup>
import { computed } from 'vue';
import { useChatStore } from '@/stores/chat.js';

function formatedDate(timestamp) {
	const date = new Date(timestamp);
	return date.toLocaleTimeString('en-US', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
	});
}

const chatStore = useChatStore();
const messages = computed(() => chatStore.messages);

function shouldShowDate(message, index) {
	const currentDate = new Date();
	const messageDate = new Date(message.timestamp);

	return index === 0 || !isSameDay(messageDate, new Date(messages.value[index - 1].timestamp));
}

function isSameDay(date1, date2) {
	return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
}

function formatDate(timestamp) {
	const messageDate = new Date(timestamp);
	const currentDate = new Date();

	if (isSameDay(messageDate, currentDate)) {
		return 'Today';
	} else {
		return messageDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
	}
}
</script>

<style lang="scss" scoped>
.messages {
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	overflow-y: auto;
	padding: 1rem;
	flex-grow: 1;
	position: relative;

	.message-container {
		display: flex;
		flex-direction: column;
	}

}

.message {
	display: flex;
	flex-direction: column;
	max-width: 40%;
	padding: 17px;
	border-radius: 15px;
	margin: 0.5rem 0;

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
		border-bottom-right-radius: 0;

		p {
			color: #d5e8e9;
		}

		.timestamp {
			color: #e9f4f4;
		}
	}

	&-received {
		align-self: flex-start;
		background: #ffffff;
		border-bottom-left-radius: 0;

		p {
			color: #767676;
		}

		.timestamp {
			color: #a7a7a7;
		}
	}
}

.date-token {
	padding: 5px;
	background-color: #e1e5e9;
	border-radius: 5px;
	width: 60px;
	color: #49494B;
	font-size: 0.8rem;
	margin-bottom: 1rem;
	text-align: center;
	align-self: center;
}

.timestamp {
	font-size: 0.8rem;
	color: #ffffff;
}
</style>
