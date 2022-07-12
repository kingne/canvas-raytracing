import { add, mulT } from "./utils";
import { vec3, Vec3 } from "./vec3";

class Ray {

    static crate(origin = vec3(), direction = vec3()) {
        return new Ray(origin, direction);
    }

    private $origin: Vec3;
    private $direction: Vec3;
    constructor(origin: Vec3, direction: Vec3) {
        this.$origin = origin;
        this.$direction = direction;
    }

    public get origin() {
        return this.$origin.clone();
    }

    public get direction() {
        return this.$direction.clone();
    }

    public at(t: number) {
        const { $origin, $direction } = this;
        const res = vec3();
        mulT($direction, t, res);
        return add($origin, res, res);
    }

    public copy(r: Ray) {
        this.$origin.copy(r.origin);
        this.$direction.copy(r.direction);
        return this;
    }
}