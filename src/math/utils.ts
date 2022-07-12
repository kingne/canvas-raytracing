import { Vec3, vec3 } from "./vec3";

function add(u: Vec3, v: Vec3, target?: Vec3) {
    const { x:u0, y:u1, z:u2 } = u;
    const { x:v0, y:v1, z:v2 } = v;
    if (target) {
        return target.set(u0 + v0, u1 + v1, u2 + v2);
    }
    return vec3(u0 + v0, u1 + v1, u2 + v2);
}

function addT(u: Vec3, t: number, target?: Vec3) {
    const { x, y, z } = u;
    if (target) {
        return target.set(x + t, y + t, z + t);
    }
    return vec3(x + t, y + t, z + t);
}

function sub(u: Vec3, v: Vec3, target?: Vec3) {
    const { x:u0, y:u1, z:u2 } = u;
    const { x:v0, y:v1, z:v2 } = v;
    if (target) {
        return target.set(u0 - v0, u1 - v1, u2 - v2);
    }
    return vec3(u0 - v0, u1 - v1, u2 - v2);
}

function mul(u: Vec3, v: Vec3, target?: Vec3) {
    const { x:u0, y:u1, z:u2 } = u;
    const { x:v0, y:v1, z:v2 } = v;
    if (target) {
        return target.set(u0 * v0, u1 * v1, u2 * v2);
    }
    return vec3(u0 * v0, u1 * v1, u2 * v2);
}

function mulT(u: Vec3, t: number, target?: Vec3) {
    const { x:u0, y:u1, z:u2 } = u;
    if (target) {
        return target.set(t * u0, t * u1, t * u2);
    }
    return vec3(t  *u0, t * u1, t * u2);
}

function divT(u: Vec3, t: number, target?: Vec3) {
    const { x:u0, y:u1, z:u2 } = u;
    if (target) {
        return target.set(u0 / t, u1 / t, u2 / t);
    }
    return vec3(u0 / t, u1 / t, u2 / t);           
}

function dot(u: Vec3, v: Vec3) {
    const { x:u0, y:u1, z:u2 } = u;
    const { x:v0, y:v1, z:v2 } = v;
    return u0*v0 + u1*v1 + u2*v2;
}

function cross(u: Vec3, v: Vec3, target?: Vec3) {
    const { x:u0, y:u1, z:u2 } = u;
    const { x:v0, y:v1, z:v2 } = v;
    if (target) {
        return target.set(
            u1 * v2 - u2 * v1,
            u2 * v0 - u0 * v2,
            u0 * v1 - u1 * v0,           
        )
    }
    return vec3(
        u1 * v2 - u2 * v1,
        u2 * v0 - u0 * v2,
        u0 * v1 - u1 * v0,  
    )
}

function reflect(v: Vec3, n: Vec3) {
    return sub(v, n.clone().mulT(2 * v.dot(n)));
}

function refract(uv: Vec3, n: Vec3, etai_over_etat: number) {
    const cos_theta = Math.min(dot(mulT(uv, -1), n), 1.0);
    const r_out_perp = add(uv, mulT(n, cos_theta)).mulT(etai_over_etat);
    const r_out_parallel = mulT(n, -Math.sqrt(Math.abs(1.0 - r_out_perp.length_squared())));
    return add(r_out_perp, r_out_parallel);
}

function unit_vector(v: Vec3) {
    return v.clone().divT(v.length());
}

function random_in_unit_sphere() {
    while(true) {
        const p = Vec3.random_double(-1, 1);
        if (p.length_squared() >= 1) continue;
        return p;
    }
}

function random_unit_vector() {
    return unit_vector(random_in_unit_sphere());
}

function random_in_hemisphere(normal: Vec3) {
    const in_unit_sphere = random_in_unit_sphere();
    if (dot(in_unit_sphere, normal) > 0) {
        return in_unit_sphere.mulT(1);
    } else {
        return in_unit_sphere.mulT(-1);
    }
}

function random_in_unit_disk() {
    while(true) {
        const p = Vec3.random_double(-1, 1).set(undefined, undefined, 0);
        if (p.length_squared() >= 1) continue;
        return p;
    }
}

const degrees_to_radians = (degrees: number) => degrees * Math.PI / 180.0;

export { add, addT, sub, mul, mulT, divT, dot, cross, reflect, refract, unit_vector, random_in_hemisphere, random_in_unit_sphere, random_unit_vector, random_in_unit_disk, degrees_to_radians }