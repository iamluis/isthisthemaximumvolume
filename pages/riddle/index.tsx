import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../../styles/Riddle.module.css'

const Home: NextPage = () => {
  const [answer, setAnswer] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [showError, setShowError] = useState(false)
  const [attempts, setAttempts] = useState(0)
  
  const checkAnswer = (input: string): boolean => {
    const normalizedInput = input.toLowerCase().trim()
    const correctAnswers = ['tiny spa', 'tinyspa', 'the tiny spa']
    return correctAnswers.includes(normalizedInput)
  }

  const getErrorMessage = (attempts: number): string => {
    const messages = [
      "By Zeus's beard, that's not it! Maybe check the hint?",
      "By the gods of Olympus, keep trying!",
      "Athena suggests you might want to use that hint button...",
      "Perhaps Hermes himself is making this tricky for you..."
    ]
    return messages[(attempts-1)%messages.length]
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (checkAnswer(answer)) {
      setShowSuccess(true)
      setShowError(false)
    } else {
      setAttempts(prev => prev + 1)
      setShowError(true)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>A Greek Mystery Gift</title>
        <meta name="description" content="Solve the riddle to reveal your special gift!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.home}>
        <Link href="/" passHref>
          Home
        </Link>
      </div>

      <main className={styles.main}>
        <div className={styles.content}>
          {/* Header */}
          <div className={styles.header}>
            <h1>🏺 A Greek Mystery 🏺</h1>
            <p>Solve the riddle to reveal your gift...</p>
          </div>

          {/* Riddle Section */}
          <div className={styles.riddleBox}>
            <p>
              In Brussels&apos; heart where gardens grow,
              <br/>
              Lies peace that ancient Greeks did know.
              <br/>
              Like Hygeia&apos;s healing touch divine,
              <br/>
              For two souls&apos; rest, this gift is thine.
              <br/>
              Where water flows and stress melts away,
              <br/>
              Like Apollo&apos;s springs on a summer&apos;s day.
              <br/>
              &quot;Mikros&quot; in Greek, but grand in care,
              <br/>
              What treasure awaits this special pair?
            </p>
          </div>

          {/* Answer Form */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="answer">
                Your Answer:
              </label>
              <input
                type="text"
                id="answer"
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value)
                  setShowError(false) // Clear error when typing
                }}
                placeholder="Enter your answer..."
                className={showError ? styles.inputError : ''}
              />
            </div>
            
            <div className={styles.buttonGroup}>
              <button type="submit" className={styles.submitButton}>
                Check Answer
              </button>
              <button
                type="button"
                onClick={() => setShowHint(true)}
                className={styles.hintButton}
              >
                Need a Hint?
              </button>
            </div>
          </form>

          {/* Error Message */}
          {showError && (
            <div className={styles.error}>
              <p>⚡ {getErrorMessage(attempts)}</p>
            </div>
          )}

          {/* Success Message */}
          {showSuccess && (
            <div className={styles.success}>
              <p>🎉 Congratulations! You&apos;ve solved the riddle!</p>
              <Link href="/voucher.pdf" passHref>
                <span className={styles.downloadButton}>
                  Download Your Gift 🎁
                </span>
              </Link>
            </div>
          )}

          {/* Hint Message */}
          {showHint && (
            <div className={styles.hint}>
              <p>🤔 Think about the Greek word &quot;Mikros&quot; and its meaning in English...</p>
              <p className={styles.hintExtra}>Still stuck? &quot;Mikros&quot; means &quot;tiny&quot; in Greek!</p>
            </div>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Made with 💝 for two special friends</p>
      </footer>
    </div>
  )
}

export default Home