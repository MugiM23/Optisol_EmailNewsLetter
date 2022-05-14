import React from 'react'

export default function NewsLetterComponent() {
    const marketingItems = [
        {
            title: 'Tips for a good pitching presentation',
            subTitle: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
            imagePath: 'Image2.png'
        },
        {
            title: 'Improve Your Content’s Traffic',
            subTitle: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
            imagePath: 'Image3.png'
        },
        {
            title: 'Reaching Deal with your Clients',
            subTitle: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
            imagePath: 'Image4.png'
        },

    ]
    return (
        <div className='p-4 '>
            <div className='d-flex py-3 justify-content-around align-items-center'>
                <div>
                    <img src='images/Logo.svg' alt='' className='logo' />
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='py-1 px-3'> Why us?</span>
                    <span className='py-1 px-3'> Marketing Platform </span>
                    <span className='py-1 px-3'> Pricing </span>
                    <span className='py-1 px-3 signup d-flex align-items-center'>Sign Up, It's free</span>
                </div>
            </div>
            <div className='d-flex py-3 justify-content-around align-items-center'>
                <div className='d-flex flex-column col-3'>
                    <span className='marketingText'>We take care Marketing things</span>
                    <div className='d-flex justify-content-start align-items-center py-3'>
                        <button className='p-2 buttonStyle'> Pick a plan</button>
                    </div>
                </div>
                <div className='d-flex align-items-center' >
                    <img src='images/Illustration.svg' alt='' className='illustration' />
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='d-flex justify-content-between mx-2'>
                    <div className='d-flex align-items-center'>
                        <hr className='blueBottomBorder' />
                        <span className='px-2 blogText'>BLOG</span>
                    </div>
                </div>
                <div className='d-flex w-78'>
                </div>
            </div>
            <div className='d-flex justify-content-around align-items-center py-3'>
                <div className='col-7'>
                    <span className='font30'>Explore Marketing Tips</span>
                </div>
                <div className='d-flex justify-content-between px-4'>
                    <div className='px-3'>
                        <span className='arrowLight'>&#10229;</span>
                    </div>
                    <div className='px-3'>
                        <span className='arrowBold'>&#10230;</span>
                    </div>
                </div>
            </div>
            <div className='p-4 d-flex align-items-center justify-content-around'>
                {
                    marketingItems.map((item, index) => {
                        return <div className='d-flex justify-content-between m-2' key={index}>
                            <div className='d-flex flex-column'>
                                <div style={{
                                    backgroundImage: `url(/images/${item.imagePath})`,
                                    backgroundRepeat: 'no-repeat',
                                    objectFit: 'cover',
                                    width: '16vw',
                                    height: '16vw'
                                }}>
                                </div>
                                <div className='d-flex flex-column py-2 flex-wrap' style={{
                                    width: '16vw',
                                    height: '16vw'
                                }}>
                                    <div>
                                        <span className='titleFont text-align-center'>{item.title}</span>
                                    </div>
                                    <div className='py-2'>
                                        <span className='subTitleFont text-align-center'>{item.subTitle}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
                <div style={{ width: '5%' }}></div>
            </div>
            <div className='d-flex justify-content-around align-items-center'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <img src='images/Logo.svg' alt='' className='logo' />
                    </div>
                    <span className='py-1 px-3' style={{color:'#212B36'}}> Terms & Condition </span>
                    <span className='py-1 px-3' style={{color:'#212B36'}}> Privacy Policy </span>
                </div>
                <div className='d-flex align-items-center'>
                    <span style={{color:'#82868A'}}>® 2019 Company name. All rights reserved.</span>
                </div>
            </div>
        </div>
    )
}
