    function updateClock() {
      const now = new Date()
      const time = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })

      const date = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })

      document.getElementById('clock').textContent = time
      document.getElementById('date').textContent = date
    }

    setInterval(updateClock, 1000)
    updateClock() // Run once immediately