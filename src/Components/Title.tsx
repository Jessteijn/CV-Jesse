interface TitleProps {
  children: React.ReactNode;
  color: string;
}

export default function Title({ color, children }: TitleProps) {
  return (
    <h1 style={{ color: color }} className="mb-8 text-5xl font-bold uppercase">
      {children}
    </h1>
  );
}
