import {create} from 'zustand'
let data_orig = [
    {"id":0,"name":"versionhallinta"},
    {"id":1,"name":"java"},
    {"id":2,"name":"ruotsi"},
    {id:3,name:"ohjelmointi 1"}];

const useDataStore = create((set) => ({
    data: data_orig,
    addRow: (r) => set((state) => ({data: [...state.data, r] })),

}))

export {useDataStore}