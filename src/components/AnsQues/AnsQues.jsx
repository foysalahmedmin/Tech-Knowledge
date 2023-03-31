import React, { useState } from 'react';

const AnsQues = (props) => {
    const {question, ans} = props.data
    const [show, setShow] = useState([false]);
    return (
        <div>
            <div className="mb-5">
                <div onClick={()=>setShow(!show)} className=" bg-sky-700 px-12 py-6 border-sky-950">
                    <h3 className="text-white text-xl font-semibold">
                        {question}
                    </h3>
                </div>
                <div className= {show == true? "block" : "hidden"}>
                    <p className='px-12 py-6'>
                        {ans}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AnsQues;