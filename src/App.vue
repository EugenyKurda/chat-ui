<template>
	<div class="chat-container">
		<aside class="sidebar">
			<h2 class="sidebar-title">BELITSOFT</h2>
			<div class="profile-info">
				<img src="@/assets/avatar.jpeg" height="120" width="120" alt="Profile" class="profile-image" />
				<p class="profile-name">Westin Evans</p>
				<p class="profile-contact">+1 234 567 890</p>
				<p class="profile-email">westinevans@email.com</p>
			</div>
			<nav class="menu">
				<ul>
					<li v-for="item in menuItems" :key="item">
						<router-link :to="`${item.route}`" class="menu-item">
							<img :src="`/src/assets/${item.iconClass}.svg`" alt="icon" class="icon">
							<span>{{item.name}}</span>
						</router-link>
					</li>
				</ul>
			</nav>
			<div class="settings">
				<button @click="toggleDarkMode" class="toggle-button">
					Dark Mode
					<span class="toggle-switch"></span>
				</button>
			</div>
		</aside>

		<main class="chat">
			<header class="chat-header">
				<h2>Background check request</h2>
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
				<button class="attach-button">
					📎
					<input type="file" class="file-input" />
				</button>
				<input v-model="newMessage" placeholder="Type your message here..." @keyup.enter="sendMessage" />
				<button @click="sendMessage" class="send-button">➤</button>
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

const menuItems = computed(() => {
	return [
		{ name: 'Personal info', iconClass: 'person', route: 'personal-info' },
		{ name: 'Location', iconClass: 'location', route: 'location' },
		{ name: 'Education history', iconClass: 'school', route: 'education-history' },
		{ name: 'Employment history', iconClass: 'calendar_today', route: 'employment-history' },
		{ name: 'Professional license', iconClass: 'book', route: 'professional-license' },
		{ name: 'Driver’s license', iconClass: 'shield_person', route: 'drivers-license' },
		{ name: 'Medical tests', iconClass: 'quiz', route: 'medical-tests' },
		{ name: 'Review', iconClass: 'reviews', route: 'review' },
		{ name: 'Payment', iconClass: 'credit_card', route: 'payment' },
	];
})

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
			timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
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

<style lang="scss" scoped>
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

	&-title {
		text-align: center;
	}

	.profile-info {
		text-align: center;
	}

	.profile-image {
		border-radius: 50%;
	}

	.menu {
		ul {
			list-style: none;
			padding: 0;
			display: flex;
			flex-direction: column;
			align-items: start;
		}

		li {
			margin: 0.7rem 1rem;
			cursor: pointer;
			width: 80%;

			.menu-item {
				display: flex;
				align-items: center;

				.icon {
					margin-right: 10px;
				}
			}
		}
	}
}

.settings {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;

	.toggle-button {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: none;
		border: none;
		color: #ddd;
		font-size: 1rem;
		cursor: pointer;
		padding: 0.5rem;
		width: 100%;
		text-align: left;

		.toggle-switch {
			width: 35px;
			height: 20px;
			background: #666;
			border-radius: 10px;
			position: relative;
			transition: background 0.3s ease-in-out;

			&::after {
				content: "";
				position: absolute;
				top: 3px;
				left: 3px;
				width: 14px;
				height: 14px;
				background: #fff;
				border-radius: 50%;
				transition: transform 0.3s ease-in-out;
			}
		}

		.dark-mode & .toggle-switch {
			background: #4caf50;

			&::after {
				transform: translateX(15px);
			}
		}
	}

	.exit-button {
		background: none;
		border: none;
		color: #ddd;
		font-size: 1rem;
		cursor: pointer;
		text-align: left;
		padding: 0.5rem;
		width: 100%;
	}
}

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

	.messages {
		display: flex;
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
}

.message-input {
	display: flex;
	align-items: center;
	padding: 1rem;
	background: #f8f9fa;
	border-top: 1px solid #ccc;
	border-radius: 0 0 10px 10px;

	input {
		flex: 1;
		padding: 0.8rem;
		border: none;
		border-radius: 20px;
		background: #e9ecef;
		outline: none;
		font-size: 1rem;
	}

	.attach-button {
		background: none;
		border: none;
		cursor: pointer;
		margin-right: 0.5rem;
		position: relative;

		.file-input {
			position: absolute;
			opacity: 0;
			width: 100%;
			height: 100%;
			cursor: pointer;
		}
	}

	.send-button {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 1.5rem;
		color: #007bff;
		margin-left: 0.5rem;
	}
}
</style>
