import { OG_ALT, OG_SIZE, renderSocialImage } from "@/lib/og";

export const alt = OG_ALT;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderSocialImage();
}
