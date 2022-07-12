import { classIdNames } from "../constant";
import { Vec3 } from "./vec3"

class Color extends Vec3 {
    public get classId() {
        return classIdNames.Color;
    }
}

const color = Color.create;

export { Color, color };