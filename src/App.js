import React, { useMemo, useState } from "react";

const EVENT_CONFIG = {
  Rain: { payout: 500, successMessage: "Heavy Rain Detected - ₹500 Credited" },
  Heat: { payout: 400, successMessage: "Extreme Heat Detected - ₹400 Credited" },
  Pollution: {
    payout: 300,
    successMessage: "High Pollution Detected - ₹300 Credited"
  }
};

const WEEKLY_PREMIUM = 80;
const WEEKLY_CAP = 1000;
const COOLDOWN_LIMIT = 2;

function App() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [totalPayout, setTotalPayout] = useState(0);
  const [userActive, setUserActive] = useState(true);
  const [locationValid, setLocationValid] = useState(true);
  const [cooldownCounter, setCooldownCounter] = useState(0);
  const [claimedEvents, setClaimedEvents] = useState([]);
  const [statusMessage, setStatusMessage] = useState(
    "System ready. Select an event simulation to evaluate policy rules."
  );
  const [lastEvent, setLastEvent] = useState("None");
  const [lastPayout, setLastPayout] = useState("₹0");
  const [eventHistory, setEventHistory] = useState([]);

  const riskLevel = useMemo(() => {
    if (totalPayout >= 700) return "High";
    if (totalPayout >= 300) return "Medium";
    return "Medium";
  }, [totalPayout]);

  const appendHistory = (entry) => {
    setEventHistory((prev) => [entry, ...prev].slice(0, 5));
  };

  const handleNavClick = (section) => {
    setActiveNav(section);
    setStatusMessage(`${section} section selected`);
  };

  const handleEventTrigger = (eventName) => {
    const config = EVENT_CONFIG[eventName];
    if (!config) return;

    let reason = "";
    let status = "Rejected";
    let payout = 0;
    let message = "";

    if (cooldownCounter < COOLDOWN_LIMIT) {
      reason = "Cooldown active";
      message = "Policy in cooldown period";
      setCooldownCounter((prev) => prev + 1);
    } else if (!userActive) {
      reason = "Inactive user";
      message = "User inactive - payout denied";
    } else if (!locationValid) {
      reason = "Invalid location";
      message = "Invalid location - payout denied";
    } else if (claimedEvents.includes(eventName)) {
      reason = "Duplicate claim";
      message = "Duplicate claim blocked";
    } else if (totalPayout + config.payout > WEEKLY_CAP) {
      reason = "Weekly cap reached";
      message = "Weekly payout limit reached";
    } else {
      status = "Success";
      reason = "Threshold met";
      payout = config.payout;
      message = config.successMessage;
      setTotalPayout((prev) => prev + config.payout);
      setClaimedEvents((prev) => [...prev, eventName]);
    }

    setStatusMessage(message);
    setLastEvent(eventName);
    setLastPayout(payout ? `₹${payout}` : "₹0");
    appendHistory({
      event: eventName,
      status,
      reason,
      payout: payout ? `₹${payout}` : "₹0"
    });
  };

  const handleReset = () => {
    setTotalPayout(0);
    setCooldownCounter(0);
    setClaimedEvents([]);
    setEventHistory([]);
    setStatusMessage("System ready. Select an event simulation to evaluate policy rules.");
    setLastEvent("None");
    setLastPayout("₹0");
  };

  const stats = [
    { label: "Weekly Premium", value: `₹${WEEKLY_PREMIUM}`, theme: "premium" },
    { label: "Risk Level", value: riskLevel, theme: "risk" },
    { label: "Total Payout", value: `₹${totalPayout}`, theme: "payout" },
    { label: "System Status", value: userActive ? "Active" : "Inactive", theme: "system" }
  ];

  const outputTone = useMemo(() => {
    const text = statusMessage.toLowerCase();
    if (text.includes("credited")) return "success";
    if (text.includes("cooldown") || text.includes("limit")) return "warning";
    if (text.includes("denied") || text.includes("blocked")) return "error";
    return "neutral";
  }, [statusMessage]);

  const statusDotClass = userActive ? "live" : "halted";

  const payoutTrend = useMemo(() => {
    return eventHistory
      .slice()
      .reverse()
      .map((entry) => Number(entry.payout.replace(/[^\d]/g, "")) || 0);
  }, [eventHistory]);

  const maxPayoutPoint = Math.max(...payoutTrend, 1);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-wrap">
          <div className="brand-badge">SS</div>
          <div>
            <h2>SafeShift</h2>
            <p>Parametric Cover</p>
          </div>
        </div>
        <nav className="nav-list">
          <button
            className={`nav-item ${activeNav === "Dashboard" ? "active" : ""}`}
            type="button"
            onClick={() => handleNavClick("Dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`nav-item ${activeNav === "History" ? "active" : ""}`}
            type="button"
            onClick={() => handleNavClick("History")}
          >
            History
          </button>
          <button
            className={`nav-item ${activeNav === "Settings" ? "active" : ""}`}
            type="button"
            onClick={() => handleNavClick("Settings")}
          >
            Settings
          </button>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="top-header card">
          <div>
            <h1>SafeShift Dashboard</h1>
            <p>AI-powered protection for delivery partners</p>
          </div>
          <div className="header-right">
            <input
              className="search"
              type="text"
              placeholder="Search modules, claims, events..."
            />
            <div className="avatar" aria-label="user avatar">
              NV
            </div>
          </div>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => (
            <article className={`card stat-card ${stat.theme}`} key={stat.label}>
              <p>{stat.label}</p>
              <h3>{stat.value}</h3>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article className="card info-card">
            <h3>Partner Profile</h3>
            <div className="profile-meta">
              <p>
                <strong>Name:</strong> Naveen
              </p>
              <p>
                <strong>City:</strong> Chennai
              </p>
            </div>
            <div className="risk-meter">
              <div className="risk-row">
                <strong>Risk Score</strong>
                <span>65/100</span>
              </div>
              <div className="risk-track">
                <div className="risk-fill" style={{ width: "65%" }} />
              </div>
            </div>
            <p className="card-note">
              Risk is calculated based on historical weather and environmental
              data.
            </p>
          </article>

          <article className="card insight-card">
            <h3>System Insight</h3>
            <p>
              This system uses parametric insurance. When environmental
              thresholds are met, payouts are triggered automatically.
            </p>
          </article>

          <article className="card action-card">
            <h3>Action Panel</h3>
            <div className="action-group">
              <p className="action-group-title">Primary</p>
              <div className="action-grid">
                <button
                  type="button"
                  className="btn rain"
                  onClick={() => handleEventTrigger("Rain")}
                >
                Simulate Rain
                </button>
                <button
                  type="button"
                  className="btn heat"
                  onClick={() => handleEventTrigger("Heat")}
                >
                Simulate Heat
                </button>
                <button
                  type="button"
                  className="btn pollution"
                  onClick={() => handleEventTrigger("Pollution")}
                >
                Simulate Pollution
                </button>
              </div>
            </div>
            <div className="action-group">
              <p className="action-group-title">Secondary</p>
              <div className="action-grid">
                <button
                  type="button"
                  className="btn toggle-active"
                  onClick={() => setUserActive((prev) => !prev)}
                >
                Toggle Active / Inactive
                </button>
                <button
                  type="button"
                  className="btn toggle-location"
                  onClick={() => setLocationValid((prev) => !prev)}
                >
                Toggle Location Valid / Invalid
                </button>
              </div>
            </div>
            <div className="action-group">
              <p className="action-group-title">Danger</p>
              <div className="action-grid action-grid-single">
                <button type="button" className="btn danger" onClick={handleReset}>
                Reset System
                </button>
              </div>
            </div>
          </article>

          <article className="card output-card">
            <h3>Output Panel</h3>
            <div className={`status-alert ${outputTone}`}>
              <span className="alert-label">
                {outputTone === "success"
                  ? "Success"
                  : outputTone === "warning"
                    ? "Warning"
                    : outputTone === "error"
                      ? "Error"
                      : "Info"}
              </span>
              <p>{statusMessage}</p>
            </div>
            <div className="output-items">
              <p>
                <strong>Last Event:</strong> {lastEvent}
              </p>
              <p>
                <strong>Last Payout:</strong> {lastPayout}
              </p>
              <p className="system-live">
                <span className={`status-dot ${statusDotClass}`} />
                {userActive ? "System actively monitoring" : "System is currently inactive"}
              </p>
            </div>
            <div className="cooldown">
              Cooldown Active: {Math.min(cooldownCounter, COOLDOWN_LIMIT)} /{" "}
              {COOLDOWN_LIMIT} attempts used
            </div>
          </article>
        </section>

        <section className="card trend-card">
          <div className="trend-head">
            <h3>Payout Trend</h3>
            <p>Recent event payouts</p>
          </div>
          {payoutTrend.length === 0 ? (
            <div className="trend-empty">
              No payouts yet. Trigger an event to visualize payout trend.
            </div>
          ) : (
            <div className="trend-bars">
              {payoutTrend.map((value, idx) => (
                <div key={`${value}-${idx}`} className="trend-item">
                  <div
                    className="trend-bar"
                    style={{
                      height: `${Math.max(10, (value / maxPayoutPoint) * 100)}%`
                    }}
                  />
                  <span>₹{value}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="card table-card">
          <h3>Event History</h3>
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Status</th>
                <th>Reason</th>
                <th>Payout</th>
              </tr>
            </thead>
            <tbody>
              {eventHistory.length === 0 ? (
                <tr>
                  <td colSpan="4" className="empty">
                    No events logged yet.
                  </td>
                </tr>
              ) : (
                eventHistory.map((item, idx) => (
                  <tr key={`${item.event}-${idx}`}>
                    <td>{item.event}</td>
                    <td>
                      <span
                        className={`status-pill ${
                          item.status === "Success"
                            ? "success"
                            : item.reason === "Cooldown active" ||
                                item.reason === "Weekly cap reached"
                              ? "warning"
                              : "rejected"
                        }`}
                      >
                        {item.status === "Success"
                          ? "✔ Success"
                          : item.reason === "Cooldown active" ||
                              item.reason === "Weekly cap reached"
                            ? "⚠ Warning"
                            : "❌ Rejected"}
                      </span>
                    </td>
                    <td>{item.reason}</td>
                    <td>{item.payout}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <p className="history-note">
            Rejection reasons tracked: Inactive user, Invalid location,
            Duplicate claim, Cooldown active, Weekly cap reached.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
