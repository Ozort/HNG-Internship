// JavaScript to update real-time data
  function updateData() {
      const slackName = "ABU BOBBY"; // Update with your Slack name
      const slackProfilePicture = "https://ca.slack-edge.com/T05FFAA91JP-U05RL20ASG2-411ab67f282c-72"; // Update with your Slack profile picture URL
      const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
      const currentUTCTime = new Date().getTime();
      const track = "Frontend Web Development"; // Update with your track
      const githubURL = "https://github.com/Ozort/HNG-Internship.git"; // Update with your GitHub repository URL

      document.querySelector('[data-testid="slackUserName"]').textContent = slackName;
      document.querySelector('[data-testid="slackDisplayImage"]').src = slackProfilePicture;
      document.querySelector('[data-testid="slackDisplayImage"]').alt = slackName;
      document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;
      document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
      document.querySelector('[data-testid="myTrack"]').textContent = track;
      document.querySelector('[data-testid="githubURL"]').href = githubURL;
  }

  // Call the updateData function to populate data
  updateData();

  // Update current UTC time every second
  setInterval(updateData, 1000);
