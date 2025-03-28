import { motion } from "framer-motion";
import { useState } from "react";

const SlideButton = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="relative flex items-center justify-center w-full h-20">
      <motion.div
        className="relative flex items-center justify-start bg-gray-800 rounded-full p-2 w-64 h-14 overflow-hidden"
        initial={{ backgroundColor: "#1f2937" }}
        animate={{ backgroundColor: isComplete ? "#10b981" : "#1f2937" }}
      >
        <motion.div
          className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
          drag="x"
          dragConstraints={{ left: 0, right: 200 }}
          onDragEnd={(_, info) => {
            if (info.point.x > 180) {
              setIsComplete(true);
              setTimeout(() => {
                window.location.href = "/menu"; // هدایت به صفحه منو
              }, 500);
            }
          }}
        >
          <span className="text-white text-lg">»</span>
        </motion.div>

        <span className="absolute left-16 text-white text-lg">
          {isComplete ? "Opening Menu..." : "Slide to View Menu"}
        </span>
      </motion.div>
    </div>
  );
};

export default SlideButton;
