import { addLongNumbers } from '..';
import { storage, Context } from "near-sdk-as";

describe("Greeting ", () => {
    it("adds one digit", async function () {
        const params = {
            a: "1",
            b: "3"
        };
        const result = await contract.addLongNumbers(params);
        expect(result).toBe("4");
    });

    it("should work with first string longer", async function () {
        const params = {
            a: "10",
            b: "3"
        };
        const result = await contract.addLongNumbers(params);
        expect(result).toBe("13");
    });

    it("should work with second string longer", async function () {
        const params = {
            a: "4",
            b: "15"
        };
        const result = await contract.addLongNumbers(params);
        expect(result).toBe("19");
    });

    it("should work with carry", async function () {
        const params = {
            a: "19",
            b: "22"
        };
        const result = await contract.addLongNumbers(params);
        expect(result).toBe("41");
    });

    it("should work when result is one digit longer than largest input", async function () {
        const params = {
            a: "91",
            b: "22"
        };
        const result = await contract.addLongNumbers(params);
        expect(result).toBe("113");
    });

    it("should work with really large input", async function () {
        const params = {
            a: "29348756231984613809465238956138947136497182364018246710289467102946710289467198046",
            b: "1"
        };
        const result = await contract.addLongNumbers(params);
        expect(result).toBe("29348756231984613809465238956138947136497182364018246710289467102946710289467198047");
    });
