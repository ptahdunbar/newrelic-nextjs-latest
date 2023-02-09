import './globals.css'
import Link from 'next/link'

import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'NextJS x New Relic Test',
    template: '%s | Acme',
  },
  description: 'Testing NextJS with New Relic integration',
}

// TODO:
// these next lines fail to include newrelic
// resulting in the browser agent not being injected.
// import newrelic from 'newrelic'
const newrelic = require('newrelic')

export default async function RootLayout({ children }) {

  // TODO: doesn't load due to line 19 -_-
  // const browserTimingHeader = newrelic.getBrowserTimingHeader({
  //   hasToRemoveScriptWrapper: true,
  //   allowTransactionlessInjection: true
  // });

  return (
    <html lang="en">
      <head>
        {/* <script
          id='newrelic'
          type="text/javascript"
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: browserTimingHeader }}
        /> */}
      </head>
      <body>
        <header id="header">
          <nav className={inter.className}>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
