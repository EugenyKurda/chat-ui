<template>
	<aside class="sidebar">
		<div class="sidebar-title_container">
			<img src="@/assets/polymer.svg" alt="polymer">
			<h2 class="sidebar-title">BELITSOFT</h2>
		</div>
		<nav class="menu">
			<ul>
				<li v-for="item in menuItems" :key="item.route" :class="{
							'activeItem': item.active,
						}">
					<router-link :to="item.route" class="menu-item">
						<img :src="`/src/assets/${item.iconClass}.svg`" alt="icon" class="icon" />
						<span>{{ item.name }}</span>
					</router-link>
				</li>
			</ul>
		</nav>
		<div class="settings">
			<button @click="toggleDarkMode" class="toggle-button">
				<p class="toggle-button_title">
					<img src="@/assets/dark_mode.svg" width="24" height="24" alt="dark_mode" class="dark_mode-icon" />
					Dark Mode
				</p>
				<span class="toggle-switch"></span>
			</button>
			<button class="exit-button">
				<p class="exit-button_title">
					<img src="@/assets/logout.svg" width="24" height="24" alt="logout" class="exit-icon" />
					Exit
				</p>
			</button>
		</div>
	</aside>
</template>

<script setup>
import { computed } from 'vue';

const menuItems = computed(() => {
	return [
		{ name: 'Personal info', iconClass: 'person', route: 'personal-info', active: true },
		{ name: 'Location', iconClass: 'location', route: 'location', active: false },
		{ name: 'Education history', iconClass: 'school', route: 'education-history', active: false },
		{ name: 'Employment history', iconClass: 'calendar_today', route: 'employment-history', active: false },
		{ name: 'Professional license', iconClass: 'book', route: 'professional-license', active: false },
		{ name: 'Driver’s license', iconClass: 'shield_person', route: 'drivers-license', active: false },
		{ name: 'Medical tests', iconClass: 'quiz', route: 'medical-tests', active: false },
		{ name: 'Review', iconClass: 'reviews', route: 'review', active: false },
		{ name: 'Payment', iconClass: 'credit_card', route: 'payment', active: false },
	];
})
const toggleDarkMode = () => {
	document.body.classList.toggle('dark-mode');
};
</script>

<style lang="scss" scoped>
.sidebar {
	width: 20%;
	background: #021A1A;
	color: #fff;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.sidebar-title_container {
		display: flex;
		align-items: center;
		width: 80%;
		margin-left: 16px;

		.sidebar-title {
			margin-left: 15px;
		}
	}

	&-title {
		text-align: center;
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
			color: #A2ACAC;
			padding: 0.7rem 0.7rem 0.7rem 0.4rem;
			border-radius: 5px;

			.menu-item {
				display: flex;
				align-items: center;

				.icon {
					margin-right: 10px;
				}
			}

			&:hover {
				background-color: #263C3C;
			}
		}

		.activeItem {
			background-color: #263C3C;
		}
	}
}

.settings {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
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

		.toggle-button_title {
			display: flex;
			align-items: center;
			margin: 0;

			.dark_mode-icon {
				margin-right: 5px;
			}
		}

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
		height: 20px;
		text-align: left;
		margin: 0;

		.exit-button_title {
			display: flex;
			align-items: center;

			.exit-icon {
				margin-right: 5px;
			}
		}
	}
}
</style>