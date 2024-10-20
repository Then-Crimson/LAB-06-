import { useState } from 'react';

const ButtonIncrement = () => {
    const [value, setValue] = useState<number>(5);

    const handleClick = () => {
    setValue(prevValue => prevValue + 50);
};

return (
    <button onClick={handleClick}>
        {value}
    </button>
    );
};

export default ButtonIncrement;

