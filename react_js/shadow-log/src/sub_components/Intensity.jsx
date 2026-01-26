import '../stylings/intensity.css';

function Intensity({ value, onChange }) {
  return (
    <div className='intensity'>
      <p className='adjust'>INTENSITY :</p>

      <input
        type="range"
        min="1"
        max="5"
        step="1"
        value={value ?? 1}
        onChange={(e) => onChange(Number(e.target.value))}
      />

      <div className="labels">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </div>
  );
}

export default Intensity;
