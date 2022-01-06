import React, { useEffect, useState } from 'react'

const Api = () => {
    const [user, setUser] = useState([]);


    const getUser = async () => {
        const response = await fetch('https://api.github.com/users');
        // console.log(response);
        // const data=await response.json();
        setUser(await response.json());
        // console.log(data);

    }

    useEffect(() => {
        getUser();
    }, [])
    return (
        <>
        <div className='text-info'>
            <h1>List Of Github Users</h1>
            <div className='conatiner-fluid mt-5 text-success'>
                <div className='row text-centre'>

                    {
                        user.map((cuurrElem) => {
                            return (
                                <>
                                    <div className='d-flex justify-content-evenly'>

                                        <div className='col-10 col-md-4 mt-5' key={cuurrElem.id}>
                                            <div className='card p-2'>
                                                <div className='d-flex align-items-center'>
                                                    <div className='image'><img className='rounded' src={cuurrElem.avatar_url} alt="" width="155" /></div>
                                                    <div className='ml-3 w-100'>
                                                        <h4 className='mb-0 mt-0 textLeft'>{cuurrElem.login}</h4><span className='textLeft'>{cuurrElem.following_url.slice(-20)}</span>
                                                        <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                                                            <div className='d-flex flex-column'><span className='articles'>Articles</span><span className='number1'>38</span></div>
                                                            <div className='d-flex flex-column'><span className='followers'>Followers</span><span className='number2'>989</span></div>
                                                            <div className='d-flex flex-column' ><span className='rating'>Rating</span><span className='number3'>638</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            )

                        })
                    }


                </div>
            </div>
            </div>
        </>
    )
}

export default Api;
