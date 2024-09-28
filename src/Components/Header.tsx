import Brace from "@/Components/HeaderBrace";
import Button from "@/Components/HeaderButton";
import ProfileImage from "@/Components/HeaderProfile";
import Title from "@/Components/HeaderTitle";
import ParticlesBackground from "@/Components/ParticlesBackground";

export default function Header() {
  return (
    <>
      <ParticlesBackground />
      <section className="flex min-h-screen flex-col items-center justify-center text-center">
        <div className="mb-10 grid grid-cols-3 items-center justify-items-center">
          <Brace type="left" />
          <ProfileImage />
          <Brace type="right" />
        </div>
        <div className="mb-10 flex flex-col items-center">
          <Title />
        </div>
        <div className="mt-5 flex justify-center space-x-4">
          <Button title="My GitHub" url="https://github.com/Jessteijn" />
          <Button
            title="My LinkedIn"
            url="https://www.linkedin.com/in/jessewessteijn/"
          />
        </div>
      </section>
    </>
  );
}
