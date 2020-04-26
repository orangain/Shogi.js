import "jest";
import {MOVE_DEF, PRESET} from "../Constants";

describe("preset", () => {
    it("snapshots", () => {
        Object.keys(PRESET).forEach((name) => {
            expect(PRESET[name as keyof typeof PRESET]).toMatchSnapshot(name);
        });
    });
});
describe("move def", () => {
    it("snapshots", () => {
        Object.keys(MOVE_DEF).forEach((kind) => {
            expect(MOVE_DEF[kind as keyof typeof MOVE_DEF]).toMatchSnapshot(kind);
        });
    });
});
