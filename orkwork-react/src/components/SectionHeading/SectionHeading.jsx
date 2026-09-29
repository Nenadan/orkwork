export default function SectionHeading({ prefix, heading, subtitle, underline = false }) {
  return (
    <div className={`${prefix}-header section-header`}>
      <h2 className={`${prefix}-heading section-title`}>{heading}</h2>
      {subtitle && <p className={`${prefix}-subtitle section-subtitle`}>{subtitle}</p>}
      {underline && <span className={`${prefix}-underline`} />}
    </div>
  );
}
