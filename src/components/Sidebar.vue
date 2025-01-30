<template>
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
				<li v-for="item in menuItems" :key="item.route">
					<router-link :to="item.route" class="menu-item">
						<img :src="`/src/assets/${item.iconClass}.svg`" alt="icon" class="icon" />
						<span>{{ item.name }}</span>
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
</template>

<script setup>
import { computed } from 'vue';

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
</script>

<style lang="scss" scoped>
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
}
</style>