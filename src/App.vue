<template>
	<div class="chat-container">
		<aside class="sidebar">
			<h2 class="sidebar-title">BELITSOFT</h2>
			<div class="profile-info">
				<img src="@/assets/avatar.jpeg" height="150" width="150" alt="Profile" class="profile-image" />
				<p class="profile-name">Westin Evans</p>
				<p class="profile-contact">+1 234 567 890</p>
				<p class="profile-email">westinevans@email.com</p>
			</div>
			<nav class="menu">
				<ul>
					<li v-for="item in menuItems" :key="item">{{ item }}</li>
				</ul>
			</nav>
			<div class="settings">
				<button @click="toggleDarkMode">Dark Mode</button>
				<button @click="exit">Exit</button>
			</div>
		</aside>

		<main class="chat">
			<header class="chat-header">
				<h2>Background check request</h2>
<!--				<span>In progress: {{ progress }}%</span>-->
			</header>

			<section class="messages">
				<div
						v-for="message in messages"
						:key="message.id"
						class="message"
						:class="{
							'message-sent': message.sentByUser,
							'message-received': !message.sentByUser
						}"
				>
					<p>{{ message.text }}</p>
					<span class="timestamp">{{ message.timestamp }}</span>
				</div>
			</section>

			<footer class="message-input">
				<input v-model="newMessage" placeholder="Type your message here..." @keyup.enter="sendMessage" />
				<button @click="sendMessage">Send</button>
			</footer>
		</main>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useChatStore } from '@/stores/chat.js';

const chatStore = useChatStore();

const newMessage = ref('');

const messages = computed(() => chatStore.messages);
const progress = computed(() => chatStore.progress);

const menuItems = [
	'Personal info',
	'Location',
	'Education history',
	'Employment history',
	'Professional license',
	'Driver’s license',
	'Medical tests',
	'Review',
	'Payment',
];

const toggleDarkMode = () => {
	document.body.classList.toggle('dark-mode');
};

const exit = () => {
	console.log('Exiting chat...');
};

const sendMessage = () => {
	if (newMessage.value.trim()) {
		chatStore.addMessage({
			text: newMessage.value,
			sentByUser: true,
			timestamp: new Date().toLocaleTimeString(),
		});
		newMessage.value = '';
	}
};
</script>

<style>
body {
	margin: 0;
}
</style>

<style scoped>
.chat-container {
	display: flex;
	height: 100vh;
	font-family: Arial, sans-serif;
}
.sidebar {
	width: 17%;
	background: #00191a;
	color: #fff;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.sidebar-title {
	text-align: center;
}
.profile-info {
	text-align: center;
}
.profile-image {
	border-radius: 50%;
}
.menu ul {
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: column;
	align-items: start;
}
.menu li {
	margin: 0.7rem 1rem;
	cursor: pointer;
}
.settings {
	display: flex;
	flex-direction: column;
}
.settings button {
	background: none;
	border: 1px solid #fff;
	color: #fff;
	margin: 0.5rem 1rem;
	cursor: pointer;
	width: 40%;
}
.chat {
	display: flex;
	flex-direction: column;
	background: #f9f9f9;
	height: 100vh;
}
.chat-header {
	background: #ddd;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
}
.chat-header h2 {
	margin: 0;
}
.messages {
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	padding: 1rem;
	flex-grow: 1;
}
.message {
	max-width: 50%;
}
.message-sent {
	align-self: flex-end;
	background: #1F766E;
	padding: 0.5rem;
	margin: 0.5rem;
	border-radius: 5px;
}

.message-sent p {
	color: #FFFFFF;
}
.message-received {
	align-self: flex-start;
	background: #ddd;
	padding: 0.5rem;
	margin: 0.5rem;
	border-radius: 5px;
}

.message-received p {
	color: #3b3e40;
}

.message-received .timestamp {
	color: #3b3e40;
}

.timestamp {
	font-size: 0.8rem;
	color: #FFFFFF;
}
.message-input {
	display: flex;
	padding: 1rem;
	background: #ddd;
}
.message-input input {
	flex: 1;
	padding: 0.5rem;
	margin-right: 0.5rem;
}
.message-input button {
	padding: 0.5rem 1rem;
	cursor: pointer;
}
</style>
