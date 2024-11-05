import Brace from "@/Components/HeaderBrace";
import Button from "@/Components/HeaderButton";
import ProfileImage from "@/Components/HeaderProfile";
import Title from "@/Components/HeaderTitle";
import ParticlesBackground from "@/Components/ParticlesBackground";

export default function Header() {
  return (
    <>
      <ParticlesBackground />
      <section className="flex min-h-screen flex-col items-center justify-center gap-10 py-16 text-center">
        <div className="grid justify-items-center md:grid-cols-3">
          <Brace type="left" />
          <ProfileImage />
          <Brace type="right" />
        </div>
        <Title />
        <div className="flex justify-center space-x-4">
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
