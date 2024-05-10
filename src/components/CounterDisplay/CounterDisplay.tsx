'use client';

import { Topic, useSubscription } from "@/hooks/useSubscription/useSubscription";
import { useState } from "react";

export const CounterDisplay = () => {
    const [count, setCount] = useState(0);

    useSubscription(Topic.Counter, (data) => {
        setCount(data.count);
    });

    return <div className="flex items-center justify-center border rounded-md p-4 shadow-md bg-gray-700 text-white min-w-[200px]">
        <div className="text-4xl font-bold">
            {count}
        </div>
    </div>;
};

