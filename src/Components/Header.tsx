import React from "react";
import ProfileImage from "./HeaderProfile";
// import ParticlesBackground from "./ParticlesBackground";

export default function Header() {
  return (
    <>
      {/* <ParticlesBackground /> */}
      <section className="flex min-h-screen flex-col items-center justify-center text-center">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="w-full">
            <div className="flex justify-center">
              {/* <Brace type="left" color={theme.font} /> */}
              <ProfileImage />
              {/* <Brace type="right" color={theme.font} /> */}
            </div>
            <div className="flex justify-center">
              <div className="w-full">
                {/* <Title color={theme.font} /> */}
                Title
              </div>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              {/* <Button title="My GitHub" url="https://github.com/Jessteijn" /> */}
              {/* <Button
                  title="My LinkedIn"
                  url="https://www.linkedin.com/in/jessewessteijn/"
                /> */}
              Knoppen
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
