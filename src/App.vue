<template>
	<div class="chat-container">
		<Sidebar />
		<ChatWindow />
	</div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import ChatWindow from "@/components/ChatWindow.vue";
</script>

<style scoped>
.chat-container {
	display: flex;
	height: 100vh;
}
</style>

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
</style>
