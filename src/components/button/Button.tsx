interface ButtonProps {
  type: "submit" | "reset" | "button";
  name: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { type, name, onClick } = props;
  return (
    <button
      type={type}
      className="px-4 py-2 text-slate-200 rounded-lg bg-blue-700"
      onClick={type !== "submit" ? onClick : undefined}
    >
      {name}
    </button>
  );
}
