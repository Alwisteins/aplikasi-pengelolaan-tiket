interface CardProps {
  title: string;
  total: number | undefined;
}

export default function Card({ title, total }: CardProps) {
  return (
    <div className="flex flex-col items-center justify-center h-32 w-60 bg-white rounded-lg hover:border-2 hover:border-blue-700 group">
      <p className="text-lg font-semibold text-slate-400 group-hover:text-blue-700">
        {title}
      </p>
      <h1 className="text-2xl font-bold group-hover:text-blue-700">
        {total ? total : 0}
      </h1>
    </div>
  );
}