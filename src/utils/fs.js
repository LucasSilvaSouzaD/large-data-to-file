import { writeFile, readFile } from 'fs/promises'

const { pathname: databaseFile } = new URL('./../../database.json', import.meta.url)
const filepath = databaseFile.replace("/C:", "")

export async function readFileLocale(filename) {
    const currentData = JSON.parse((await readFile(filepath)))
    return currentData
}

export async function writeFileFS(text) {
        await writeFile(filepath, JSON.stringify(text))
        return text
}

