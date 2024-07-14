import { codeblockService } from "./codeblock.service.js"
import { loggerService } from "../../services/logger.service.js"

export async function getCodeblocks(req, res){
    try {
        const codeblocks = await codeblockService.query()
        res.send(codeblocks)
    } catch (error) {
        loggerService.error(`Could'nt get codeblocks`, error)
        res.status(400).send(`Could'nt get codeblocks`)
    }
}

export async function getCodeblock(req, res) {
    try {
        const codeblockId = req.params.codeblockId
        console.log('codeblockId:', codeblockId)
        const codeblock = await codeblockService.getById(codeblockId)
        res.send(codeblock)
    } catch (error) {
        loggerService.error(`Could'nt get codeblock`, error)
        res.status(400).send(`Could'nt get codeblock`)
    }
}

//uyg