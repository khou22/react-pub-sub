'use client'

import PubSub from 'pubsub-js'
import { useEffect } from 'react';

export enum Topic {
    Counter = 'counter',
    Hash = 'hash'
}

export interface TopicDataMap {
    [Topic.Counter]: {
        count: number
    };
    [Topic.Hash]: {
        hash: string
    }
}

/**
 * A hook that allows subscribing to a topic and optionally receiving messages.
 * @param topic The topic to subscribe to.
 * @param onMessage A function to receive messages from the topic.
 * @returns A function to publish messages to the topic.
 */
export const usePubSub = <TopicType extends Topic>(topic: TopicType, onMessage?: (data: TopicDataMap[TopicType]) => void) => {
    useEffect(() => {
        if (!onMessage) {
            return
        }

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
    }, [onMessage]);

    const sendMessage = (data: TopicDataMap[TopicType]) => {
        PubSub.publish(topic, data);
    }

    return {
        publish: sendMessage
    }
};

