import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#fafaf8",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              backgroundColor: "#111111",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "18px",
                height: "18px",
                backgroundColor: "#fafaf8",
                borderRadius: "2px",
              }}
            />
          </div>
          <span
            style={{
              fontSize: "22px",
              fontWeight: "600",
              color: "#111111",
              letterSpacing: "-0.5px",
            }}
          >
            Relay
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "700",
              color: "#111111",
              letterSpacing: "-3px",
              lineHeight: "1.05",
              margin: "0",
              maxWidth: "900px",
            }}
          >
            Business software for real operations.
          </h1>
          <p
            style={{
              fontSize: "22px",
              color: "#6b6b6b",
              margin: "0",
              lineHeight: "1.5",
              maxWidth: "600px",
            }}
          >
            Point of Sale · Booking · Inventory · Accounting · HR · Analytics
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #e6e6e6",
            paddingTop: "32px",
          }}
        >
          <span style={{ fontSize: "16px", color: "#6b6b6b" }}>relay.software</span>
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            {["Counter", "Queue", "Stock", "Ledger", "People", "Analytics"].map((name) => (
              <div
                key={name}
                style={{
                  padding: "4px 12px",
                  border: "1px solid #e6e6e6",
                  borderRadius: "4px",
                  fontSize: "13px",
                  color: "#6b6b6b",
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
