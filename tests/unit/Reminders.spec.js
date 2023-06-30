import { mount } from "@vue/test-utils";
import Reminders from "@/components/Reminders.vue";

describe("Reminders", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Reminders);
  });

  it("hides the reminders list if there are none", () => {
    expect(wrapper.contains("ul")).toBe(false);
  });

  it("can add reminders", async () => {
    await addReminder("Go to the store");

    expect(remindersList()).toContain("Go to the store");
  });

  it("can delete any reminder", async () => {
    await addReminder("Go to the store");
    await addReminder("Finish screencast");

    let deleteButton = wrapper.find("ul > li:first-child .remove");

    await deleteButton.trigger("click");

    expect(remindersList()).not.toContain("Go to the store");
  });

  function addReminder(body) {
    let newReminder = wrapper.find(".new-reminder");

    newReminder.element.value = body;
    newReminder.trigger("input");

    wrapper.find("button").trigger("click");
  }

  function remindersList() {
    return wrapper.find("ul").text();
  }
});
