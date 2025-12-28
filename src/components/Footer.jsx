function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Volosist. All rights reserved.</p>
      <p style={styles.tagline}>AI Automation Service Company</p>
    </footer>
  )
}

const styles = {
  footer: {
    padding: '2rem',
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
  },
  tagline: {
    fontSize: '0.9rem',
    fontStyle: 'italic',
    marginTop: '0.5rem',
    opacity: '0.8',
  },
}

export default Footer