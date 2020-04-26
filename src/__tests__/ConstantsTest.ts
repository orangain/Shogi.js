import "jest";
import {MOVE_DEF, PRESET} from "../Constants";

describe("preset", () => {
    it("snapshots", () => {
        Object.keys(PRESET).forEach((name) => {
            expect(PRESET[name]).toMatchSnapshot(name);
        });
    });
});
describe("move def", () => {
    it("snapshots", () => {
        Object.keys(MOVE_DEF).forEach((kind) => {
            expect(MOVE_DEF[kind]).toMatchSnapshot(kind);
        });
    });
});
