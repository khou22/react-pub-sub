'use client'

import PubSub from 'pubsub-js'
import { useEffect } from 'react';

export enum Topic {
    Counter = 'counter',
    Hash = 'hash'
}

interface TopicDataMap {
    [Topic.Counter]: {
        count: number
    };
    [Topic.Hash]: {
        hash: string
    }
}

export const useSubscription = <TopicType extends Topic>(topic: TopicType, onMessage: (data: TopicDataMap[TopicType]) => void) => {

    useEffect(() => {
        const listener: PubSubJS.SubscriptionListener<TopicDataMap[TopicType]> = (incomingTopic, data) => {
            if (!data) {
                console.warn('No data received for topic', topic)
                return
            }
            if (incomingTopic !== topic) {
                console.warn('Topic mismatch', topic, data)
                return
            }

            onMessage(data);
        }

        PubSub.subscribe(topic, listener);

        return () => {
            PubSub.unsubscribe(listener)
        }
    }, []);
};

