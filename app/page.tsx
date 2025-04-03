'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Loading from './loading'

const Header = dynamic(() => import('./components/header'), {
  loading: () => <Loading />
})
const Hero = dynamic(() => import('./components/hero'), {
  loading: () => <Loading />
})
const HowItWorks = dynamic(() => import('./components/how-it-works'), {
  loading: () => <Loading />
})
const Showcase = dynamic(() => import('./components/showcase'), {
  loading: () => <Loading />
})
const FAQ = dynamic(() => import('./components/faq'), {
  loading: () => <Loading />
})
const CTA = dynamic(() => import('./components/cta'), {
  loading: () => <Loading />
})
const Footer = dynamic(() => import('./components/footer'), {
  loading: () => <Loading />
})
const Comparison = dynamic(() => import('./components/comparison'), {
  loading: () => <Loading />
})
const JoinWaitlist = dynamic(() => import('./components/join-waitlist'), {
  loading: () => <Loading />
})
const About = dynamic(() => import('./components/about'), {
  loading: () => <Loading />
})

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<Loading />}>
        <Header />
      </Suspense>
      <main className="flex-grow mt-16"> {/* Changed pt-16 to mt-16 for better spacing */}
        <Suspense fallback={<Loading />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <section id="features">
            <Comparison />
          </section>
        </Suspense>
        <Suspense fallback={<Loading />}>
          <section id="overview">
            <Showcase />
          </section>
        </Suspense>
        <Suspense fallback={<Loading />}>
          <section id="how-it-works">
            <HowItWorks />
          </section>
        </Suspense>
        <Suspense fallback={<Loading />}>
          <JoinWaitlist />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <section id="about">
            <About />
          </section>
        </Suspense>
        <Suspense fallback={<Loading />}>
          <section id="faqs">
            <FAQ />
          </section>
        </Suspense>
        <Suspense fallback={<Loading />}>
          <section id="join-waitlist">
            <CTA />
          </section>
        </Suspense>
      </main>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  )
}

