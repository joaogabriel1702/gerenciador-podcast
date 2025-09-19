import * as http from "http"
import { getFilterEspisodes, getListEpisodes } from './controllers/podcasts-controller'

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        
        //queryString
        const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""] 

        //listar podcasts
        if(req.method === "GET" && baseUrl === "/api/list"){
            await getListEpisodes(req, res)
        }

        if(req.method === "GET" && baseUrl === "/api/episode"){
            await getFilterEspisodes(req, res)
        }
    }
)

const port = process.env.PORT

server.listen(port, () =>{
    console.log(`servidor iniciado na porta ${port}`)
})