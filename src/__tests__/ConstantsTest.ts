import "jest";
import {MOVE_DEF, PRESET} from "../Constants";

describe("preset", () => {
    it("snapshots", () => {
        for (const name in PRESET) {
            expect(PRESET[name as keyof typeof PRESET]).toMatchSnapshot(name);
        }
    });
});
describe("move def", () => {
    it("snapshots", () => {
        for (const kind in MOVE_DEF) {
            expect(MOVE_DEF[kind]).toMatchSnapshot(kind);
        }
    });
});
