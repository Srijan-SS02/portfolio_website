function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var sidebarIcon = document.querySelector('.sidebar-icon');
    sidebar.classList.toggle('active');
    sidebarIcon.classList.toggle('active');
}

function closeSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var sidebarIcon = document.querySelector('.sidebar-icon');
    sidebar.classList.remove('active');
    sidebarIcon.classList.remove('active');
}