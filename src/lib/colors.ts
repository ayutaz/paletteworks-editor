export default {
  COLOR_BPM: 0x03c04a,
  COLOR_TIME_SIGNATURE: 0xff8938,
  COLOR_BACKGROUND: 0x000000,
  COLOR_LANE_PRIMARY: 0xffffff,
  COLOR_LANE_SECONDARY: 0x4c3b5c,
  COLOR_BAR_PRIMARY: 0xffffff,
  COLOR_BAR_SECONDARY: 0xcccccc,
  COLOR_PLAYHEAD: 0xff153f,
  COLOR_SLIDE_PATH: 0xdafdf0,
  COLOR_SLIDE_PATH_CRITICAL: 0xfffccc,
  ALPHA_SLIDE_PATH: 0.9,
  COLOR_SLIDE_STEP: 0x24e0a1,
  ALPHA_SLIDE_STEP: 1,
  ALPHA_SLIDE_STEP_FILL: 0.65,
  COLOR_SELECTION: 0x007bf8,
  ALPHA_SELECTION: 0.25,
  COLOR_STACKED: 0xd50f13,
  ALPHA_STACKED: 0.5,
  COLOR_CORRUPTED: 0x000000,
  ALPHA_CORRUPTED: 0.5, // TODO: fix typo
  COLOR_WARNING: 0xffb943,
  ALPHA_WARNING: 0.4,
  COLOR_MULTI_TAP: 0x00e5ea,
  ALPHA_MULTI_TAP: 0.3,
  COLOR_MOVING_TINT: 0xced3e4,
  ALPHA_FLOATING: 0.5,
}

// next color hue from the source
export function getColor(source: number, i: number) {
  const [l, c, h] = convertRGBToLCH(source)
  return convertLCHtoRGB([l, c, (h + i * 50) % 360])
}

function convertRGBToLCH(color: number) {
  const [r, g, b] = [(color >> 16) & 0xff, (color >> 8) & 0xff, color & 0xff]
  const l = 0.2126 * r + 0.7152 * g + 0.0722 * b
  const c = Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2)
  const h = (Math.atan2(b, r) * 180) / Math.PI
  return [l, c, h]
}

function convertLCHtoRGB(lch: [number, number, number]): number {
  const [l, c, h] = lch
  const r = l + c * Math.cos((h * Math.PI) / 180)
  const b = l + c * Math.cos(((h + 120) * Math.PI) / 180)
  const g = l + c * Math.cos(((h + 240) * Math.PI) / 180)
  return (
    (Math.round(r * 255) << 16) +
    (Math.round(g * 255) << 8) +
    Math.round(b * 255)
  )
}
