import React from 'react'
import { AdminContent } from '../components/AdminContent'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export const Admin = () => {
    return (
        <div className="alto-100 ">
            <Navbar />
            
            <AdminContent />

            <div className="footer-end">
                <Footer/> 
            </div>
        </div>
    )
}
