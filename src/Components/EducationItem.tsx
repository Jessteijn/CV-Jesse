interface EducationItemProps {
  color: string;
  name: string;
  time: string;
  gpa: string;
  major?: string;
  minor?: string;
}

export default function EducationItem({
  color,
  name,
  time,
  gpa,
  major,
  minor,
}: EducationItemProps) {
  return (
    <div className="flex justify-center py-4">
      <div
        className="mx-1/12 md:mx-1/4 w-10/12 max-w-3xl border-l-8 border-solid bg-white shadow-edu md:w-1/2"
        style={{ borderLeftColor: color }}
      >
        <div className="m-4 grid grid-cols-3">
          <div className="col-span-2 text-left">
            <p>{time}</p>
            <h2 className="text-2xl font-bold">{name}</h2>
            {major && <i>{major}</i>}
            {major && minor && <br />}
            {minor && <i>{minor}</i>}
          </div>
          <div className="text-right">
            <p>Gemiddeld</p>
            <h2 className="text-3xl text-red-500">{gpa}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
