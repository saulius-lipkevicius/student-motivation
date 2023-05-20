export const arrayStrictness = [
    {
      name: "Neutral",
      id: "neutral",
      description: "Answer questions based on existing knowledge",
      option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
    },
    {
      name: "Strict",
      id: "strict",
      description: "Corrects sentences into standard English.",
      option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
    },
    {
      name: "Friendly",
      id: "friendly",
      description: "Translates difficult text into simpler concepts.",
      option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
    },
];