import { useState, useEffect } from 'react'

function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    isExpired: false
  })

  useEffect(() => {
    const launchDate = new Date('February 1, 2026 00:00:00').getTime()
    
    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = launchDate - now

      if (distance < 0) {
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
          isExpired: true
        })
        return
      }

      // Calculate days, hours, minutes, seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      // Format numbers to always have two digits
      const format = (num) => (num < 10 ? '0' + num : num)

      setTimeLeft({
        days: format(days),
        hours: format(hours),
        minutes: format(minutes),
        seconds: format(seconds),
        isExpired: false
      })
    }

    const countdownInterval = setInterval(updateCountdown, 1000)
    updateCountdown() // Initial call

    return () => clearInterval(countdownInterval)
  }, [])

  return (
    <div className="countdown-section">
      <h3>Launching Soon</h3>
      <div id="countdown-timer">
        {timeLeft.isExpired ? (
          <div style={{ fontSize: '2rem', color: '#EAC035', fontWeight: '700', padding: '20px', gridColumn: '1 / -1' }}>
            We Are Live!
          </div>
        ) : (
          <>
            <div className="time-unit">
              <div className="time-value">{timeLeft.days}</div>
              <div className="time-label">Days</div>
            </div>
            <div className="time-unit">
              <div className="time-value">{timeLeft.hours}</div>
              <div className="time-label">Hours</div>
            </div>
            <div className="time-unit">
              <div className="time-value">{timeLeft.minutes}</div>
              <div className="time-label">Minutes</div>
            </div>
            <div className="time-unit">
              <div className="time-value">{timeLeft.seconds}</div>
              <div className="time-label">Seconds</div>
            </div>
          </>
        )}
      </div>
      <p className="launch-date">February 1, 2026</p>
    </div>
  )
}

export default CountdownSection