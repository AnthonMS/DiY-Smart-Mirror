function init() {
    // Import Container Manager Script
    var import_container_manager = document.createElement('script');
    import_container_manager.type = 'text/javascript';
    import_container_manager.src = '/scripts/container_manager_script.js';
    document.head.appendChild(import_container_manager);

    // Import Menu Manager Script
    var import_menu_manager = document.createElement('script');
    import_menu_manager.type = 'text/javascript';
    import_menu_manager.src = '/scripts/menu_manager_script.js';
    document.head.appendChild(import_menu_manager);

    // Import Keyboard Manager Script
    // <script type="text/javascript" src="/script.js"></script>
    var import_keyboard_manager = document.createElement('script');
    import_keyboard_manager.type = 'text/javascript';
    import_keyboard_manager.src = '/scripts/keyboard_manager_script.js';
    document.head.appendChild(import_keyboard_manager);

    // Import Keyboard Styling 
    var import_keyboard_styles = document.createElement('link');
    import_keyboard_styles.rel = 'stylesheet';
    import_keyboard_styles.type = 'text/css';
    import_keyboard_styles.href = '/styles/keyboard_styling.css';
    document.head.appendChild(import_keyboard_styles);
}