interface NavButtonProps {
  name: string;
  onClick: () => void;
  disabled: boolean;
}

export default function NavButton(props: NavButtonProps) {
  const { name, onClick, disabled } = props;
  return (
    <button className="text-slate-400" onClick={onClick} disabled={disabled}>
      {name}
    </button>
  );
}
