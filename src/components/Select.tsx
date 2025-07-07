export interface SelectProps {
  title: string;
  name:  string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export default function Select({
  title,
  name,
  value,
  onChange
}: SelectProps) {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor={name}>{title}:</label>
      <select
        id={name}
        name={name}
        className="select"
        value={value}
        onChange={onChange}
      >
        {/* selected yerine value ile controlled select */}
        <option value="">{`${title} Seçiniz`}</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  );
}
