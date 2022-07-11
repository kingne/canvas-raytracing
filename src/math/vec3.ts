import { classIdNames } from "../constant";

class Vec3 {

    public static create(x = 0, y = 0, z = 0) {
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
}

const vec3 = Vec3.create;

export { Vec3, vec3 }