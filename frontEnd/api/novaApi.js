import client from "../api/client"

const getAll = async () => {
    try {
        const res = await client.get("/tarefas")

        if (res.data.success) {
            return res.data.tarefas
        }
    } catch (error) {
        console.error(error)
    }
}
export default {
    getAll
}