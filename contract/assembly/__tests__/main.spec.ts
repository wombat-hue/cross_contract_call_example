import * as contract from '..';
import { storage, Context, VM, VMContext, logging } from "near-sdk-as";

describe("Calculator", () => {
    beforeAll(() => {
        // There can be some common setup for each test.
        logging.log("Before All")
    });

    // https://docs.near.org/docs/tutorials/contracts/cross-contract-calls#docsNav

    it("adds one digit", () => {
        const result = contract.addLongNumbers("1", "3");
        expect(result).toBe("4");
    });

    it("should work with first string longer", () => {
        const result = contract.addLongNumbers("10", "3");
        expect(result).toBe("13");
    });

    it("should work with second string longer", () => {
        const result = contract.addLongNumbers("4", "15");
        expect(result).toBe("19");
    });

    it("should work with carry", () => {
        const result = contract.addLongNumbers("19", "22");
        expect(result).toBe("41");
    });

    it("should work when result is one digit longer than largest input", () => {
        const result = contract.addLongNumbers("91", "22");
        expect(result).toBe("113");
    });

    it("should work with really large input", () => {
        const result = contract.addLongNumbers("29348756231984613809465238956138947136497182364018246710289467102946710289467198046", "1");
        expect(result).toBe("29348756231984613809465238956138947136497182364018246710289467102946710289467198047");
    });
});
