/**
 * @copyright 2025 Shahriar Tamjid
 * @license Apache-2.0
 */

import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Experience from './components/Experience'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
      </main>
    </>
  )
}

export default App