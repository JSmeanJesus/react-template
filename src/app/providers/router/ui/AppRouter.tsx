import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter = () => {
    return (

        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<div>Load...</div>} >
                            <div className='page-wrapper'>
                                {element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    )
}
