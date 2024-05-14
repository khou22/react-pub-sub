'use client'

import { Topic, usePubSub } from "@/utils/usePubSub/usePubSub";
import { useState } from "react";
import { generateNonce } from "@/utils/nonce";

export const IncrementButton = () => {
    const [count, setCount] = useState(0);
    const { publish: publishCounter } = usePubSub(Topic.Counter);
    const { publish: publishHash } = usePubSub(Topic.Hash);

    usePubSub(Topic.Counter, (data) => {
        setCount(data.count);
    });

    const increment = () => {
        publishCounter({ count: count + 1 });
        publishHash({ hash: generateNonce(8) });
    }

    return <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" onClick={increment}>Increment</button>;
};

