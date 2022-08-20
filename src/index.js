import { writeFileFS, readFileLocale } from './utils/fs.js'


const data = async () => Array.from({ length: 20}, (value, index) => `${index}-Testando`)

async function *processData() {
    const database = await data()

    for (const data of database) {
    const file = await readFileLocale()
    file.push({data: data})

    yield await writeFileFS(file)
    }

}



for await (const data of processData()) {
    console.table(data)
}