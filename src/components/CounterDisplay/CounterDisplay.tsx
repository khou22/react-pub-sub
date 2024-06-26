'use client';

import { PubSubPayloadMap } from "@/models/pubsub";
import { usePubSub } from "@/utils/usePubSub/usePubSub";
import { useState } from "react";

export const CounterDisplay = () => {
    const [count, setCount] = useState(0);
    const [hash, setHash] = useState('none');

    usePubSub<PubSubPayloadMap, 'counter'>('counter', (data) => {
        setCount(data.count);
    });
    usePubSub<PubSubPayloadMap, 'hash'>('hash', (data) => {
        setHash(data.hash);
    });

    return <div className="flex flex-col items-center justify-center border rounded-md p-4 shadow-md bg-gray-700 text-white min-w-[200px] gap-1">
        <div className="text-4xl font-bold">
            {count}
        </div>
        <p className="text-sm">{hash}</p>
    </div>;
};
