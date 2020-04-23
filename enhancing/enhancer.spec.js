const enhancer = require("./enhancer.js");
// test away!

const item1 = {
  name: "night sword",
  durability: 25,
  enhancement: 10,
};

const item2 = {
  name: "boots of the warrior",
  durability: 55,
  enhancement: 15,
};

// item 1 repair
describe("enhancer.js", function () {
  describe("repair", function () {
    it("should set item1 durability to 100", function () {
      enhancer.repair(item1);
      console.log(item1);
      expect(item1.durability).toBe(100);
    });
  });

  // item 2 repair
  describe("repair", function () {
    it("should set item1 durability to 100", function () {
      enhancer.repair(item2);
      console.log(item2);
      expect(item2.durability).toBe(100);
    });
  });

  // item 1 success
  describe("succeed", function () {
    it("should increase item1 enhancement by 1", function () {
      enhancer.succeed(item1);
      console.log(item1);
      if (item1.enhancement < 20) {
        expect(item1.enhancement).toBe(11);
      } else {
        expect(item1.enhancement).toBe(10);
      }
    });
  });

  // item 2 success
  describe("succeed", function () {
    it("should increase item1 enhancement by 1", function () {
      enhancer.succeed(item2);
      console.log(item2);
      if (item2.enhancement < 20) {
        expect(item2.enhancement).toBe(16);
      } else {
        expect(item2.enhancement).toBe(15);
      }
    });
  });

  // item 1 fail
  describe("fail", function () {
    it("should either decrease durability by 5 or 10, or decrease enhancement level by 1", function () {
      enhancer.fail(item1);
      console.log(item1);
      if (item1.enhancement < 15) {
        expect(item1.durability).toBe(95);
      }
      if (item1.enhancement >= 15) {
        expect(item1.durability).toBe(90);
      }
      if (item1.enhancement > 16) {
        expect(item1.enhancement).toBe(9);
      }
    });
  });

    // item 2 fail
    describe("fail", function () {
      it("should either decrease durability by 5 or 10, or decrease enhancement level by 1", function () {
        enhancer.fail(item2);
        console.log(item2);
        if (item2.enhancement < 15) {
          expect(item2.durability).toBe(95);
        }
        if (item2.enhancement >= 15) {
          expect(item2.durability).toBe(90);
        }
        if (item2.enhancement > 16) {
          expect(item2.enhancement).toBe((item2.enhancement - 1));
        }
      });
    });
});
