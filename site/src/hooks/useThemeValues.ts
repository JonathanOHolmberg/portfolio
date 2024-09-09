import { useState, useEffect, useRef } from 'react'

import useLocalStorage from './useLocalStorage'
import useDataAttributes from './useDataAttributes'

const useThemeValue = (keyValue: string, defaultValue: string, saveToLocalStorage: boolean) => {

    const { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem } = useLocalStorage()
    const { setDataValue, removeDataValue } = useDataAttributes()

    const emptyValue = 'no item'
    const key = `data-${keyValue}`

    const ref = useRef(defaultValue)
    const [state, setState] = useState<string>(defaultValue)
    const [loading, setLoading] = useState<boolean>(true)

    const setValue = (newValue: string) => {
        setLoading(true)
        ref.current = newValue
        setState(newValue)
        setDataValue(key, newValue)
        if (saveToLocalStorage) { setLocalStorageItem(key, newValue) }
        setLoading(false)
        return;
    }

    const removeValue = () => {
        setLoading(true)
        ref.current = emptyValue
        setState(emptyValue)
        removeDataValue(key)
        if (saveToLocalStorage) { removeLocalStorageItem(key) }
        setLoading(false)
        return;
    }

    useEffect(() => {
        setLoading(true)
        let value = getLocalStorageItem(key)
        if (value && value !== emptyValue) {
          ref.current = value
          setDataValue(key, value)
          setState(value)
        } else if (keyValue === 'theme') {
            const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
            value = preference ? 'dark' : 'light';
            ref.current = value
            setDataValue(key, value)
            setState(value)
        }
        setLoading(false)
    }, [])

    return { key, value: state, setValue, removeValue, loading };
}

export default useThemeValue;