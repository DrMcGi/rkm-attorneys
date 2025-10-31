export default function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-sm shadow-glow bg-linear-to-br from-gold to-gold/70"
      aria-hidden="true"
    />
  );
}
