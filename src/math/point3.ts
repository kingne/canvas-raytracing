import { classIdNames } from "../constant";
import { Vec3 } from "./vec3";

class Point3 extends Vec3 {
    public get classId() {
        return classIdNames.Point3;
    }
}

const point3 = Point3.create;

export { Point3, point3 };