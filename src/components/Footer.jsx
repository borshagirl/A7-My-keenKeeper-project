import Image from "next/image";
import InstagramImg from '../assets/instagram.png';
import FacebookImg from '../assets/facebook.png';
import TwitterImg from '../assets/twitter.png';


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-[#244d3f]  rounded p-5 mt-10">
            <h2 className="text-4xl text-white font-bold">KeenKeeper</h2>
            <p className="text-white/80">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
  <nav>
    <h3 className="text-xl text-white">Social Links</h3>
    <div className="grid grid-flow-col gap-4">
      <Image 
      src={InstagramImg}
      alt="Instagram"
      width={30}
      height={30}
      ></Image>

      <Image 
      src={FacebookImg}
      alt="Facebook"
      width={30}
      height={30}
      ></Image>

      <Image 
      src={TwitterImg}
      alt="Twitter"
      width={30}
      height={30}
      ></Image>
    </div>
  </nav>
  <aside className="flex justify-between w-[80vw] border-t border-green-800 pt-5">
    <p className="text-white/60">© {new Date().getFullYear()} KeenKeeper. All right reserved.</p>
    <div className="flex gap-4 items-center text-white/60">
        <p>Privacy policy</p>
        <p>Terms of service</p>
        <p>Cookies</p>
    </div>
  </aside>
</footer>
        </div>
    );
};

export default Footer;