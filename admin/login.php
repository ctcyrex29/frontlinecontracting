<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login-Frontline Contracting</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="admin.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>

<body>
    <div id="loginScreen" class="login-screen">
        <div class="login-container">
            <div class="login-header">
                <h2><i class="fas fa-shield-alt"></i> Admin Access</h2>
                <p>Frontline Contracting Dashboard</p>
            </div>
            <form id="loginForm" class="login-form" method="post">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit" class="btn btn-primary" style="text-align:center;">Login</button>
            </form>
            <div id="loginError" class="error-message" style="display: none;"></div>
        </div>
    </div>
</body>

</html>