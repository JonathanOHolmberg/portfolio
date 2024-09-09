const useLocalStorage = () => {
    const setLocalStorageItem = (key: string, value: string) => {
      try {
        localStorage.setItem(key, value)
      } catch (e) {
        console.log(`Error setting localStorage item: ${(e as Error).message}`)
      }
    }
  
    const getLocalStorageItem = (key: string): string | null => {
      try {
        return localStorage.getItem(key)
      } catch (e) {
        console.log(`Error getting localStorage item: ${(e as Error).message}`)
        return null;
      }
    }
  
    const removeLocalStorageItem = (key: string) => {
      try {
        localStorage.removeItem(key)
      } catch (e) {
        console.log(`Error removing localStorage item: ${(e as Error).message}`)
      }
    }
  
    return { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem, };
  }
  
  export default useLocalStorage;