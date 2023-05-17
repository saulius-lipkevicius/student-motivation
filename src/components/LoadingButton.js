import React from 'react'
import { useTranslation } from 'react-i18next'
import '../css/LoadingButton.css'
import Spinner from './spinner.gif';

const LoadingButton = ({ loading, onClick }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'Product' });
    
    return (
        <button onClick={onClick} className='loading-spinner-button'>
            {
                loading ? <img src={Spinner} alt='spinner' /> : t('Button')  + ' '
            }
        </button>
    )
}

export default LoadingButton;