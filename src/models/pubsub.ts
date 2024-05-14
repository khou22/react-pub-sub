import { TopicPayloadMapBase } from "@/utils/usePubSub/usePubSub";

export interface PubSubPayloadMap extends TopicPayloadMapBase {
    counter: {
        count: number
    },
    hash: {
        hash: string
    }
}
