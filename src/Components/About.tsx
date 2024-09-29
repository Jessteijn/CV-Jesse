import Interersts from "@/Components/AboutInterest";
import Title from "@/Components/Title";
import Image from "next/image";

function About() {
  return (
    <section className="bg-slate-700 py-12 text-center text-xl">
      <Title color="#ffffff">About me</Title>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg gap-8 md:grid-cols-2">
          <div className="text-center md:text-right">
            <dl>
              <dt className="font-bold text-yellow-400">FULL NAME</dt>
              <dd className="mb-7">Jesse Wessteijn</dd>
              <dt className="font-bold text-yellow-400">EMAIL</dt>
              <dd className="mb-7">jessteijn@hotmail.nl</dd>
              <dt className="font-bold text-yellow-400">MOBILE NO.</dt>
              <dd className="mb-7">+31 6 17848853</dd>
            </dl>
          </div>
          <div className="hidden text-left md:block">
            <div className="group relative">
              <a
                href="https://instagram.com/n.voort"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/mascot.png"
                  width="180"
                  height="180"
                  alt="Mascotte"
                  className="hover:cursor-pointer"
                />
                <div className="absolute flex opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  @N.Voort
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-5 w-10/12 max-w-screen-md px-4 sm:max-w-screen-sm sm:px-6 lg:max-w-screen-lg lg:px-8">
          Hello, my name is <b className="text-red-300">Jesse Wessteijn</b>. And
          this is my personal website. I am a 22 year old student from the
          Netherlands.
          <Interersts />
        </div>
      </div>
    </section>
  );
}

export default About;
