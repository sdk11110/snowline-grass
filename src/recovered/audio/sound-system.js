/**
 * RECOVERED / ADAPTED SOURCE — Hemu Ski public build.
 * Published module: https://eric1hua.github.io/hemu-ski/assets/main-VX-cDQwL.js
 * This filename and semantic labels were recovered for local customization.
 * Third-party notices are retained; original author source was not available.
 */
/* Recovered binding Ll. Live dependencies: Fl, Il. */
export function create_Ll(__recoveredScope) {
  return {
    o: {
      f: [500, 850, 2500, 3300],
      a: [1, .5, .15, .1]
    },
    a: __recoveredScope.Fl,
    i: {
      f: [280, 2250, 2950, 3500],
      a: [.6, 2, 1.2, .6]
    },
    e: {
      f: [450, 1900, 2550, 3400],
      a: [.9, 1, .6, .3]
    },
    u: __recoveredScope.Il,
    m: {
      f: [270, 1100, 2300, 3200],
      a: [.2, .04, .02, .01],
      nose: .5,
      voice: .8
    },
    n: {
      f: [270, 1600, 2500, 3300],
      a: [.2, .06, .03, .01],
      nose: .45,
      voice: .8
    },
    p: {
      ...__recoveredScope.Fl,
      voice: 0,
      burst: true
    },
    d: {
      f: [250, 1700, 2600, 3300],
      a: [.15, .02, .01, 0],
      nose: .15,
      voice: .4
    },
    h: {
      ...__recoveredScope.Il,
      voice: .08,
      breath: .6
    },
    _: {
      f: [500, 850, 2500, 3300],
      a: [0, 0, 0, 0],
      voice: 0
    }
  };
}
/* Recovered binding Rl. Live dependencies: . */
export function create_Rl(__recoveredScope) {
  return [[`o`, .5, 0], [`m`, .4, 0], [`m`, .08, 0], [`a`, .4, 0], [`n`, .08, 0], [`i`, .4, 0], [`p`, .07, 2], [`a`, .38, 2], [`d`, .05, 2], [`m`, .08, 0], [`e`, .42, 0], [`h`, .1, 0], [`u`, .4, 0], [`m`, .75, -1], [`_`, .45, -1]];
}
/* Recovered binding zl. Live dependencies: Bl, Nl, Pl, Ll, Rl. */
export function create_zl(__recoveredScope) {
  return class {
    constructor(e, t, n) {
      this.ctx = e;
      this.out = e.createGain();
      this.out.gain.value = 0;
      this.out.connect(t);
      let r = e.createConvolver();
      r.buffer = __recoveredScope.Bl(e, 2.4);
      let i = e.createGain();
      i.gain.value = .35;
      this.out.connect(r).connect(i).connect(t);
      let a = e.createGain();
      a.connect(this.out);
      this.pitch = e.createConstantSource();
      this.pitch.offset.value = 0;
      let o = new Float32Array(48),
        s = new Float32Array(48);
      for (let e = 1; e < 48; e++) s[e] = 1 / e;
      let c = e.createPeriodicWave(o, s);
      this.voice = e.createGain();
      this.voice.gain.value = 0;
      this.sources = [this.pitch];
      for (let [t, n, r] of [[1, 1, 4.7], [1.006, .7, 5.3], [.995, .7, 4.3], [.5, .45, 3.9]]) {
        let i = e.createOscillator();
        i.setPeriodicWave(c);
        i.frequency.value = __recoveredScope.Nl * t;
        this.pitch.connect(i.detune);
        let a = e.createOscillator(),
          o = e.createGain();
        a.frequency.value = r;
        o.gain.value = 7;
        a.connect(o).connect(i.detune);
        let s = e.createGain();
        s.gain.value = n;
        i.connect(s).connect(this.voice);
        this.sources.push(i, a);
      }
      let l = e.createBufferSource();
      l.buffer = n;
      l.loop = true;
      let u = e.createBiquadFilter();
      u.type = `highpass`;
      u.frequency.value = 400;
      this.breath = e.createGain();
      this.breath.gain.value = 0;
      l.connect(u).connect(this.breath);
      this.sources.push(l);
      this.formants = __recoveredScope.Pl.map((t, n) => {
        let r = e.createBiquadFilter();
        r.type = `bandpass`;
        r.frequency.value = __recoveredScope.Ll._.f[n];
        r.Q.value = r.frequency.value / t;
        let i = e.createGain();
        return i.gain.value = 0, this.voice.connect(r), this.breath.connect(r), r.connect(i).connect(a), {
          f: r,
          g: i,
          width: t
        };
      });
      let d = e.createBiquadFilter();
      d.type = `bandpass`;
      d.frequency.value = 260;
      d.Q.value = 2.5;
      this.nose = e.createGain();
      this.nose.gain.value = 0;
      this.voice.connect(d).connect(this.nose).connect(a);
      let f = e.createBiquadFilter();
      f.type = `lowpass`;
      f.frequency.value = 200;
      let p = e.createGain();
      p.gain.value = .1;
      this.voice.connect(f).connect(p).connect(a);
      let m = e.currentTime;
      for (let e of this.sources) e.start(m);
    }
    say(e) {
      for (let [t, n, r] of __recoveredScope.Rl) {
        let i = __recoveredScope.Ll[t],
          a = t === `p` ? .012 : .03;
        this.formants.forEach(({
          f: t,
          g: n,
          width: r
        }, o) => {
          t.frequency.setTargetAtTime(i.f[o], e, a);
          t.Q.setTargetAtTime(i.f[o] / r, e, a);
          n.gain.setTargetAtTime(i.a[o], e, a);
        });
        this.nose.gain.setTargetAtTime(i.nose ?? 0, e, a);
        this.voice.gain.setTargetAtTime(i.voice ?? 1, e, t === `o` ? .08 : .02);
        this.breath.gain.setTargetAtTime(i.breath ?? 0, e, .02);
        i.burst && this.breath.gain.setValueAtTime(.5, e + n - .015);
        this.pitch.offset.setTargetAtTime(r * 100, e, .05);
        e += n;
      }
      return e;
    }
    stop() {
      let e = this.ctx.currentTime;
      for (let t of this.sources) t.stop(e);
      this.out.disconnect();
    }
  };
}
/* Recovered binding Bl. Live dependencies: . */
export function create_Bl(__recoveredScope) {
  return function Bl(e, t) {
    let n = Math.round(e.sampleRate * t),
      r = e.createBuffer(2, n, e.sampleRate);
    for (let e = 0; e < 2; e++) {
      let t = r.getChannelData(e);
      for (let e = 0; e < n; e++) t[e] = (Math.random() * 2 - 1) * Math.exp(-e / n * 7);
    }
    return r;
  };
}
/* Recovered binding Gl. Live dependencies: . */
export function create_Gl(__recoveredScope) {
  return {
    packed: {
      length: .3,
      heel: .1,
      roll: [.055, .085],
      rollFor: [.16, .2],
      rollBy: [.7, .95],
      clusters: 1900,
      bed: .2,
      thump: {
        hz: 95,
        gain: .2,
        for: .03,
        rise: .008
      },
      rms: .1,
      peak: .6,
      gain: .048
    },
    powder: {
      length: .32,
      heel: .13,
      roll: [.08, .11],
      rollFor: [.17, .21],
      rollBy: [.6, .85],
      grains: [3200, 5e3],
      ringing: [.003, .005],
      bed: .3,
      bands: [[360, 380, 1], [820, 700, .7], [1700, 1300, .22]],
      thump: {
        hz: 78,
        gain: .8,
        for: .055,
        rise: .004
      },
      rms: .18,
      peak: .98,
      gain: .078
    }
  };
}
/* Recovered binding ql. Live dependencies: Gl, Vl, Zl, Yl, Ql. */
export function create_ql(__recoveredScope) {
  return function ql(e, t = Math.random) {
    let n = __recoveredScope.Gl[e],
      r = new Float32Array(Math.round(n.length * __recoveredScope.Vl));
    return e === `packed` ? __recoveredScope.Zl(r, n, t) : __recoveredScope.Yl(r, n, t), __recoveredScope.Ql(r, n);
  };
}
/* Recovered binding Jl. Live dependencies: . */
export function create_Jl(__recoveredScope) {
  return ([e, t], n) => e + (t - e) * n();
}
/* Recovered binding Yl. Live dependencies: Vl, Jl. */
export function create_Yl(__recoveredScope) {
  return function Yl(e, t, n) {
    let r = __recoveredScope.Vl,
      i = e.length,
      a = __recoveredScope.Jl(t.roll, n),
      o = __recoveredScope.Jl(t.rollFor, n),
      s = __recoveredScope.Jl(t.rollBy, n),
      c = __recoveredScope.Jl(t.grains, n) / r,
      l = Math.exp(-1 / (__recoveredScope.Jl(t.ringing, n) * r)),
      u = .85 + n() * .3,
      d = t.bands.map(([e, t, n]) => {
        let i = Math.exp(-Math.PI * t / r);
        return {
          a1: 2 * i * Math.cos(2 * Math.PI * e * u / r),
          a2: -i * i,
          gain: n * (1 - i),
          y1: 0,
          y2: 0
        };
      }),
      f = (e, t, n) => {
        let r = (e - t) / n;
        return r <= 0 || r >= 1 ? 0 : Math.min(1, r / .12) * (1 - r) ** 1.6;
      },
      p = 0;
    for (let u = 0; u < i; u++) {
      let i = u / r,
        m = Math.min(1, f(i, 0, t.heel) + s * f(i, a, o));
      n() < c * m && (p = Math.min(1, p + .08 + .42 * n() ** 2));
      p *= l;
      let h = (n() * 2 - 1) * (p + t.bed * m),
        g = 0;
      for (let e of d) {
        let t = h + e.a1 * e.y1 + e.a2 * e.y2;
        e.y2 = e.y1;
        e.y1 = t;
        g += t * e.gain;
      }
      e[u] = g;
    }
  };
}
/* Recovered binding Xl. Live dependencies: Vl. */
export function create_Xl(__recoveredScope) {
  return function Xl(e, t, n, r, i) {
    let a = __recoveredScope.Vl,
      o = Math.round(t * a),
      s = Math.max(8, Math.round((1.5 + i() * 2.5) / n * a)),
      c = 2 * Math.PI * n / a,
      l = i() * 2 * Math.PI;
    for (let t = 0; t < s && o + t < e.length; t++) {
      let n = Math.sin(Math.PI * t / s);
      e[o + t] += r * n * n * Math.sin(l + c * t);
    }
  };
}
/* Recovered binding Zl. Live dependencies: Vl, Jl, Xl. */
export function create_Zl(__recoveredScope) {
  return function Zl(e, t, n) {
    let r = __recoveredScope.Vl,
      i = e.length,
      a = __recoveredScope.Jl(t.roll, n),
      o = __recoveredScope.Jl(t.rollFor, n),
      s = __recoveredScope.Jl(t.rollBy, n),
      c = (e, t, n) => {
        let r = (e - t) / n;
        return r <= 0 || r >= 1 ? 0 : Math.min(1, r / .25) ** 2 * (1 - r) ** 1.4;
      },
      l = Array.from({
        length: 6 + Math.floor(n() * 5)
      }, () => ({
        at: n() * t.length * .8,
        by: .5 + n() * .5,
        tau: .005 + n() * .011
      })),
      u = e => {
        let t = 0;
        for (let {
          at: n,
          by: r,
          tau: i
        } of l) e >= n && (t = Math.max(t, r * Math.exp((n - e) / i)));
        return .3 + .7 * t;
      },
      d = e => Math.min(1, c(e, 0, t.heel) + s * c(e, a, o));
    for (let r = 0; r += -Math.log(1 - n()) / t.clusters, !(r >= t.length);) {
      let t = d(r);
      if (n() > t * u(r)) continue;
      let i = n() ** 3,
        a = 2 + Math.floor(n() * 6 * (1 - i)),
        o = 6e3 + -4600 * i ** .5,
        s = r,
        c = (.3 + .2 * i) * Math.sqrt(t);
      for (let t = 0; t < a; t++) {
        __recoveredScope.Xl(e, s, o * (.8 + n() * .4), c * (.4 + .6 * n()), n);
        s += 4e-4 + n() ** 2 * .003;
        c *= .72;
      }
    }
    let f = 1 - Math.exp(-2 * Math.PI * 800 / r),
      p = 1 - Math.exp(-2 * Math.PI * 7500 / r),
      m = 1 - Math.exp(-2 * Math.PI * 150 / r),
      h = 0,
      g = 0,
      _ = 0,
      v = 0;
    for (let a = 0; a < i; a++) {
      h += f * (n() * 2 - 1 - h);
      g += f * (h - g);
      _ += p * (e[a] + g * 7 * t.bed * d(a / r) - _);
      v += m * (_ - v);
      e[a] = _ - v;
    }
  };
}
/* Recovered binding Ql. Live dependencies: Vl. */
export function create_Ql(__recoveredScope) {
  return function Ql(e, t) {
    let n = __recoveredScope.Vl,
      r = e.length,
      {
        hz: i,
        gain: a,
        for: o,
        rise: s
      } = t.thump,
      c = 0;
    for (let t of e) c += t * t;
    let l = t.rms / Math.sqrt(c / r + 1e-12),
      u = 0;
    for (let c = 0; c < r; c++) {
      let r = c / n;
      e[c] = e[c] * l + a * t.rms * Math.sin(2 * Math.PI * i * r) * Math.exp(-r / o) * Math.min(1, r / s);
      u = Math.max(u, Math.abs(e[c]));
    }
    let d = u > t.peak ? t.peak / u : 1,
      f = Math.round(.012 * n);
    for (let t = 0; t < r; t++) e[t] *= d * Math.min(1, (r - 1 - t) / f);
    return e;
  };
}
/* Recovered binding $l. Live dependencies: Kl, Hl, ql, Vl, Ul, Wl, Gl. */
export function create_Dollarl(__recoveredScope) {
  return class {
    constructor(e, t) {
      this.ctx = e;
      this.out = t;
      this.banks = {};
      for (let t of __recoveredScope.Kl) this.banks[t] = Array.from({
        length: __recoveredScope.Hl
      }, () => {
        let n = __recoveredScope.ql(t),
          r = e.createBuffer(1, n.length, __recoveredScope.Vl);
        return r.copyToChannel(n, 0), r;
      });
      this.ends = new Float64Array(__recoveredScope.Ul);
      this.turn = 0;
      this.last = 0;
    }
    play(e, t = 0, n = 1) {
      let {
          ctx: r
        } = this,
        i = r.currentTime,
        a = -1;
      for (let e = 0; e < __recoveredScope.Ul && a < 0; e++) this.ends[e] <= i && (a = e);
      if (a < 0) {
        if (e < __recoveredScope.Wl) return false;
        a = this.turn = (this.turn + 1) % __recoveredScope.Ul;
      }
      let o = Math.random() < t ? `powder` : `packed`,
        s = this.banks[o];
      this.last = (this.last + 1 + Math.floor(Math.random() * 3)) % __recoveredScope.Hl;
      let c = r.createBufferSource(),
        l = r.createGain();
      return c.buffer = s[this.last], c.playbackRate.value = n * (.92 + Math.random() * .16), l.gain.value = __recoveredScope.Gl[o].gain * e * (.85 + Math.random() * .3), c.connect(l).connect(this.out), c.start(), this.ends[a] = i + c.buffer.duration / c.playbackRate.value, true;
    }
  };
}
/* Recovered binding eu. Live dependencies: $l, zl. */
export function create_eu(__recoveredScope) {
  return class {
    constructor() {
      this.ctx = null;
      this.sfxOn = true;
      this.musicOn = true;
    }
    start() {
      if (this.ctx) {
        this.resume();
        return;
      }
      let e = this.ctx = new AudioContext();
      this.sfx = e.createGain();
      this.sfx.gain.value = +!!this.sfxOn;
      this.sfx.connect(e.destination);
      this.music = e.createGain();
      this.music.gain.value = +!!this.musicOn;
      this.music.connect(e.destination);
      let t = e.createBuffer(1, e.sampleRate * 2, e.sampleRate),
        n = t.getChannelData(0);
      for (let e = 0; e < n.length; e++) n[e] = Math.random() * 2 - 1;
      this.noiseBuf = t;
      let r = () => {
        let n = e.createBufferSource();
        return n.buffer = t, n.loop = true, n.start(), n;
      };
      this.windF = e.createBiquadFilter();
      this.windF.type = `bandpass`;
      this.windF.Q.value = .7;
      this.windG = e.createGain();
      this.windG.gain.value = 0;
      r().connect(this.windF).connect(this.windG).connect(this.sfx);
      this.scrapeF = e.createBiquadFilter();
      this.scrapeF.type = `highpass`;
      this.scrapeF.frequency.value = 1800;
      this.scrapeG = e.createGain();
      this.scrapeG.gain.value = 0;
      r().connect(this.scrapeF).connect(this.scrapeG).connect(this.sfx);
      this.waterF = e.createBiquadFilter();
      this.waterF.type = `bandpass`;
      this.waterF.Q.value = 2.5;
      this.waterG = e.createGain();
      this.waterG.gain.value = 0;
      r().connect(this.waterF).connect(this.waterG).connect(this.sfx);
      this.pantF = e.createBiquadFilter();
      this.pantF.type = `bandpass`;
      this.pantF.frequency.value = 1500;
      this.pantF.Q.value = 1.2;
      this.pantG = e.createGain();
      this.pantG.gain.value = 0;
      this.pantLfo = e.createOscillator();
      this.pantLfo.frequency.value = 2.8;
      this.pantDepth = e.createGain();
      this.pantDepth.gain.value = 0;
      this.pantLfo.connect(this.pantDepth).connect(this.pantG.gain);
      this.pantLfo.start();
      r().connect(this.pantF).connect(this.pantG).connect(this.sfx);
      this.engF = e.createBiquadFilter();
      this.engF.type = `lowpass`;
      this.engF.Q.value = 2;
      this.engG = e.createGain();
      this.engG.gain.value = 0;
      this.engF.connect(this.engG).connect(this.sfx);
      this.eng = [`sawtooth`, `square`].map((t, n) => {
        let r = e.createOscillator();
        r.type = t;
        let i = e.createGain();
        return i.gain.value = n ? .6 : 1, r.connect(i).connect(this.engF), r.start(), r;
      });
      this.crunches = new __recoveredScope.$l(e, this.sfx);
    }
    resume() {
      this.ctx && this.ctx.state !== `running` && this.ctx.state !== `closed` && this.ctx.resume().catch(() => {});
    }
    listen() {
      for (let e of [`pointerup`, `touchend`, `click`, `keydown`]) window.addEventListener(e, () => this.start(), {
        capture: true,
        passive: true
      });
    }
    setSfx(e) {
      this.sfxOn = e;
      this.ctx && this.sfx.gain.setTargetAtTime(+!!e, this.ctx.currentTime, .05);
    }
    async prepareFireball() {
      this.ctx && (this.fireballVoicePromise ||= fetch(`./audio/fireball-v01/hadouken-voice-v02.mp3`).then(e => {
        if (!e.ok) throw Error(`Voice unavailable`);
        return e.arrayBuffer();
      }).then(e => this.ctx.decodeAudioData(e)).catch(e => (console.warn(`Fireball voice unavailable:`, e), this.fireballVoicePromise = null, null)), this.fireballVoice = await this.fireballVoicePromise);
    }
    fireballShout() {
      if (!this.ctx || !this.fireballVoice) return;
      this.stopFireballShout();
      let e = this.ctx.createBufferSource();
      e.buffer = this.fireballVoice;
      e.connect(this.sfx);
      e.onended = () => {
        this.fireballVoiceSource === e && (this.fireballVoiceSource = null);
      };
      this.fireballVoiceSource = e;
      e.start();
    }
    stopFireballShout() {
      this.fireballVoiceSource &&= (this.fireballVoiceSource.stop(), null);
    }
    fireballLaunch() {
      if (!this.ctx) return;
      let e = this.ctx.currentTime;
      this.#t(e, .42, 1300, .17, `bandpass`);
      let t = this.ctx.createOscillator();
      t.type = `sine`;
      t.frequency.setValueAtTime(460, e);
      t.frequency.exponentialRampToValueAtTime(120, e + .3);
      t.connect(this.#e(e, .008, .32, .12)).connect(this.sfx);
      t.start(e);
      t.stop(e + .34);
    }
    setWater(e) {
      if (!this.ctx) return;
      let t = this.ctx.currentTime;
      this.waterG.gain.setTargetAtTime(e * .08, t, .3);
      e > 0 && this.waterF.frequency.setTargetAtTime(700 + Math.random() * 1600, t, .025);
    }
    setMantra(e) {
      if (!this.ctx) return;
      let t = this.ctx.currentTime;
      e > .01 && !this.mantra && (this.mantra = new __recoveredScope.zl(this.ctx, this.sfx, this.noiseBuf), this.mantraNext = t + .05);
      let n = this.mantra;
      if (n) {
        if (e > .01) this.mantraHeard = t;else if (t - this.mantraHeard > 3) {
          n.stop();
          this.mantra = null;
          return;
        }
        for (n.out.gain.setTargetAtTime(e * .25, t, .35), this.mantraNext < t && (this.mantraNext = t + .05); this.mantraNext < t + .5;) this.mantraNext = n.say(this.mantraNext);
      }
    }
    bark(e = 1) {
      if (!this.ctx || e <= .01) return;
      let t = this.ctx,
        n = t.currentTime + .01,
        r = 300 + Math.random() * 70,
        i = t.createOscillator();
      i.type = `sawtooth`;
      i.frequency.setValueAtTime(r * .8, n);
      i.frequency.linearRampToValueAtTime(r * 1.2, n + .03);
      i.frequency.exponentialRampToValueAtTime(r * .5, n + .2);
      let a = t.createBiquadFilter();
      a.type = `bandpass`;
      a.Q.value = 1.4;
      a.frequency.setValueAtTime(1100, n);
      a.frequency.exponentialRampToValueAtTime(520, n + .2);
      let o = this.#e(n, .012, .22, .5 * e);
      i.connect(a).connect(o).connect(this.sfx);
      i.start(n);
      i.stop(n + .26);
      this.#t(n, .12, 2400, .12 * e, `highpass`);
    }
    whine(e = 1) {
      if (!this.ctx || e <= .01) return;
      let t = this.ctx,
        n = t.currentTime + .01,
        r = t.createOscillator();
      r.frequency.setValueAtTime(760, n);
      r.frequency.linearRampToValueAtTime(1150, n + .25);
      r.frequency.linearRampToValueAtTime(820, n + .7);
      let i = t.createOscillator(),
        a = t.createGain();
      i.frequency.value = 7;
      a.gain.value = 25;
      i.connect(a).connect(r.frequency);
      let o = this.#e(n, .08, .75, .06 * e);
      r.connect(o).connect(this.sfx);
      r.start(n);
      i.start(n);
      r.stop(n + .8);
      i.stop(n + .8);
    }
    pop(e = 1) {
      this.ctx && this.#t(this.ctx.currentTime, .12, 900, .25 * e, `lowpass`);
    }
    thud(e = 1) {
      this.ctx && this.#t(this.ctx.currentTime, .09, 380, .3 * e, `lowpass`);
    }
    swish(e = 1) {
      this.ctx && this.#t(this.ctx.currentTime, .14, 2600, .06 * e, `bandpass`);
    }
    hoof(e = 1, t = 0) {
      if (!this.ctx || e <= .01) return;
      let n = this.ctx,
        r = n.currentTime + Math.random() * .01,
        i = n.createOscillator();
      i.frequency.setValueAtTime(105 - 25 * t + Math.random() * 12, r);
      i.frequency.exponentialRampToValueAtTime(48, r + .1);
      i.connect(this.#e(r, .004, .12, .2 * e * (1 - .35 * t))).connect(this.sfx);
      i.start(r);
      i.stop(r + .15);
      t < .95 && this.#t(r, .055, 2e3 + Math.random() * 600, .07 * e * (1 - t), `bandpass`);
      t > .05 && this.#t(r, .16, 520, .11 * e * t, `lowpass`);
    }
    crunch(e = 1, t = 0, n = 1) {
      !this.ctx || e <= .01 || this.crunches.play(e, t, n);
    }
    breath(e = 1, t = true) {
      if (!this.ctx || e <= .01) return;
      let n = this.ctx,
        r = n.currentTime + .005,
        i = t ? .26 : .15,
        a = n.createBufferSource();
      a.buffer = this.noiseBuf;
      let o = n.createBiquadFilter();
      o.type = `bandpass`;
      o.Q.value = 1.1;
      o.frequency.setValueAtTime(t ? 560 : 1100, r);
      o.frequency.exponentialRampToValueAtTime(t ? 380 : 1400, r + i);
      let s = this.#e(r, t ? .03 : .05, i, (t ? .16 : .06) * e),
        c = n.createGain();
      if (c.gain.value = 1, a.connect(o).connect(c).connect(s).connect(this.sfx), t) {
        let t = n.createOscillator(),
          a = n.createGain();
        t.frequency.value = 22 + Math.random() * 8;
        a.gain.value = .6 * e;
        t.connect(a).connect(c.gain);
        t.start(r);
        t.stop(r + i + .05);
      }
      a.start(r, Math.random());
      a.stop(r + i + .05);
    }
    setPant(e) {
      if (!this.ctx) return;
      let t = this.ctx.currentTime;
      this.pantG.gain.setTargetAtTime(e * .018, t, .2);
      this.pantDepth.gain.setTargetAtTime(e * .018, t, .2);
    }
    #e(e, t, n, r) {
      let i = this.ctx.createGain();
      return i.gain.setValueAtTime(1e-4, e), i.gain.exponentialRampToValueAtTime(r, e + t), i.gain.exponentialRampToValueAtTime(1e-4, e + n), i;
    }
    #t(e, t, n, r, i) {
      let a = this.ctx.createBufferSource();
      a.buffer = this.noiseBuf;
      let o = this.ctx.createBiquadFilter();
      o.type = i;
      o.frequency.value = n;
      a.connect(o).connect(this.#e(e, .008, t, r)).connect(this.sfx);
      a.start(e, Math.random());
      a.stop(e + t + .05);
    }
    setMusic(e) {
      this.musicOn = e;
      this.ctx && this.music.gain.setTargetAtTime(+!!e, this.ctx.currentTime, .05);
    }
    update(e, t, n, r = null) {
      if (!this.ctx) return;
      let i = this.ctx.currentTime,
        a = Math.min(1, e / 25);
      this.windG.gain.setTargetAtTime(.02 + a * a * .22, i, .2);
      this.windF.frequency.setTargetAtTime(300 + a * 900, i, .2);
      let o = n ? Math.min(1, t / 6) * Math.min(1, e / 5) : 0;
      this.scrapeG.gain.setTargetAtTime(n ? .015 + o * .12 : 0, i, .05);
      let s = +!!r?.throttle,
        c,
        l;
      if (r?.kind === `jetson`) {
        let e = r.spool * (.55 + r.load * .45);
        c = 60 + e * 120;
        l = 500 + e * 1700;
      } else if (r?.kind === `snowmobile`) {
        let e = s * .45 + .15 + Math.min(1, r.speed / 55) * .4;
        c = 58 + e * 120;
        l = 380 + e * 900 + s * 300;
      } else {
        let e = r ? Math.min(4, Math.floor(r.speed / 7)) : 0,
          t = r ? Math.min(1.1, (r.speed - e * 7) / 7 * (e ? .65 : 1) + (e ? .35 : 0)) : 0;
        c = 34 + t * 52 + s * 6;
        l = 220 + t * 260 + s * 420;
      }
      this.eng.forEach((e, t) => e.frequency.setTargetAtTime(t ? c / 2 : c, i, .08));
      this.engF.frequency.setTargetAtTime(l, i, .08);
      this.engG.gain.setTargetAtTime(r ? (.05 + s * .05) * (r.spool ?? 1) : 0, i, r ? .1 : .3);
    }
  };
}
