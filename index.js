import 'dotenv/config'
import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})
try{
const result =await openai.chat.completions.create({
   
    model:'gpt-3.5-turbo',
    messages:[{
        role:'system',
    content:'hi brother how are u'    },

    {
        role:'user',
        content:'give me the best solution for reading mor books!'
    },
            ]
}) 
console.log(result.choices[0].message.content)
}
catch{
    console.log('authorized eror')
}