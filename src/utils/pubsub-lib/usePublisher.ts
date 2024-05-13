import { Topic, TopicDataMap } from "./useSubscription";

/**
 * A hook that allows publishing messages to a topic.
 * @param topic The topic to publish to.
 * @returns A function to publish messages to the topic.
 */
export const usePublisher = <TopicType extends Topic>(topic: TopicType) => {
    const sendMessage = (data: TopicDataMap[TopicType]) => {
        PubSub.publish(topic, data);
    }

    return {
        publish: sendMessage
    };
}



