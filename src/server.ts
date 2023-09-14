import { fastify } from 'fastify'
import { uploadVideoRoute } from './routes/upload-video'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { createTranscriptionRoute } from './routes/create-transcription'
import { generateAICompletionRoute } from './routes/generate-ai-completion'

const app = fastify()

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP Server is running on port 3333!')
})
