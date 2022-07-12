import { classIdNames } from "../constant";

class Vec3 {

    public static create(x = 0, y = 0, z = 0) {
        return new Vec3(x, y, z);
    }

    public static random() {
        const r = Math.random;
        const x = r();
        const y = r();
        const z = r();
        return new Vec3(x, y, z);
    }

    public static random_double(min: number, max: number) {
        const rdb = (min: number, max: number) => min + (max - min) * Math.random();
        const x = rdb(min, max);
        const y = rdb(min, max);
        const z = rdb(min, max);
        return new Vec3(x, y, z);
    }

    private $x: number;
    private $y: number;
    private $z: number;

    constructor(x = 0, y = 0, z = 0) {
        this.$x = x;
        this.$y = y;
        this.$z = z;
    }

    public get classId() {
        return classIdNames.Vec3;
    }

    public get x() {
        return this.$x;
    }

    public get y() {
        return this.$y;
    }

    public get z() {
        return this.$z;
    }

    public set(x?: number, y?: number, z?: number) {
        this.$x = x || this.$x;
        this.$y = y || this.$y;
        this.$z = z || this.$z;
        return this;
    }

    public copy(v: Vec3) {
        this.$x = v.x;
        this.$y = v.y;
        this.$z = v.z;
        return this;
    }

    public add(v:Vec3) {
        this.$x += v.x;
        this.$y += v.y;
        this.$z += v.z;
        return this;
    }

    public sub(v: Vec3) {
        this.$x -= v.x;
        this.$y -= v.y;
        this.$z -= v.z;
        return this;
    }

    public dot(v: Vec3) {
        const { $x, $y, $z } = this;
        const { x, y, z } = v;
        return $x * x + $y * y + $z * z;
    }

    public cross(v: Vec3) {
        const { $x:u0, $y:u1, $z:u2 } = this;
        const { x:v0, y:v1, z:v2 } = v;
        return this.set(
            u1 * v2 - u2 * v1,
            u2 * v0 - u0 * v2,
            u0 * v1 - u1 * v0,     
        )
    }

    public mulT(t: number) {
        this.$x *= t;
        this.$y *= t;
        this.$z *= t;
        return this;
    }

    public divT(t: number) {
        if (t !== 0) {
            this.$x /= t;
            this.$y /= t;
            this.$z /= t;
        }
        return this;
    }

    public clone() {
        const { $x:x, $y:y, $z:z } = this;
        return new Vec3(x, y, z);
    }

    public normalize() {
        this.divT(this.length() || 1);
    }

    public length_squared() {
        const { $x, $y, $z } = this;
        return $x * $x + $y * $y + $z * $z;
    }

    public length() {
        return Math.sqrt(this.length_squared());
    }

    public negate() {
        return this.mulT(-1);
    }

    public near_zero() {
        const s = 1e-8;
        const { $x, $y, $z } = this;
        const abs = Math.abs;
        return (abs($x) < s) && (abs($y) < s) && (abs($z) < s);
    }
}

const vec3 = Vec3.create;

export { Vec3, vec3 }