interface HeaderButtonProps {
  title: string;
  url: string;
}

export default function HeaderButton({ title, url }: HeaderButtonProps) {
  return (
    <a
      className="mx-2 my-0 rounded-full bg-blue-600 px-6 py-1 text-xl text-white hover:bg-blue-700"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
}
