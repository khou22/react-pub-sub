'use client';

import { Topic, useSubscription } from "@/hooks/useSubscription/useSubscription";
import { useState } from "react";

export const CounterDisplay = () => {
    const [count, setCount] = useState(0);
    const [hash, setHash] = useState('none');

    useSubscription(Topic.Counter, (data) => {
        setCount(data.count);
    });
    useSubscription(Topic.Hash, (data) => {
        setHash(data.hash);
    });

    return <div className="flex flex-col items-center justify-center border rounded-md p-4 shadow-md bg-gray-700 text-white min-w-[200px] gap-1">
        <div className="text-4xl font-bold">
            {count}
        </div>
        <p className="text-sm">{hash}</p>
    </div>;
};

