import { defineStore } from 'pinia';

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [
      {
        id: 1,
        text: "Hello, I’m Tony, your AI assistant to help get all necessary information completed to get your background check on its way. Are you ready to get started?",
        sentByUser: false,
        timestamp: "10:15 AM",
      },
      {
        id: 2,
        text: "Hey, Tony! Yes, of course! I’m ready. And I’m available to answer your questions.",
        sentByUser: true,
        timestamp: "10:20 AM",
      },
      {
        id: 3,
        text: "So far I believe your name is Westin Evans and your date of birth is 15.05.1990. Is this correct?",
        sentByUser: false,
        timestamp: "10:21 AM",
      },
      {
        id: 4,
        text: "Yeah, that’s right! My name is Westin Evans and that’s my date of birth.",
        sentByUser: true,
        timestamp: "10:23 AM",
      },
    ],
    progress: 10,
  }),

  actions: {
    addMessage(message) {
      this.messages.push({
        ...message,
        id: this.messages.length + 1,
      });
      this.updateProgress();
    },

    updateProgress() {
      this.progress = Math.min(100, this.progress + 10);
    },
  },
});