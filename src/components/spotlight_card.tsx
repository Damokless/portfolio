import { Card, CardBody } from "@heroui/react";
import { useState } from "react";

export default function SpotlightCard({ children }: { children: React.ReactNode }) {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -9999, y: -9999 });

  return (
    <div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setPos({ x: -9999, y: -9999 })}
      className="relative w-2/3"
    >
      <Card isBlurred className="border border-white/35 bg-transparent overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-150"
          style={{
            background: `radial-gradient(140px at ${pos.x}px ${pos.y}px, rgba(188,19,254,0.32), rgba(222,137,255,0.08) 65%)`,
          }}
        />
        <CardBody className="relative flex flex-row flex-wrap gap-4 justify-center items-center">
          {children}
        </CardBody>
      </Card>
    </div>
  );
}
