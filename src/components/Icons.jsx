import React from "react";

const IconDisplay = () => {
  const iconCount = 5;

  return (
    <div>
      <ul>
        {Array(iconCount).map((_, index) => (
          <li className="icon-list-item" key={index}>
            <img
              src={`/src/assets/icons/icon-${index + 1}.svg`}
              alt={`Icon ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IconDisplay;
