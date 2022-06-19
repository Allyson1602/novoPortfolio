import { FC, useEffect, useState } from "react";

import "./text-typing.style.css";

interface TextTypingProps {
    texts: Array<string>;
    speed?: number;
}

let i = 0;

const TextTyping: FC<TextTypingProps> = ({texts, speed}) => {

    const [value, setValue] = useState("");
    const [txts, setTxts] = useState(texts);
    const elementSpeed = speed || 150;

    useEffect(() => {
        animation();
    }, [value]);

    const animation = () => {
        let text = txts[0];

        setTimeout(() => {
            if(text) {
                if(text.length === i) {

                    let newTxts = txts.map(t => t);
                    newTxts.shift() as unknown as Array<string>;

                    if(newTxts.length > 0) {
                        setTxts(newTxts);
                    }else {
                        setTxts(texts);
                    }
    
                    setTimeout(() => {
                        setValue("");
                        i = 0;
                    }, 400);
                    return;
                }

                setValue(value + text.charAt(i));
                i++;
            }

        }, elementSpeed);
    };

    return <span className="text-typing">{value}</span>;
};

export default TextTyping;
