import { mount } from "@vue/test-utils";
import Question from "@/components/Question.vue";

describe("Counter.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Question, {
      propsData: {
        dataQuestion: {
          title: "The title",
          body: "The body",
        },
      },
    });
  });

  it("presents the title and the body", () => {
    see("The title");
    see("The body");
  });

  it("can be edited", async () => {
    expect(wrapper.contains("input[name=title")).toBe(false);

    await click("#edit");

    expect(wrapper.find("input[name=title]").element.value).toBe("The title");
    expect(wrapper.find("textarea[name=body]").element.value).toBe("The body");
  });

  it("hides editing button during edit mode", async () => {
    expect(wrapper.contains("#edit")).toBe(true);

    await click("#edit");

    expect(wrapper.contains("#edit")).toBe(false);
  });

  it("updates the question after being edited", async () => {
    await click("#edit");

    await type("Changed title", "input[name=title]");
    await type("Changed body", "textarea[name=body]");

    await click("#update");

    see("Changed title");
    see("Changed body");
  });

  it("can cancel out editing mode", async () => {
    await click("#edit");

    await type("Changed title", "input[name=title]");

    await click("#cancel");

    see("The title");
  });

  let see = (text, selector) => {
    let wrap = selector ? wrapper.find(selector) : wrapper;

    expect(wrap.html()).toContain(text);
  };

  let type = (text, selector) => {
    let node = wrapper.find(selector);

    node.element.value = text;
    node.trigger("input");
  };

  let click = (selector) => {
    wrapper.find(selector).trigger("click");
  };
});
