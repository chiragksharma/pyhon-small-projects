import React from "react";
import { Heading } from '@chakra-ui/react';

function Hero(){
    return (
    <div>
        <div className="container bg-gradient-to-r from-cyan-100 to-cyan-200 mx-auto rounded-md mx-3 p-5">
            <Heading>
                Amazing offers available
            </Heading>
        </div>
        <div className="container bg-gray-300 w-max p-3">
            <marquee behavior="scroll" direction="left">50% sale</marquee>
        </div>
    </div>
    )
}

export default Hero;