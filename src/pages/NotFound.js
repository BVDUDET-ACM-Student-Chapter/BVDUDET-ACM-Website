import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <main class="grid min-h-full place-items-centerpx-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-base font-semibold text-blue-600">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight  sm:text-5xl">
        😓 Page not found
        </h1>
        <p class="mt-6 text-base leading-7">
          Oops! It seems like you&apos;ve wandered into the unknown corners of our website.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <NavLink
            to="/"
            className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
          >
            Go back home
          </NavLink>
        </div>
      </div>
    </main>
  )
}

export default NotFound