import 'dotenv/config'
import OpenAI from "openai";
const openai = new OpenAI()
const resulet =await openai.chat.completions.create({
    model:'gpt-3.5-turbo',
    messages:[{
        role:'system',
    content:'hi brother how are u'    },

    {
        role:'user',
        content:'Hi!'
    },
            ]
}) 
console.log(result)