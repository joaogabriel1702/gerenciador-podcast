import {IncomingMessage, ServerResponse} from 'http'
import {serviceListEpisodes} from '../services/list-episodes-service'
import { serviceFilterEpisodes } from '../services/filter-episodes-service'
import { ContentType } from '../utils/content-type'
import { PodcastTranferModel } from '../models/podcast-transfer-model'

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  
  const content: PodcastTranferModel = await serviceListEpisodes()
  
    res.writeHead(content.statusCode, {"Content-Type": ContentType.JSON})
    res.write(JSON.stringify(content.body))
    res.end()
}

export const getFilterEspisodes = async (req: IncomingMessage, res: ServerResponse) => {

  const content: PodcastTranferModel = await serviceFilterEpisodes(req.url)

  res.writeHead(content.statusCode, {"Content-Type": ContentType.JSON})
  res.write(JSON.stringify(content.body))
  res.end()
}