import mascot from "@/assets/mascot.png";
import Interersts from "@/Components/AboutInterest";
import Title from "@/Components/Title";
import Image from "next/image";
import Link from "next/link";

const ageCalc = () => {
  const birthDate = new Date("2001-12-22");
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

function About() {
  return (
    <section className="bg-slate-700 pb-3 pt-12 text-center text-xl">
      <Title color="#ffffff">About me</Title>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg gap-8 md:grid-cols-2">
          <div className="text-center md:text-right">
            <dl>
              <dt className="font-bold text-yellow-400">FULL NAME</dt>
              <dd className="mb-7">Jesse Wessteijn</dd>
              <dt className="font-bold text-yellow-400">EMAIL</dt>
              <dd className="mb-7">jessteijn@hotmail.nl</dd>
              <dt className="font-bold text-yellow-400">MOBILE No.</dt>
              <dd className="mb-7">+31 6 17848853</dd>
            </dl>
          </div>
          <div className="hidden text-left md:block">
            <Link
              href="https://nvoort.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <Image
                src={mascot}
                width="180"
                height="180"
                alt="Mascotte"
                className="hover:cursor-pointer"
              />
              <div className="absolute flex opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                @N.Voort
              </div>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-5 w-10/12 max-w-screen-md px-4 sm:max-w-screen-sm sm:px-6 lg:max-w-screen-lg lg:px-8">
          Hello, mijn naam is <b className="text-red-300">Jesse Wessteijn</b> en
          ik ben <b className="text-red-300">{ageCalc()}</b> jaar oud. Ik ben
          een gedreven en enthousiasme Elektro student. Ik vind het leuk om te
          knutselen met techniek en wil graag weten hoe de techniek werkt. Ik
          programmeer graag en ben erg nieuwsgierig in het leren van nieuwe
          dingen. Deze website heb ik dan ook gemaakt met een simpele basis
          kennis van HTML en ik heb alles wat ik nodig had om deze website te
          maken opgezocht en uitgevogelen. Ik heb mezelf ook typescript en
          nextjs en tailwindcss aangeleerd. Ook heb ik de portfolio website van
          mijn vriendin gemaakt:{" "}
          <Link
            href="https://nvoort.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            www.nvoort.nl
          </Link>
          <Interersts />
        </div>
      </div>
    </section>
  );
}

export default About;
