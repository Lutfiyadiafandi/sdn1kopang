import { Input } from "../ui/input";
import { Label } from "../ui/label";

type Props = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const InputLabel = ({
  label,
  id,
  type,
  placeholder,
  onChange,
  value,
}: Props) => {
  return (
    <div className="mt-3 flex w-full items-center gap-2">
      <Label htmlFor={id} className="w-[300px]">
        {label}
      </Label>
      <Input
        className="grow"
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputLabel;
