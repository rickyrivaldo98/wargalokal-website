import React from 'react'
// import logo from './logo.svg'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
// import './PageShell.css'
import Home from './pages/HomePage'
import { Link } from './Link'

export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
    return (
        <React.StrictMode>
            <PageContextProvider pageContext={pageContext}>
                <Home />
            </PageContextProvider>
        </React.StrictMode>
    )
}
