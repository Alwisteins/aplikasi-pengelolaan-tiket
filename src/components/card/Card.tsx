interface CardProps {
  title: string;
  total: number | string | undefined;
  AdditionalStyle?: string
}

export default function Card(props: CardProps) {
  const { title, total, AdditionalStyle } = props
  return (
    <div className={`${AdditionalStyle} flex flex-col items-center justify-center bg-white rounded-lg hover:border-2 hover:border-blue-700 group`}>
      <p className="text-lg font-semibold text-slate-400 group-hover:text-blue-700">
        {title}
      </p>
      <h1 className="text-2xl font-bold group-hover:text-blue-700">
        {total ? total : 0}
      </h1>
    </div>
  );
}