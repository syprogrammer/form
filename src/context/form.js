import React, { createContext, useState, useEffect } from "react";
export const Context = createContext();

export const AppContext = (props) => {
    const [formDataList, setFormDataList] = useState()
    const formCopy = (newFormData) => {
        setFormDataList(
            [
                ...formDataList,               
                newFormData,

            ]
        )
    }
    const deleteForm = (id) => {
        console.log(id,"delete")
        let filtered = formDataList.filter((data, index, arr) => index !== id)
        console.log(filtered,"filtered")
        setFormDataList(filtered)
    }
    console.log(formDataList)

    return (
        <Context.Provider
            value={{
                formDataList,
                setFormDataList,
                formCopy,
                deleteForm
            }}
        >
            {props.children}
        </Context.Provider>
    );
};