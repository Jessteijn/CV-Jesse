interface TitleProps {
  className?: string;
  children: React.ReactNode;
}

export default function Title({ className, children }: TitleProps) {
  return (
    <div className="text-5xl">
      <h1 className={`${className} mb-8 font-bold uppercase`}>{children}</h1>
    </div>
  );
}
