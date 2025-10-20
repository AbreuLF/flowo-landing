import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default async function Icon() {
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
            fontSize: 24,
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
