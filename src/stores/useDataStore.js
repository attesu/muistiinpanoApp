import {create} from 'zustand'
let data_orig = [
    ];

const useDataStore = create((set) => ({
    data: data_orig,
    addRow: (r) => set((state) => ({data: [...state.data, r] })),

}))

export {useDataStore}