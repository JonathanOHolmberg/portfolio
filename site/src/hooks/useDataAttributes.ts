const useDataAttributes = () => {
    const setDataValue = (key: string, value: string) => {
      try {
        document.documentElement.setAttribute(key, value)
      } catch (e) {
        console.log(`Error setting data attribute: ${(e as Error).message}`)
      }
    }

    const getDataValue = (key: string) => {
      try {
        document.documentElement.getAttribute(key)
      } catch (e) {
        console.log(`Error setting data attribute: ${(e as Error).message}`)
      }
    }
  
    const removeDataValue = (key: string) => {
      try {
        document.documentElement.removeAttribute(key)
      } catch (e) {
        console.error(`Error removing data attribute: ${(e as Error).message}`)
      }
    }
  
    return { setDataValue, getDataValue, removeDataValue };
  }
  
  export default useDataAttributes;