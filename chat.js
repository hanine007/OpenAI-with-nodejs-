import {openai} from "./openai.js";
import readline from 'node:readline';
import { Models } from "openai/resources/models.mjs";
const rl=  readline.createInterface({
    input: process.stdin,//the write in the terminal
    output :process.stdout//the see the result in 
})
const newMessage = async (history,message)=>{
    const result= await openai.chat.completions.create({
     
        model:'gpt-3.5-turbo',
        messages:[...history,message]
    })
    return result.choices[0].message
}
//the format message 
const format =(userInput)=>({
    role:'user',
    content:userInput
})
const chat =()=>{
const history=[
{
    role: 'system',
    content: `You are a helpful AI assistant. Answer the user's questions to the best of you ability.`,
  },
]


const start = () => {
    //input the qst 
    //userinput : that write is passed as  a argment  
    rl.question('You: ', async (userInput) => {
      if (userInput.toLowerCase() === 'exit') {
        rl.close()
        return
      }
      //add the format
      const userMessage = format(userInput)
      // add to the model gpt to get the answer
      const response = await newMessage(history, userMessage)
      //push the qst and the answer to the history
      history.push(userMessage, response)
      console.log(`\n\nAI: ${response.content}\n\n`)
      start()
    })
  }

  start()
  console.log('\n\nAI: How can I help you today?\n\n')
}

console.log("Chatbot initialized. Type 'exit' to end the chat.")
chat()





    
