import React, { useState } from "react";
import { SectionType } from "Type/Section.tsx";

const AddSection: React.FC<{
  sections: SectionType[];
}> = ({ sections }) => {
  console.log(sections);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-20 mt-20 flex w-full items-center justify-center bg-black py-0.5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-green-500 transition-all hover:-translate-y-0.5 hover:shadow-custom"
      >
        <span className="text-lg font-bold text-white">+</span>
      </button>
      {isOpen && (
        <div className="absolute top-full z-10 mt-10 w-48 rounded border-2 border-black bg-white py-2 shadow-custom transition-all">
          {sections.map((section, index) => (
            <button
              key={index}
              className="text-normal block w-full rounded px-4 py-2 text-gray-900 transition-all hover:underline"
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddSection;
