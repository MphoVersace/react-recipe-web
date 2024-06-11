import React, { forwardRef } from 'react';
import RecipeDetailPage from './RecipeDetailPage';

    const Page = forwardRef((props, ref) => {
        return (
            <div className="demoPage bg-white" ref={ref}>
                <div className='h-full'>
                    {props.children}
                </div>
                <p className='text-xs text-end text-gray-500 pb-4'>Page: {props.number}</p>
            </div>
        );
    });

export default Page;
