import React, { useState, useEffect } from "react"
import styles from "../css/ProductUserForms.css"
import { useTranslation } from 'react-i18next'
import LoadingButton from "./LoadingButton"
import Callback from './Callback.js'

import { Configuration, OpenAIApi } from "openai";
import { arrayStrictness } from "../AIOptions/index.js";


export default function ProductUserInput() {
    const configuration = new Configuration({
        apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    // which pattern to use 
    const [option, setOption] = useState({});
    const selectOption = (option) => {
        setOption(arrayStrictness[0]);
      };


    const [topInput, setTopInput] = useState('')
    const [midInput, setMidInput] = useState('')
    const [lowInput, setLowInput] = useState('Neutral')
    const [situationCheck, setSituationCheck] = useState(false)
    const [psichologyCheck, setPsichologyCheck] = useState(false)
    const [planCheck, setPlanCheck] = useState(false)

    const [isInputFull, setIsInputFull] = useState(true)

    const { t } = useTranslation('translation', { keyPrefix: 'Product' });

    const [loading, setLoading] = useState(false)

    const [result, setResult] = useState("")
    const doStuff = async () => {
        let input = "you are a very intelligent, qualified and accountable teacher. You are interested in psychology, \
         student development and their problems at school. You must analyze a student about whom you know the following: " + midInput + " \
         \
         Style should be " + topInput + " \
         Emotion: be " + lowInput + " teacher, and imagine you have to report everything to other teacher who will deal with the information and translate it to parents of child."

        let object = { ...arrayStrictness[0].option, prompt: input };

        const response = await openai.createCompletion(object);
    
        setResult(response.data.choices[0].text);
      };

    const resetInput = () => {
        setTopInput("")
        setMidInput("")
        setLowInput("Neutral")
        setSituationCheck(false)
        setPsichologyCheck(false)
        setPlanCheck(false)
    }

    console.log(result)

    return (
        <div className="create">
            <h2>{t('Title')}</h2>
            <from>
                <label>{t('Motive.Title')}</label>
                <input
                    type="text"
                    placeholder={t('Motive.Hint')}
                    required
                    onChange={(e) => setTopInput(e.target.value)}
                />
                <label>{t('Clue.Title')}</label>
                <textarea
                    required
                    placeholder={t('Clue.Hint')}
                    onChange={(e) => setMidInput(e.target.value)}
                />
                <label>{t('Strictness.Title')}</label>
                <select
                    onChange={(e) => setLowInput(e.target.value)}
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
                                setPsichologyCheck(!psichologyCheck)
                                // check if data input is > 0
                                e.length === 0 && e.length === 0? setIsInputFull(true) : setIsInputFull(false)
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
                <LoadingButton loading={loading} onClick={() => {
                    setLoading(true)
                    doStuff()

                    setTimeout(() => {
                        setLoading(false)
                    }, 1000)
                }} />
            </from>
            <Callback result={result} />
        </div>
    )
}