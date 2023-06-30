<template>
  <div>
    <input class="new-reminder" v-model="newReminder" />
    <button @click="add">Add reminder</button>

    <ul v-if="reminders.length">
      <li v-for="reminder in reminders" :key="reminder">
        {{ reminder }}

        <button class="remove" @click="remove(reminder)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Reminders",

  data() {
    return {
      newReminder: "",
      reminders: [],
    };
  },

  methods: {
    add() {
      this.reminders.push(this.newReminder);
      this.newReminder = "";
    },
    remove(reminder) {
      this.reminders.splice(reminder, 1);
    },
  },
};
</script>
