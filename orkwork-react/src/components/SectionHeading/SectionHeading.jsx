export default function SectionHeading({ prefix, heading, subtitle, underline = false }) {
  return (
    <div className={`${prefix}-header`}>
      <h2 className={`${prefix}-heading`}>{heading}</h2>
      {subtitle && <p className={`${prefix}-subtitle`}>{subtitle}</p>}
      {underline && <span className={`${prefix}-underline`} />}
    </div>
  );
}
