import React, { useState, useEffect } from 'react';
import ten from '../../assets/ten.png';
import happy from '../../assets/happy.png';
import accuracy from '../../assets/accuracy.png';
import success from '../../assets/success.png';

function useCounterAnimation(initialCount, targetCount, intervalTime) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        if (count < targetCount) {
            const interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, intervalTime);
            return () => clearInterval(interval);
        }
    }, [count, targetCount, intervalTime]);

    return count;
}

function Count() {
    const count = useCounterAnimation(0, 400, 1);
    const count1 = useCounterAnimation(0, 98, 10);
    const count2 = useCounterAnimation(0, 100, 10);
    const count3 = useCounterAnimation(0, 10, 100);

    return (
        <div>
            <section className="body-font">
                <div className="container px-5 mb-8 mx-auto">
                    <div className="flex flex-col text-center w-full mb-4">
                        <h1 className="sm:text-6xl text-4xl font-bold title-font mb-4">Our Feats</h1>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="px-4 py-6 flex flex-col items-center">
                                <img src={happy} alt="Happy Customers" className="w-24 h-24 md:w-32 md:h-32 mx-5"/>
                                <h2 className="title-font font-bold text-3xl">{count}+</h2>
                                <p className="leading-relaxed">Happy Customers</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="px-4 py-6 flex flex-col items-center">
                                <img src={accuracy} alt="Accuracy" className="w-24 h-24 md:w-32 md:h-32 mx-5"/>
                                <h2 className="title-font font-bold text-3xl">Upto {count1}%</h2>
                                <p className="leading-relaxed">Accurate</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="px-4 py-6 flex flex-col items-center">
                                <img src={success} alt="Successful Tests" className="w-24 h-24 md:w-32 md:h-32 mx-5"/>
                                <h2 className="title-font font-bold text-3xl">{count2}+</h2>
                                <p className="leading-relaxed">Successful Tests</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="px-4 py-6 flex flex-col items-center">
                                <img src={ten} alt="Expert in Skin Diseases" className="w-24 h-24 md:w-32 md:h-32 mx-5"/>
                                <h2 className="title-font font-bold text-3xl">Expert in {count3}+</h2>
                                <p className="leading-relaxed">Skin Diseases and Conditions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Count;
