import React, { useState } from 'react';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Marcar
      </label>
      <p>{isChecked ? 'Estou marcado' : 'Não estou marcado'}</p>
    </div>
  );
};

export default Checkbox;
