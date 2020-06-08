function init() {
    // Import Container Manager Script
    var import_container_manager = document.createElement('script');
    import_container_manager.src = '/container_manager_script.js';
    document.head.appendChild(import_container_manager);

    // Import Menu Manager Script
    var import_menu_manager = document.createElement('script');
    import_menu_manager.src = '/menu_manager_script.js';
    document.head.appendChild(import_menu_manager);
}