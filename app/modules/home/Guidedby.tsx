import Card from '@/app/components/Card'
import React from 'react'

const Guidedby = () => {
    return (
        <div className="flex flex-col items-center space-y-5 mb-20 sm:flex-row sm:justify-center sm:items-center sm:space-y-0 sm:space-x-5">
            <Card imageName="/sakmapFounder1.jpeg" altName="PhD and experts of sakmap" />
            <Card imageName="/sakmapFounder2.jpeg" altName="founders and experts of sakmap" />
            <Card imageName="/sakmapFounder3.jpeg" altName="PhD and experts of sakmap" />
        </div>
    )
}

export default Guidedby
