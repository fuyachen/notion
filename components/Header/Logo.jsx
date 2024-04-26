import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="w-12 h-12 relative">
        <Image src={logo} alt="Achen Fu" fill />
      </div>
      <p className="hidden sm:block text-2xl font-mono font-semibold">ACHEN</p>
    </Link>
  );
};

export default Logo;
