// Add this script to admin/index.html or as a new file and include it after admin.js
// This will override the login and password change logic to use the new API

class AdminDashboardDBAuth extends AdminDashboard {
    loadAdminCredentials() {
        // No-op: credentials are now server-side only
        this.adminCredentials = null;
    }

    // Override authentication to use API
    authenticate(username, password) {
        return fetch('/api/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(res => {
            if (!res.ok) throw new Error('Invalid username or password');
            return res.json();
        })
        .then(data => {
            const token = this.generateToken();
            const expiry = new Date().getTime() + (24 * 60 * 60 * 1000);
            localStorage.setItem('adminToken', token);
            localStorage.setItem('sessionExpiry', expiry.toString());
            this.isAuthenticated = true;
            this.currentUser = { username: data.username };
            this.showDashboard();
            return true;
        })
        .catch(() => {
            return false;
        });
    }

    // Override handleLogin to support async authenticate
    handleLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorDiv = document.getElementById('loginError');
        this.authenticate(username, password).then(success => {
            if (success) {
                errorDiv.style.display = 'none';
            } else {
                errorDiv.textContent = 'Invalid username or password';
                errorDiv.style.display = 'block';
            }
        });
    }

    // Override password change to use API
    changePassword() {
        const username = this.currentUser?.username;
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (newPassword !== confirmPassword) {
            this.showMessage('New passwords do not match', 'error');
            return;
        }
        if (newPassword.length < 8) {
            this.showMessage('Password must be at least 8 characters long', 'error');
            return;
        }
        fetch('/api/admin/change-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, currentPassword, newPassword })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                this.showMessage('Password updated successfully', 'success');
                document.getElementById('changePasswordForm').reset();
            } else {
                this.showMessage(data.error || 'Password update failed', 'error');
            }
        })
        .catch(() => {
            this.showMessage('Password update failed', 'error');
        });
    }
}

// Replace the default admin dashboard with DB-auth version
window.admin = new AdminDashboardDBAuth();
