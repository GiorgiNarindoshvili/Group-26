import { useState } from "react";

const userAccept = (initialState = {}, onSubmit) => {
    const [values, setValues] = useState(initialState)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setValues((prev) => ({...prev,[name]: value}));

        
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)
        await onSubmit(values)
        setLoading(false);
    }


    return {values, loading, handleChange, handleSubmit}
}

export default userAccept