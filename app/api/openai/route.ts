import { getServerSession } from "next-auth";
import OpenAI from "openai";
import { handler } from "../auth/[...nextauth]/route";

const openai = new OpenAI()

export async function POST(req: Request, res: Response){
    // const session = await getServerSession(handler);
    // if(!session){
    //     return new Response(null, {status: 403})
    // }
    const message = (await req.json()) as {data: string}
    console.log(message)
    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'user', content: message.data}],
    });
    console.log(completion)

    return new Response(JSON.stringify(completion.choices[0].message.content))
    
}