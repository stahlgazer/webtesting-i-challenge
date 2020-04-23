const enhancer = require("./enhancer.js");
// test away!

const item = {
  name: "night sword",
  durability: 25,
  enhancement: 10,
};

describe("enhancer.js", function () {
  describe("repair", function () {
    it("should set item durability to 100", function () {
      enhancer.repair(item);
      console.log(item);
      expect(item.durability).toBe(100);
    });
  });
});

describe("succeed", function () {
  it("should increase item enhancement by 1", function () {
    enhancer.succeed(item);
    console.log(item);
    if (item.enhancement < 20) {
      expect(item.enhancement).toBe(11);
    } else {
      expect(item.enhancement).toBe(10);
    }
  });
});

describe("fail", function () {
  it("should either decrease durability by 5 or 10, or decrease enhancement level by 1", function () {
    enhancer.fail(item);
    console.log(item);
    if (item.enhancement < 15) {
      expect(item.durability).toBe(95);
    }
    if (item.enhancement >= 15) {
      expect(item.durability).toBe(90);
    }
    if (item.enhancement > 16) {
      expect(item.enhancement).toBe(9);
    }
  });
});
