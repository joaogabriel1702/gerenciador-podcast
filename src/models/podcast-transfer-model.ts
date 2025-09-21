import { PodcastModel } from "./podcast-model";

export interface PodcastTranferModel{
    statusCode: number,
    body: PodcastModel[]
}