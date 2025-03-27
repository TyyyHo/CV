"use client";

import Aurora from "@/reactbits/Backgrounds/Aurora/Aurora";

export default function Background() {
  return (
    <div id="canvas-container" className="fixed inset-0 z-0">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={1}
        amplitude={0.3}
        speed={1}
      />
    </div>
  );
}
