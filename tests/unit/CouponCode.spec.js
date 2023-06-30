import { mount } from "@vue/test-utils";
import CouponCode from "@/components/CouponCode.vue";

describe("Counter.vue", () => {
  it("accepts a coupon code", () => {
    let wrapper = mount(CouponCode);

    expect(wrapper.contains("input.coupon-code")).toBe(true);
  });

  it("validates a user-provider coupon code", () => {
    let couponCode = wrapper.find("input.coupon-code");

    couponCode.element.value = "50OFF";
    couponCode.trigger("input");

    expect(wrapper.text()).toContain("Coupon Redeemed: 50% Off!");
  });
});
