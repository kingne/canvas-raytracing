import { Vec3, vec3 } from "../src/math/vec3"

describe('static method', () => {
    test('create fun', () => {
        const v1 = vec3();
        const v2 = new Vec3();
        expect(v1).toEqual(v2);
    });
    test('create value', () => {
        expect(vec3()).toEqual({$x:0, $y:0, $z:0});
    });
})

describe('vec3 method', () => {
    const v1 = vec3(1, 2, 3);
    const v2 = vec3();
    test("clone not self", () => {
        expect(v1.clone()).not.toBe(v1);
    })

    test("clone is equal", () => {
        expect(v1.clone()).toEqual(v1);
    });
    const v2Copy = v1.copy(v2)
    test("copy is self", () => {
        expect(v2Copy).toBe(v1);
    });

    test("copy is equal", () => {
        expect(v2Copy).toEqual(v2);
    })
})