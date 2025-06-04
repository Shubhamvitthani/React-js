import React, { useState } from "react";


const Counter = (WrappedComponent) => {
    return function Counter() {
        const [no, setNo] = useState(0);
        const inc = () => setNo(no + 1);
        const dec = () => setNo(no - 1);

        return (
            <>
                <WrappedComponent
                    no={no}
                    inc={inc}
                    dec={dec}
                />
            </>
        );
    };
};

export default Counter;
