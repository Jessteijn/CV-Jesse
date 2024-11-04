interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return <h1 className="mb-8 text-5xl font-bold uppercase">{children}</h1>;
}
