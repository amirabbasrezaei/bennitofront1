import create from 'zustand'
import { persist, devtools } from "zustand/middleware";

interface digitalStackInterface {
    digitalStack: string,
    setDigitalStack: (e) => void
}

export const useDigitalStack = create<digitalStackInterface>()(persist((set) => ({
    digitalStack : "",
    setDigitalStack : (e:any) => set(() => ({digitalStack: e}))
})))
