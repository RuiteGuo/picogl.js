///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2017 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////

(function() {
    "use strict";


    NanoGL.FloatUniform = function FloatUniform(gl, handle) {
        this.gl = gl;
        this.handle = handle;
        this.cache = 0;
    };

    NanoGL.FloatUniform.prototype.set = function(value) {
        if (this.cache !== value) {
            this.gl.uniform1f(this.handle, value);
            this.cache = value;
        }
    };

    NanoGL.IntUniform = function IntUniform(gl, handle) {
        this.gl = gl;
        this.handle = handle;
        this.cache = 0;
    };

    NanoGL.IntUniform.prototype.set = function(value) {
        if (this.cache !== value) {
            this.gl.uniform1i(this.handle, value);
            this.cache = value;
        }
    };

    NanoGL.Vec2Uniform = function Vec2Uniform(gl, handle) {
        this.gl = gl;
        this.handle = handle;
        this.cache = new Float32Array(2);
    };

    NanoGL.Vec2Uniform.prototype.set = function(value) {
        if (this.cache[0] !== value[0] ||
            this.cache[1] !== value[1]) {
            this.gl.uniform2fv(this.handle, value);
            this.cache.set(value);
        }
    };

    NanoGL.Vec3Uniform = function Vec3Uniform(gl, handle) {
        this.gl = gl;
        this.handle = handle;
        this.cache = new Float32Array(3);
    };

    NanoGL.Vec3Uniform.prototype.set = function(value) {
        if (this.cache[0] !== value[0] ||
            this.cache[1] !== value[1] ||
            this.cache[2] !== value[2]) {
            this.gl.uniform3fv(this.handle, value);
            this.cache.set(value);
        }
    };

    NanoGL.Vec4Uniform = function Vec4Uniform(gl, handle) {
        this.gl = gl;
        this.handle = handle;
        this.cache = new Float32Array(4);
    };

    NanoGL.Vec4Uniform.prototype.set = function(value) {
        if (this.cache[0] !== value[0] ||
            this.cache[1] !== value[1] ||
            this.cache[2] !== value[2] ||
            this.cache[3] !== value[3]) {
            this.gl.uniform4fv(this.handle, value);
            this.cache.set(value);
        }
    };

    NanoGL.IntVec2Uniform = function IntVec2Uniform(gl, handle) {
        this.gl = gl;
        this.handle = handle;
        this.cache = new Int32Array(2);
    };

    NanoGL.IntVec2Uniform.prototype.set = function(value) {
        if (this.cache[0] !== value[0] ||
            this.cache[1] !== value[1]) {
            this.gl.uniform2iv(this.handle, value);
            this.cache.set(value);
        }
    };

    NanoGL.IntVec3Uniform = function IntVec3Uniform(gl, handle) {
        this.gl = gl;
        this.handle = handle;
        this.cache = new Int32Array(3);
    };

    NanoGL.IntVec3Uniform.prototype.set = function(value) {
        if (this.cache[0] !== value[0] ||
            this.cache[1] !== value[1] ||
            this.cache[2] !== value[2]) {
            this.gl.uniform3iv(this.handle, value);
            this.cache.set(value);
        }
    };

    NanoGL.IntVec4Uniform = function IntVec4Uniform(gl, handle) {
        this.gl = gl;
        this.handle = handle;
        this.cache = new Int32Array(4);
    };

    NanoGL.IntVec4Uniform.prototype.set = function(value) {
        if (this.cache[0] !== value[0] ||
            this.cache[1] !== value[1] ||
            this.cache[2] !== value[2] ||
            this.cache[3] !== value[3]) {
            this.gl.uniform4iv(this.handle, value);
            this.cache.set(value);
        }
    };

    NanoGL.BoolVec2Uniform = function BoolVec2Uniform(gl, handle) {
        this.gl = gl;
        this.handle = handle;
        this.cache = [false, false];
    };

    NanoGL.BoolVec2Uniform.prototype.set = function(value) {
        if (this.cache[0] !== value[0] ||
            this.cache[1] !== value[1]) {
            this.gl.uniform2iv(this.handle, value);
            this.cache[0] = value[0];
            this.cache[1] = value[1];
        }
    };

    NanoGL.BoolVec3Uniform = function BoolVec3Uniform(gl, handle) {
        this.gl = gl;
        this.handle = handle;
        this.cache = [false, false, false];
    };

    NanoGL.BoolVec3Uniform.prototype.set = function(value) {
        if (this.cache[0] !== value[0] ||
            this.cache[1] !== value[1] ||
            this.cache[2] !== value[2]) {
            this.gl.uniform3iv(this.handle, value);
            this.cache[0] = value[0];
            this.cache[1] = value[1];
            this.cache[2] = value[2];
        }
    };

    NanoGL.BoolVec4Uniform = function BoolVec4Uniform(gl, handle) {
        this.gl = gl;
        this.handle = handle;
        this.cache = [false, false, false, false];
    };

    NanoGL.BoolVec4Uniform.prototype.set = function(value) {
        if (this.cache[0] !== value[0] ||
            this.cache[1] !== value[1] ||
            this.cache[2] !== value[2] ||
            this.cache[3] !== value[3]) {
            this.gl.uniform4iv(this.handle, value);
            this.cache[0] = value[0];
            this.cache[1] = value[1];
            this.cache[2] = value[2];
            this.cache[3] = value[3];
        }
    };

    NanoGL.Mat2Uniform = function Mat2Uniform(gl, handle) {
        this.gl = gl;
        this.handle = handle;
        this.cache = new Float32Array(4);
    };

    NanoGL.Mat2Uniform.prototype.set = function(value) {
        if (this.cache[0] !== value[0] ||
            this.cache[1] !== value[1] ||
            this.cache[2] !== value[2] ||
            this.cache[3] !== value[3]) {
            this.gl.uniformMatrix2fv(this.handle, false, value);
            this.cache.set(value);
        }
    };

    NanoGL.Mat3Uniform = function Mat3Uniform(gl, handle) {
        this.gl = gl;
        this.handle = handle;
        this.cache = new Float32Array(9);
    };

    NanoGL.Mat3Uniform.prototype.set = function(value) {
        if (this.cache[0] !== value[0] ||
            this.cache[1] !== value[1] ||
            this.cache[2] !== value[2] ||
            this.cache[3] !== value[3] ||
            this.cache[4] !== value[4] ||
            this.cache[5] !== value[5] ||
            this.cache[6] !== value[6] ||
            this.cache[7] !== value[7] ||
            this.cache[8] !== value[8]) {
            this.gl.uniformMatrix3fv(this.handle, false, value);
            this.cache.set(value);
        }
    };

    NanoGL.Mat4Uniform = function Mat4Uniform(gl, handle) {
        this.gl = gl;
        this.handle = handle;
        this.cache = new Float32Array(16);
    };

    NanoGL.Mat4Uniform.prototype.set = function(value) {
        if (this.cache[0] !== value[0] ||
            this.cache[1] !== value[1] ||
            this.cache[2] !== value[2] ||
            this.cache[3] !== value[3] ||
            this.cache[4] !== value[4] ||
            this.cache[5] !== value[5] ||
            this.cache[6] !== value[6] ||
            this.cache[7] !== value[7] ||
            this.cache[8] !== value[8] ||
            this.cache[9] !== value[9] ||
            this.cache[10] !== value[10] ||
            this.cache[11] !== value[11] ||
            this.cache[12] !== value[12] ||
            this.cache[13] !== value[13] ||
            this.cache[14] !== value[14] ||
            this.cache[15] !== value[15]) {
            this.gl.uniformMatrix4fv(this.handle, false, value);
            this.cache.set(value);
        }
    };

})();
