import { assets } from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";

const CertificateModal = ({ src, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#191919]/85 !m-0 !p-0"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="relative w-full max-w-6xl h-[90vh]"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <iframe
            src={src}
            className="w-full h-full rounded-lg shadow-lg"
            title="Certificate"
          />
          <button
            onClick={onClose}
            className="absolute flex items-center -top-8 right-0 border text-white px-2 py-0 lg:px-3 rounded-sm transition"
          >
            <img className="w-5 lg:w-6" src={assets.cross_orange} alt="" />
            <span className="mr-2 text-sm">Close</span>
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CertificateModal;
