import React from 'react'
export { PageLayout }
import '../src/styles/globals.css'
import '../src/styles/style.css'

function PageLayout({ children }: { children: React.ReactNode; }) {
    return (
        <React.StrictMode>
            {children}
        </React.StrictMode>
    )
}
