import { GraduationCap } from "lucide-react";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className="brand">
      <div className={`brand-mark ${light ? "light" : ""}`}>
        <GraduationCap size={21} />
      </div>
      <div>
        <strong className={light ? "text-white" : ""}>Kelem</strong>
        <span>School OS</span>
      </div>
    </div>
  );
}
