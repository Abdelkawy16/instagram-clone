import Image from "next/image";
export default function Header() {
  return (
    <div>
      {/* Left */}
      <div className="flex items-center justify-between max-w-6xl">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
            alt={""}
            layout="fill"
            className=" object-contain"
          />
        </div>
        <div className="cursor-pointer h-10 w-10 relative lg:hidden">
          <Image
            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/62-instagram-512.png"
            alt={""}
            layout="fill"
            className=" object-contain"
          />
        </div>
        <h1>Right sides</h1>
      </div>
      {/* Middle */}
      {/* Right */}
    </div>
  );
}
