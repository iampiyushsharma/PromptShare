export default async function Data(prompts){
    const response = await fetch('http://localhost:3000/api/openai', {
        method: 'POST',
        body: JSON.stringify({
            data:prompts
        })
    })
    if(!response.ok){
        throw new Error('An Error occured')
    }
    const data = await response.json()
    return JSON.stringify(data)
}