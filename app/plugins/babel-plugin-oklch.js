/**
 * Babel plugin: converts "oklch(...)" string literals to "rgba(...)" at
 * compile (bundle) time so React Native's color parser can handle them.
 *
 * Supports both percentage and decimal lightness:
 *   oklch(50% 0.15 250)  →  oklch(0.5 0.15 250)  internally
 */

function oklchToRgba(raw) {
  // Remove commas (modern syntax uses spaces, legacy may use commas)
  const parts = raw.trim().replace(/,/g, ' ').split(/\s+/).filter(Boolean);
  if (parts.length < 3) return null;

  let L = parseFloat(parts[0]);
  if (parts[0].endsWith('%')) L /= 100;

  const C = parseFloat(parts[1]);
  const H = parseFloat(parts[2]);
  const alpha = parts[3] !== undefined ? parseFloat(parts[3].replace('%', '')) / (parts[3].endsWith('%') ? 100 : 1) : 1;

  if (isNaN(L) || isNaN(C) || isNaN(H)) return null;

  // OKLCH → OKLab
  const hRad = (H * Math.PI) / 180;
  const a = C * Math.cos(hRad);
  const b = C * Math.sin(hRad);

  // OKLab → LMS (linear intermediate)
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;

  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;

  // LMS → linear sRGB
  let r =  4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  let g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  let bv = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s;

  // Linear sRGB → sRGB (gamma)
  const toSrgb = (c) => {
    const clamped = Math.max(0, Math.min(1, c));
    return clamped <= 0.0031308
      ? 12.92 * clamped
      : 1.055 * Math.pow(clamped, 1 / 2.4) - 0.055;
  };

  const R = Math.round(toSrgb(r) * 255);
  const G = Math.round(toSrgb(g) * 255);
  const B = Math.round(toSrgb(bv) * 255);
  const A = Math.round(Math.max(0, Math.min(1, alpha)) * 100) / 100;

  return `rgba(${R}, ${G}, ${B}, ${A})`;
}

module.exports = function babelPluginOklch() {
  return {
    name: 'babel-plugin-oklch',
    visitor: {
      StringLiteral(path) {
        const value = path.node.value;
        const match = value.match(/^oklch\((.+)\)$/i);
        if (!match) return;

        const rgba = oklchToRgba(match[1]);
        if (rgba) {
          path.node.value = rgba;
        }
      },
    },
  };
};
