import { AiFillCopy, AiOutlineDelete } from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid';
import { Context } from "../context/form";
import React, { useContext, useState } from "react";
const FormSecond = ({data,id}) => {

    const { formDataList,formCopy,deleteForm } = useContext(Context);


    const generateId = () => {
        const unique_id = uuidv4();
        const small_id = unique_id.slice(0, 8)
        return small_id
    }
   
    const [formData, setFormData] = useState({
        ...data,
    }
    )

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)

    };
    const handleMomentumChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, simpleMomentum: {
                ...formData.simpleMomentum,
                [name]: value
            }
        });
        console.log(formData)

    };
    const handleTrailChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, trailSL: {
                ...formData.trailSL,
                [name]: value
            }
        });
        console.log(formData)

    };
    const handleTrailValueChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, trailSL: {
                ...formData.trailSL,
                Value: {
                    ...formData.trailSL.Value,
                    [name]: value
                }
            }
        });
        console.log(formData)

    };

    const [simplemomentum, setSimplemomentum] = useState(false)
    const [trailsl, setTrailsl] = useState(false)
    return (
        <>
            <div className="container py-2" >


                <div className="flex flex-row-reverse p-5 w-fit mx-auto  bg-gray-100 shadow-lg my-2 rounded-sm">
                    <div className="flex flex-col gap-2">
                        <AiFillCopy onClick={() => formCopy(formData)} className='cursor-pointer text-lg'/>
                        <AiOutlineDelete className='text-red-500 cursor-pointer text-lg' onClick={() => deleteForm(id)} />
                    </div>
                    <form className='flex flex-col items-center gap-5 p-5 bg-gray-100 '>

                        <div className="input-container flex flex-wrap gap-5">
                            <label className='flex  gap-1 text-sm font-semibold'>
                                Lots
                                <input
                                    id='name'
                                    name='lots'
                                    type='number'
                                    required
                                    minLength="3"
                                    maxLength="25"
                                    value={formData.lots}
                                    onChange={handleChangeInput}
                                    className='w-[60px] border rounded-full  px-1 bg-cyan-800 text-white'
                                />
                            </label>
                            <div>
                                <label className='flex flex-col gap-1 text-sm font-semibold'>
                                    <select
                                        value={formData.positionType}
                                        onChange={handleChangeInput}
                                        className='w-[60px] border rounded-full  px-1 bg-cyan-800 text-white'
                                        name='positionType'
                                    >
                                        <option name="positionType"> Buy</option>
                                        <option name="positionType">Sell</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label className='flex flex-col gap-1 text-sm font-semibold'>
                                    <select
                                        value={formData.optionType}
                                        onChange={handleChangeInput}
                                        className='w-[60px] border rounded-full  px-1 bg-cyan-800 text-white'
                                        name='optionType'
                                    >
                                        <option name="optionType"> Call</option>
                                        <option name="optionType">Put</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label className='flex flex-col gap-1 text-sm font-semibold'>

                                    <select
                                        value={formData.ExpiryType}
                                        onChange={handleChangeInput}
                                        className='w-[80px] border rounded-full  px-1 bg-cyan-800 text-white'
                                        name='ExpiryType'
                                    >
                                        <option name="ExpiryType"> weekly</option>
                                        <option name="ExpiryType">monthly</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label className='flex  gap-1 text-sm font-semibold'>
                                    Select Strike
                                    <select
                                        value={formData.selectStrikeCriteria}
                                        onChange={handleChangeInput}
                                        className='w-[150px] border rounded-full  px-1 bg-cyan-800 text-white'
                                        name='selectStrikeCriteria'
                                    >
                                        <option name="selectStrikeCriteria">strikeType</option>
                                        <option name="selectStrikeCriteria">premimumRange</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col">
                                <div className="flex">
                                    <input type="checkbox" onClick={() => setSimplemomentum(!simplemomentum)}
                                        className='accent-cyan-800 '
                                    /> simple Momentum
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div>
                                        <label className='flex flex-col gap-1 text-sm font-semibold'>

                                            <select
                                                disabled={simplemomentum ? "" : "disabled"}
                                                value={formData.simpleMomentum.type}
                                                onChange={handleMomentumChangeInput}
                                                className='w-[80px] border rounded-full  px-1 bg-cyan-800 text-white'
                                                name='type'
                                            >
                                                <option name="type">pointsUp</option>
                                                <option name="type">pointsDown</option>
                                            </select>
                                        </label>
                                    </div>
                                    <label className='flex  gap-1 text-sm font-semibold'>

                                        <input
                                            disabled={simplemomentum ? "" : "disabled"}
                                            id='momentum_value'
                                            name='Value'
                                            type='number'
                                            value={formData.simpleMomentum.Value}
                                            onChange={handleMomentumChangeInput}
                                            className='w-[60px] border rounded-full  px-1 bg-white'
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex">
                                    <input
                                        type="checkbox"
                                        onClick={() => setTrailsl(!trailsl)}
                                        className='accent-cyan-800 '
                                    /> Trail SL
                                </div>
                                <div className="flex gap-2">
                                    <div>
                                        <label className='flex flex-col gap-1 text-sm font-semibold'>

                                            <select
                                                disabled={trailsl ? "" : "disabled"}
                                                value={formData.trailSL.Type}
                                                onChange={handleTrailChangeInput}
                                                className='w-[80px] border rounded-full  px-1 bg-cyan-800 text-white'
                                                name='Type'
                                            >
                                                <option name="type">points</option>
                                                <option name="type">percentage</option>
                                            </select>
                                        </label>
                                    </div>
                                    <label className='flex  gap-1 text-sm font-semibold'>

                                        <input
                                            disabled={trailsl ? "" : "disabled"}
                                            id='momentum_instrumentMove_value'
                                            name='instrumentMove'
                                            type='number'
                                            value={formData.trailSL.Value.instrumentMove}
                                            onChange={handleTrailValueChangeInput}
                                            className='w-[60px] border rounded-full  px-1 bg-white'
                                        />
                                    </label>  <label className='flex  gap-1 text-sm font-semibold'>

                                        <input
                                            disabled={trailsl ? "" : "disabled"}
                                            id='trailSL_StopLoss_value'
                                            name='stopLossMove'
                                            type='number'
                                            value={formData.trailSL.Value.stopLossMove}
                                            onChange={handleTrailValueChangeInput}
                                            className='w-[60px] border rounded-full  px-1 bg-white'
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button className='px-2 bg-cyan-800 text-sm text-white'>Final Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormSecond