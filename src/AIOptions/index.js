const promptTypes = [
    {
        name: "Neutral",
        id: "neutral",
        description: "Gives a simple output",
        option: {
            model: "text-davinci-003",
            prompt: "",
            temperature: 0,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: "Friendly",
        id: "friendly",
        description: "Gives a simple output",
        option: {
            model: "text-davinci-003",
            prompt: "",
            temperature: 0,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: "Strict",
        id: "strict",
        description: "Gives a simple output",
        option: {
            model: "text-davinci-003",
            prompt: "",
            temperature: 0,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    }
]

export default promptTypes;