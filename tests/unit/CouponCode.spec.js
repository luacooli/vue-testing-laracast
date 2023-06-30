import { mount } from "@vue/test-utils";
import CouponCode from "@/components/CouponCode.vue";

describe("Counter.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CouponCode);

    wrapper.setData({
      coupons: [
        {
          code: "50OFF",
          message: "50% Off",
          discount: 50,
        },
      ],
    });
  });

  it("accepts a coupon code", () => {
    let wrapper = mount(CouponCode);

    expect(wrapper.find("input.coupon-code")).toBeTruthy();
  });

  it("validates a real coupon code", async () => {
    await enterCouponCode("50OFF");

    expect(wrapper.text()).toContain("Coupon Redeemed: 50% Off!");
  });

  it("validates a fake coupon code", async () => {
    await enterCouponCode("NOTREAL");

    expect(wrapper.text()).toContain("Invalid Coupon Code");
  });

  it("broadcast the percentage discount when a valide coupon is applied", () => {
    // wrapper.setData({
    //   code: "50OFF",
    // });

    // wrapper.vm.validate();

    enterCouponCode("50OFF");

    expect(wrapper.emitted().applied).toBeTruthy();
    expect(wrapper.emitted().applied[0]).toEqual([50]);
  });

  function enterCouponCode(code) {
    let couponCode = wrapper.find("input.coupon-code");

    couponCode.element.value = code;
    couponCode.trigger("input");
  }
});
