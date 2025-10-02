export default function HamburgerMenu({ isOpen, setIsOpen }) {
  return (
    <div
      onClick={() => setIsOpen((v) => !v)}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      className="relative w-6 h-3 flex flex-col justify-between items-center group"
    >
      {/* Garis 1 */}
      <span
        className={`block h-[2px] w-6 bg-[#191919] rounded transition-all duration-300 origin-center dark:bg-[#e4e4e4]/80 ${
          isOpen ? "rotate-45 translate-y-[5px]" : ""
        }`}
      />

      {/* Garis 2 */}
      <span
        className={`block h-[2px] w-6 bg-[#191919] rounded transition-all duration-300 origin-center dark:bg-[#e4e4e4]/80 ${
          isOpen ? "-rotate-45 -translate-y-[5px]" : ""
        }`}
      />
    </div>
  );
}
