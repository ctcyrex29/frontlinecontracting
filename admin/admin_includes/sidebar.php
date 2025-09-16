<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body>
    <div class="sidebar">
        <h1><i class="fas fa-shield-alt"></i> Admin Dashboard</h1>
        <button onclick="showSection('doctors')" class="active">
            <i class="fas fa-user-md"></i> Doctors
        </button>
        <button onclick="showSection('settings')">
            <i class="fas fa-cog"></i> Settings
        </button>

         <button onclick="window.location.href=' analytics.php'">
            <i class="fas fa-chart-line"></i> Analytics
        </button>

        <button onclick="window.location.href='adminRegistration.php'">
            <i class="fas fa-user-plus"></i> Admins 
        </button>


        <button onclick="window.location.href='admin\adminRegistration.php'">
            <i class="fas fa-sign-out-alt"></i> Logout
        </button>

        <button onclick="window.location.href='/mcctelehealth/admin/admin_includes/logout.php'">
            <i class="fas fa-sign-out-alt"></i> Logout
        </button>
    </div>
   