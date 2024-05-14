'use client'

import { usePubSub } from "@/utils/usePubSub/usePubSub";
import { useState } from "react";
import { generateNonce } from "@/utils/nonce";
import { PubSubPayloadMap } from "@/models/pubsub";

export const IncrementButton = () => {
    const [count, setCount] = useState(0);
    const { publish: publishCounter } = usePubSub<PubSubPayloadMap, 'counter'>('counter', (data) => {
        setCount(data.count);
    });
    const { publish: publishHash } = usePubSub<PubSubPayloadMap, 'hash'>('hash');

    const increment = () => {
        publishCounter({ count: count + 1 });
        publishHash({ hash: generateNonce(8) });
    }

    return <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" onClick={increment}>Increment</button>;
};

