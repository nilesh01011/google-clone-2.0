import { GiEarthAsiaOceania } from 'react-icons/gi';

export default function Footer() {
  return (
    <footer className="absolute bottom-0 text-sm text-[#9aa0a6] bg-[#171717] w-full">
      <div className="border-b border-[#3c4043] px-5 py-3 flex items-center lg:justify-start justify-center gap-2">
        <GiEarthAsiaOceania size={16} />
        India
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-0 gap-2 justify-between items-center px-5 py-3">
        <ul className="flex items-center space-x-6 flex-wrap justify-center order-1">
          <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">Business</li>
          <li className="link text-center">How Search works</li>
        </ul>

        {/* copy rights */}
        <div className="text-center lg:order-2 order-3">
          <span className="text-center md:text-[14px] xs:text-[12px] text-[10px]">
            © copyright 2023, Google Clone 2.0 is for educational purposes.
          </span>
        </div>

        <ul className="flex items-center space-x-6 lg:order-3 order-2">
          <li className="link">Privacy</li>
          <li className="link">Terms</li>
          <li className="link">Settings</li>
        </ul>
      </div>
    </footer>
  );
}
