import './PieChartLabelComponent.scss'

export default function PieChartLabelComponent({ color, label }) {
  return (
    <div className="pie-chart-label">
      <div className="label-color" style={{backgroundColor: color}} />
      <div className="label-text">{label}</div>
    </div>
  );
}