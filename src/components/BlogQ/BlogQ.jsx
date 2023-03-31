import React, { useEffect, useState } from 'react';
import AnsQues from '../AnsQues/AnsQues';
   

const BlogQ = () => {
    const [ansQues, setAnsQues] = useState([]);
    useEffect(()=>{
        fetch("question_ans.json")
        .then(res => res.json())
        .then(data => setAnsQues(data))
    },[])
    return (
        <section className='my-20'>
            <div className="container mx-auto px-[2.5%]">
                <div className='text-center mb-5'>
                    <h1 className='text-2xl font-bold my-12'>Ans Of Questions</h1>
                </div>
                {
                    ansQues.map(singleQuestion => <AnsQues data= {singleQuestion} key={singleQuestion.id}></AnsQues>)
                }
            </div>
        </section>
    );
};

export default BlogQ;