import FormSecond from './FormSecond';
import { v4 as uuidv4 } from 'uuid';
import { Context } from "../context/form";
import React, { useContext, useState ,useEffect} from "react";
const Home = () => {

    const generateId = () => {
        const unique_id = uuidv4();
        const small_id = unique_id.slice(0, 8)
        return small_id
    }
    const [formData, setFormData] = useState({
        id: generateId(),
        lots: 1,
        positionType: "Sell",
        optionType: "call",
        ExpiryType: "weekly",
        selectStrikeCriteria: "premimumRange",
        simpleMomentum: {
            type: "pointsDown",
            Value: 1
        },
        trailSL: {
            Type: "percentage",
            Value: {
                instrumentMove: 1,
                stopLossMove: 1,
            },
        }
    }
    )

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)

    };

    const { formDataList, setFormDataList, } = useContext(Context);
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormDataList([formData])
    }
    
    
    return (
        <>
            <div className="flex flex-col p-5  ">
                <form 
                onSubmit={handleSubmit}
                className='flex flex-col items-center gap-5 p-5 bg-gray-100 w-fit mx-auto py-5 shadow-lg rounded-sm'>

                    <div className="input-container flex flex-wrap gap-5">
                        <label className='flex flex-col gap-1 text-sm font-semibold'>
                            Total lot
                            <input
                                id='name'
                                name='lots'
                                type='number'
                                required
                                minLength="3"
                                maxLength="25"
                                value={formData.lots}
                                onChange={handleChangeInput}
                                className='w-[60px] border rounded-full bg-white px-1'
                            />
                        </label>
                        <div>
                            <label className='flex flex-col gap-1 text-sm font-semibold'>
                                Position
                                <select
                                    value={formData.positionType}
                                    onChange={handleChangeInput}
                                    className='w-[60px] border rounded-full bg-white px-1'
                                    name='positionType'
                                >
                                    <option name="positionType"> Buy</option>
                                    <option name="positionType">Sell</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label className='flex flex-col gap-1 text-sm font-semibold'>
                                Option Type
                                <select
                                    value={formData.optionType}
                                    onChange={handleChangeInput}
                                    className='w-[60px] border rounded-full bg-white px-1'
                                    name='optionType'
                                >
                                    <option name="optionType"> Call</option>
                                    <option name="optionType">Put</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label className='flex flex-col gap-1 text-sm font-semibold'>
                                Expiry
                                <select
                                    value={formData.ExpiryType}
                                    onChange={handleChangeInput}
                                    className='w-[80px] border rounded-full bg-white px-1'
                                    name='ExpiryType'
                                >
                                    <option name="ExpiryType"> weekly</option>
                                    <option name="ExpiryType">monthly</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label className='flex flex-col gap-1 text-sm font-semibold'>
                                Select Strike Criteria
                                <select
                                    value={formData.selectStrikeCriteria}
                                    onChange={handleChangeInput}
                                    className='w-[150px] border rounded-full bg-white px-1'
                                    name='selectStrikeCriteria'
                                >
                                    <option name="selectStrikeCriteria">strikeType</option>
                                    <option name="selectStrikeCriteria">premimumRange</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="buttons flex gap-2">
                        <button type='submit' className='px-4  text-sm bg-cyan-800 text-white rounded-full'>Add Leg</button>
                        <button className='px-4  text-sm text-cyan-800 bg-white rounded-full'>Cancel</button>
                    </div>
                </form>
                {
                    formDataList && (
                        formDataList.map((data, index) => {

                            return (
                                <>
                                    <div className="" key={data.id}>
                                        <FormSecond data={data} id = {index}/>
                                    </div>
                                </>
                            )
                        })
                    )
                }

            </div>
        </>
    )
}

export default Home