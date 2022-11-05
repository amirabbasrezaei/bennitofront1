import React from 'react'

type Props = {
    loading: boolean
}

export default function CategoryItemSkeleton({ loading }: Props) {
    return (
        <>
            {loading && <div role="status" className=" animate-pulse flex flex-col gap-2 w">
                <div className=" bg-gray-200 rounded-md p-2 h-14"></div>
                <div className=" bg-gray-200  rounded-md p-2 h-14"></div>
                <div className="  bg-gray-200 rounded-md p-2 h-14"></div>
                <div className="  bg-gray-200 rounded-md p-2 h-14"></div>
            </div>}
        </>
    )
}