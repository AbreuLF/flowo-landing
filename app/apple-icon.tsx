import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: "bold",
            color: "#171810",
            display: "flex",
          }}
        >
          f
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
