'use client'

import { useCallback, useEffect } from "react";
import PubSub from "pubsub-js";

// Define a generic map interface where the key is the topic and the value is the payload type.
export interface TopicPayloadMapBase {
    [topic: string]: any;
}

// Generic hook function that accepts a topic and returns a publisher function for that topic.
export const usePubSub = <TMap extends TopicPayloadMapBase, TTopic extends keyof TMap>(
    topic: TTopic,
    onMessage?: (payload: TMap[TTopic]) => void
): { publish: (payload: TMap[TTopic]) => void } => {

    const publish = useCallback((payload: TMap[TTopic]) => {
        PubSub.publish(String(topic), payload)
    }, [topic])

    useEffect(() => {
        if (!onMessage) {
            return
        }

        const listener: PubSubJS.SubscriptionListener<TMap[TTopic]> = (incomingTopic, data) => {
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

        PubSub.subscribe(String(topic), listener);

        return () => {
            PubSub.unsubscribe(listener)
        }
    }, [onMessage, topic]);

    return { publish };
}
