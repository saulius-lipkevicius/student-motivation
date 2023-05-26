import React, { useState } from "react"
import styles from "../css/ProductUserForms.css"
import { useTranslation } from 'react-i18next'
import LoadingButton from "./LoadingButton"
import Callback from './Callback.js'

import { Configuration, OpenAIApi } from "openai";
import { arrayStrictness } from "../AIOptions/index.js";
import { Button } from "@mui/material"
import i18n from 'i18next';

export default function ProductUserInput() {
    const configuration = new Configuration({
        apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    // which pattern to use 
    const [option, setOption] = useState(arrayStrictness[0]);
    const selectOption = (option) => {
        if (option === 'Neutral') setOption(arrayStrictness[0])
        if (option === 'Strict') setOption(arrayStrictness[1])
        if (option === 'Friendly') setOption(arrayStrictness[2])
    };

    const [motiveInput, setMotiveInput] = useState('')
    const [pastInput, setPastInput] = useState('')
    const [currentInput, setCurrentInput] = useState('')
    const [strictnessInput, setStrictnessInput] = useState('Neutral')
    const [situationCheck, setSituationCheck] = useState(false)
    const [psychologyCheck, setPsychologyCheck] = useState(false)
    const [planCheck, setPlanCheck] = useState(false)

    const [isInputFull, setIsInputFull] = useState(true)

    const { t } = useTranslation('translation', { keyPrefix: 'Product' });

    const [loading, setLoading] = useState(false)

    const [result, setResult] = useState("")
    const doStuff = async () => {
        let finalTypes = []
        let input = ""
        if (i18n.languages[0] === 'en') {
            
            let outputTypes = ['Solution to problems and how teacher and parents could help'
                                , 'also suggest some psychological trick that could be helpful for teacher or parents to deal with his problems'
                                , 'write small discussion plan how to present this information to parents']
            
            if (situationCheck) {finalTypes.push(outputTypes[0])}
            if (psychologyCheck) {finalTypes.push(outputTypes[1])}
            if (planCheck) {finalTypes.push(outputTypes[2])}

            input = "You are very intelligent, qualified and accountable teacher, who reads psychology literature and is keen of applying it to his analysis on students development \
            report. You have to write a small summary for parents about their child in elementary school at the end of year. You have this information: \
            In the past, student was - : " + pastInput + " \
            This semester, student was - : " + currentInput + " \
            Writing style should be as " + motiveInput + " \
            Emotion: " + strictnessInput + " \
            Write small summary of information about student given above, \
            More over, write small discussion plan how to present this information to parents. \
            " + finalTypes.join(',') + ". Style, where needed, use bullet points to make more clear message"
        } else {
            let outputTypes = "translate this text to english, and keep english words as it was, only translate that are lithuanian. \
            Also, exclude lithuanian words. In the final output give me only the sentence I want to translate"
            }
        
        let object = { ...option.form, prompt: input };
       
        const response = await openai.createCompletion(object);

        setLoading(false)
        setResult(response.data.choices[0].text);
    };

    const resetInput = () => {
        setMotiveInput("")
        setPastInput("")
        setCurrentInput("")
        setStrictnessInput("Neutral")
        setSituationCheck(false)
        setPsychologyCheck(false)
        setPlanCheck(false)
        setResult("")
    }

    console.log(result)

    return (
        <div className="create">
            {result.length == 0 && 
            <from>
                <h2>{t('Title')}</h2>
                <label>{t('Motive.Title')}</label>
                <input
                    type="text"
                    placeholder={t('Motive.Hint')}
                    required
                    onChange={(e) => setMotiveInput(e.target.value)}
                />
                <label>{t('Past.Title')}</label>
                <textarea
                    required
                    placeholder={t('Past.Hint')}
                    onChange={(e) => setPastInput(e.target.value)}
                />
                <label>{t('Clue.Title')}</label>
                <textarea
                    required
                    placeholder={t('Clue.Hint')}
                    onChange={(e) => setCurrentInput(e.target.value)}
                />

                <label>{t('Strictness.Title')}</label>
                <select
                    onChange={(e) => {
                        setStrictnessInput(e.target.value)
                        selectOption(e.target.value)
                    }}
                >
                    <option value="Neutral">{t('Strictness.Option1')}</option>
                    <option value="Strict">{t('Strictness.Option2')}</option>
                    <option value="Friendly">{t('Strictness.Option3')}</option>
                </select>
                <label>{t('Info.Title')}</label>
                <div className="checkbox-grid">
                    <label className="container">{t('Info.Solutions')}
                        <input
                            type="checkbox"
                            onChange={(e) => {
                                setSituationCheck(!situationCheck)
                                // check if data input is > 0
                                e.length === 0 ? setIsInputFull(true) : setIsInputFull(false)
                            }}
                        />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">{t('Info.Suggestion')}
                        <input
                            type="checkbox"
                            onChange={(e) => {
                                setPsychologyCheck(!psychologyCheck)
                                // check if data input is > 0
                                e.length === 0 && e.length === 0 ? setIsInputFull(true) : setIsInputFull(false)
                            }}
                        />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">{t('Info.Plan')}
                        <input
                            type="checkbox"
                            onChange={(e) => {
                                setPlanCheck(!planCheck)
                                // check if data input is > 0
                                e.length === 0 ? setIsInputFull(true) : setIsInputFull(false)
                            }}
                        />
                        <span className="checkmark"></span>
                    </label>
                </div>
            </from>
            }
            <div className='buttons'>
                {result.length === 0 &&                
                <LoadingButton loading={loading} onClick={() => {
                    setLoading(true)
                    doStuff()
                }} />
                }
                {result.length > 0 &&
                    <Button className="resetButton" onClick={resetInput}>
                        Clear
                    </Button>
                }
            </div>
            <Callback result={result} />
        </div>
    )
}