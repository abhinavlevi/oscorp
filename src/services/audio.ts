// Native HTML5 Web Audio API Synthesizer for high-tech Oscorp laboratory soundscapes

class SoundSystem {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  constructor() {
    // Check localStorage for audio preference
    try {
      const saved = localStorage.getItem('oscorp_audio_muted');
      if (saved !== null) {
        this.isMuted = saved === 'true';
      }
    } catch {
      this.isMuted = false;
    }
  }

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    try {
      localStorage.setItem('oscorp_audio_muted', String(this.isMuted));
    } catch {
      // ignore
    }
    if (!this.isMuted) {
      this.playTerminalChirp(680, 0.05);
    }
    return this.isMuted;
  }

  // Subtle mechanical terminal chirp on toggle / switch
  public playTerminalChirp(freq = 1200, duration = 0.04) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // AudioContext may be restricted by browser until user gesture
    }
  }

  // Switch sound for style buttons
  public playSwitchTone() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(880, now + 0.03);

      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(now + 0.08);
    } catch {
      // ignore
    }
  }

  // High-tech authorization scan hum with resonant confirmation chime on download
  public playAuthHumAndChime() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // 1. Authorization Scan Hum (Low frequency saw/triangle sweeping upward)
      const humOsc = this.ctx.createOscillator();
      const humGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(250, now);
      filter.frequency.exponentialRampToValueAtTime(1400, now + 0.45);

      humOsc.type = 'sawtooth';
      humOsc.frequency.setValueAtTime(90, now);
      humOsc.frequency.exponentialRampToValueAtTime(320, now + 0.45);

      humGain.gain.setValueAtTime(0.01, now);
      humGain.gain.linearRampToValueAtTime(0.06, now + 0.35);
      humGain.gain.exponentialRampToValueAtTime(0.001, now + 0.48);

      humOsc.connect(filter);
      filter.connect(humGain);
      humGain.connect(this.ctx.destination);

      humOsc.start(now);
      humOsc.stop(now + 0.5);

      // 2. High-Tech Confirmation Chime (Two-tone resonant bell at 0.45s)
      const chimeTime = now + 0.42;

      // Tone 1: 1046.5 Hz (C6)
      const c1 = this.ctx.createOscillator();
      const g1 = this.ctx.createGain();
      c1.type = 'sine';
      c1.frequency.setValueAtTime(1046.5, chimeTime);

      g1.gain.setValueAtTime(0.08, chimeTime);
      g1.gain.exponentialRampToValueAtTime(0.0001, chimeTime + 0.7);

      c1.connect(g1);
      g1.connect(this.ctx.destination);
      c1.start(chimeTime);
      c1.stop(chimeTime + 0.7);

      // Tone 2: 1567.98 Hz (G6 harmonic)
      const c2 = this.ctx.createOscillator();
      const g2 = this.ctx.createGain();
      c2.type = 'sine';
      c2.frequency.setValueAtTime(1567.98, chimeTime + 0.08);

      g2.gain.setValueAtTime(0.06, chimeTime + 0.08);
      g2.gain.exponentialRampToValueAtTime(0.0001, chimeTime + 0.8);

      c2.connect(g2);
      g2.connect(this.ctx.destination);
      c2.start(chimeTime + 0.08);
      c2.stop(chimeTime + 0.8);
    } catch {
      // ignore
    }
  }
}

export const soundSystem = new SoundSystem();
