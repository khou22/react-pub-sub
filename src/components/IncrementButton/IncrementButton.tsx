'use client'

import { useSubscription, Topic } from "@/hooks/useSubscription/useSubscription";
import { useState } from "react";
import PubSub from 'pubsub-js';
import { generateNonce } from "@/utils/nonce";

export const IncrementButton = () => {
    const [count, setCount] = useState(0);

    useSubscription(Topic.Counter, (data) => {
        setCount(data.count);
    });

    const increment = () => {
        PubSub.publish(Topic.Counter, { count: count + 1 });
        PubSub.publish(Topic.Hash, { hash: generateNonce(8) });
    }

    return <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" onClick={increment}>Increment</button>;
};

