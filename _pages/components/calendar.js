(function() {
  const root = document.getElementById("calendar-root");
  if (!root) return;

  root.innerHTML = `
    <section class="calendar-section">
      <header>
        <h2>Event Calendar</h2>
        <p>View upcoming events and add them to your Google Calendar.</p>
      </header>

      <div class="calendar-controls">
        <button id="prev-month">◀</button>
        <h3 id="calendar-title"></h3>
        <button id="next-month">▶</button>
      </div>

      <div class="calendar">
        <div class="calendar-grid" id="calendar-grid"></div>
      </div>
    </section>
  `;

  const calendarGrid = root.querySelector("#calendar-grid");
  const calendarTitle = root.querySelector("#calendar-title");
  const prevBtn = root.querySelector("#prev-month");
  const nextBtn = root.querySelector("#next-month");

  let currentDate = new Date();

  // Events
  const events = [
    {
      title: "HTML/CSS Workshop",
      date: "2025-10-02",
      startTime: "14:00",
      endTime: "16:00",
      location: "Team Workshop",
      details: "Wolverine Robotics Workshop"
    },
    {
      title: "Kickoff Meeting",
      date: "2025-11-05",
      startTime: "13:00",
      endTime: "15:00",
      location: "Main Lab",
      details: "Discuss new build strategies"
    }
  ];

  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    calendarTitle.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const numDays = new Date(year, month + 1, 0).getDate();

    calendarGrid.innerHTML = "";

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    dayNames.forEach(day => {
      const div = document.createElement("div");
      div.classList.add("day-name");
      div.textContent = day;
      calendarGrid.appendChild(div);
    });

    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement("div");
      calendarGrid.appendChild(empty);
    }


    for (let day = 1; day <= numDays; day++) {
      const dayCell = document.createElement("div");
      dayCell.classList.add("day");
      dayCell.textContent = day;

      const eventDateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const dayEvents = events.filter(e => e.date === eventDateStr);

      if (dayEvents.length > 0) {
        dayCell.classList.add("event-day");
        dayEvents.forEach(ev => {
          const link = document.createElement("a");
          link.classList.add("event-link");
          link.textContent = ev.title;

          const startISO = `${ev.date}T${ev.startTime.replace(":", "")}00Z`;
          const endISO = `${ev.date}T${ev.endTime.replace(":", "")}00Z`;
          link.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(ev.title)}&dates=${startISO}/${endISO}&details=${encodeURIComponent(ev.details)}&location=${encodeURIComponent(ev.location)}`;
          link.target = "_blank";

          dayCell.appendChild(link);
        });
      }

      calendarGrid.appendChild(dayCell);
    }
  }

  prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

  nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });

  renderCalendar(currentDate);
})();
