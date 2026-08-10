import { useState } from "react";

import "../styles/Settings.css";

function Settings() {

  const [notifications, setNotifications] = useState(true);

  const [emailUpdates, setEmailUpdates] = useState(false);

  const [compactMode, setCompactMode] = useState(false);

  const [saved, setSaved] = useState(false);

  const handleSave = () => {

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div className="settings-page">

      {/* Header */}

      <div className="settings-header">

        <div>
          <h1>Settings</h1>

          <p>
            Manage your StudentHub preferences.
          </p>
        </div>

      </div>

      {/* General Settings */}

      <div className="settings-card">

        <div className="settings-card-header">

          <div>
            <h2>General Settings</h2>

            <p>
              Customize how StudentHub behaves.
            </p>
          </div>

          <span className="settings-card-icon">
            ⚙️
          </span>

        </div>

        {/* Notifications */}

        <div className="setting-item">

          <div className="setting-info">

            <strong>
              Notifications
            </strong>

            <span>
              Receive notifications about student
              activities.
            </span>

          </div>

          <label className="switch">

            <input
              type="checkbox"
              checked={notifications}
              onChange={() =>
                setNotifications(!notifications)
              }
            />

            <span className="slider"></span>

          </label>

        </div>

        {/* Email Updates */}

        <div className="setting-item">

          <div className="setting-info">

            <strong>
              Email Updates
            </strong>

            <span>
              Receive important StudentHub updates
              through email.
            </span>

          </div>

          <label className="switch">

            <input
              type="checkbox"
              checked={emailUpdates}
              onChange={() =>
                setEmailUpdates(!emailUpdates)
              }
            />

            <span className="slider"></span>

          </label>

        </div>

        {/* Compact Mode */}

        <div className="setting-item">

          <div className="setting-info">

            <strong>
              Compact Mode
            </strong>

            <span>
              Use a more compact layout for dashboard
              information.
            </span>

          </div>

          <label className="switch">

            <input
              type="checkbox"
              checked={compactMode}
              onChange={() =>
                setCompactMode(!compactMode)
              }
            />

            <span className="slider"></span>

          </label>

        </div>

      </div>

      {/* Account Information */}

      <div className="settings-card">

        <div className="settings-card-header">

          <div>
            <h2>Account Information</h2>

            <p>
              Basic information about the administrator.
            </p>
          </div>

          <span className="settings-card-icon">
            👤
          </span>

        </div>

        <div className="account-information">

          <div className="account-field">

            <label>
              Name
            </label>

            <input
              type="text"
              value="StudentHub Admin"
              readOnly
            />

          </div>

          <div className="account-field">

            <label>
              Email
            </label>

            <input
              type="email"
              value="admin@studenthub.com"
              readOnly
            />

          </div>

          <div className="account-field">

            <label>
              Role
            </label>

            <input
              type="text"
              value="Administrator"
              readOnly
            />

          </div>

        </div>

      </div>

      {/* Save Section */}

      <div className="settings-actions">

        {saved && (
          <span className="saved-message">
            ✓ Settings saved successfully
          </span>
        )}

        <button
          className="save-settings-btn"
          onClick={handleSave}
        >
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default Settings;