import * as http from "http"
import { getFilterEspisodes, getListEpisodes } from './controllers/podcasts-controller'
import { Routes } from "./routes/routes"

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        
        //queryString
        const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""] 

        //listar podcasts
        if(req.method === "GET" && baseUrl === Routes.LIST){
            await getListEpisodes(req, res)
        }

        if(req.method === "GET" && baseUrl === Routes.EPISODE){
            await getFilterEspisodes(req, res)
        }
    }
)

const port = process.env.PORT

server.listen(port, () =>{
    console.log(`servidor iniciado na porta ${port}`)
})