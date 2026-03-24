"use client";

import { useEffect, useRef } from "react";

const VS = `
  attribute vec2 position;
  void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

const FS = `
  precision highp float;
  uniform float time;
  uniform vec2 resolution;
  uniform vec2 mouse;
  uniform float mouseVelocity;

  vec3 mod289(vec3 x) { return x - floor(x / 289.0) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x / 289.0) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0,i1.y,1.0)) + i.x + vec3(0.0,i1.x,1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p) {
    float val = 0.0;
    float amp = 0.5;
    float freq = 1.0;
    for (int i = 0; i < 4; i++) {
      val += amp * (snoise(p * freq) * 0.5 + 0.5);
      freq *= 2.1;
      amp *= 0.5;
      p += vec2(1.7, 3.2);
    }
    return val;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution;
    vec2 aspect = vec2(resolution.x / resolution.y, 1.0);

    float cloud1 = fbm(vec2(uv.x * 3.0 + time * 0.03, uv.y * 3.0 + time * 0.02));
    float cloud2 = fbm(vec2(uv.x * 2.5 - time * 0.025, uv.y * 2.5 + time * 0.035 + 5.0));
    float cloud3 = fbm(vec2(uv.x * 4.0 + time * 0.04, uv.y * 3.5 - time * 0.02 + 10.0));
    float cloud4 = fbm(vec2(uv.x * 2.0 + time * 0.015, uv.y * 2.0 + time * 0.025 + 15.0));

    float nebulaShape = smoothstep(0.15, 0.5, cloud1) * smoothstep(0.9, 0.55, cloud1);
    nebulaShape += smoothstep(0.2, 0.6, cloud2) * 0.6;
    nebulaShape = clamp(nebulaShape, 0.0, 1.0);

    vec2 mouseUV = mouse;
    float mouseDist = length((uv - mouseUV) * aspect);
    float mouseInfluence = exp(-mouseDist * 1.8) * (0.5 + mouseVelocity * 1.5);
    float mouseCore = exp(-mouseDist * 3.0) * 0.8;
    nebulaShape += mouseInfluence * 0.4;

    vec3 teal   = vec3(0.169, 0.541, 0.494);
    vec3 purple = vec3(0.357, 0.290, 0.620);
    vec3 pink   = vec3(0.620, 0.290, 0.478);
    vec3 darkBg = vec3(0.039, 0.078, 0.125);
    vec3 deepBg = vec3(0.020, 0.035, 0.070);

    vec3 nebula = teal * cloud1 * nebulaShape * 0.5
                + purple * cloud2 * nebulaShape * 0.45
                + pink * cloud3 * nebulaShape * 0.3
                + mix(teal, purple, cloud4) * nebulaShape * 0.25;

    vec3 coreColor = mix(teal, vec3(0.8, 0.9, 0.95), 0.3);
    nebula += coreColor * mouseCore * 0.5;

    float detail = snoise(uv * 15.0 + time * 0.08) * 0.5 + 0.5;
    detail = pow(detail, 3.0) * nebulaShape * 0.12;
    nebula += mix(pink, teal, detail) * detail;

    vec3 mouseGlow = mix(teal, pink, sin(time * 0.2) * 0.5 + 0.5) * mouseInfluence * 0.4;

    vec3 col = mix(deepBg, darkBg, uv.y * 0.4 + cloud4 * 0.2);
    col += nebula * 0.85;
    col += mouseGlow;

    float vig = 1.0 - length((uv - 0.5) * 1.2);
    vig = smoothstep(0.0, 0.75, vig);

    float stars = snoise(uv * 60.0 + 100.0);
    stars = smoothstep(0.82, 1.0, stars) * 0.2 * (1.0 - nebulaShape * 0.7);

    float faintStars = snoise(uv * 120.0 + 200.0);
    faintStars = smoothstep(0.9, 1.0, faintStars) * 0.08;

    col = col * vig + deepBg * (1.0 - vig);
    col += vec3(stars) + vec3(faintStars);

    gl_FragColor = vec4(col, 1.0);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(s));
    gl.deleteShader(s);
    return null;
  }
  return s;
}

export default function NebulaCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const vs = createShader(gl, gl.VERTEX_SHADER, VS);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FS);
    if (!vs || !fs) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const verts = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "time");
    const uRes = gl.getUniformLocation(program, "resolution");
    const uMouse = gl.getUniformLocation(program, "mouse");
    const uVel = gl.getUniformLocation(program, "mouseVelocity");

    let targetX = 0.5, targetY = 0.5;
    let currentX = 0.5, currentY = 0.5;
    let prevX = 0.5, prevY = 0.5;
    let velocity = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX / window.innerWidth;
      targetY = 1.0 - e.clientY / window.innerHeight;
    };
    document.addEventListener("mousemove", onMouseMove);

    const startTime = Date.now();

    const render = () => {
      const t = (Date.now() - startTime) * 0.001;

      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;

      const dx = currentX - prevX;
      const dy = currentY - prevY;
      velocity += (Math.sqrt(dx * dx + dy * dy) * 50 - velocity) * 0.1;
      velocity = Math.min(velocity, 2.0);
      prevX = currentX;
      prevY = currentY;

      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, currentX, currentY);
      gl.uniform1f(uVel, velocity);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    };

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen z-0"
    />
  );
}
