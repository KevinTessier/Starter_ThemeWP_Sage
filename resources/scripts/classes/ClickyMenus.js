/**
 * Object for creating click-triggered navigation submenus
 */

class ClickyMenus {
    constructor(menu) {
        // DOM element(s)
        this.menu = menu
        this.parent
        this.currentMenuItem
        this.menuSetup()
    }

    /*===================================================
    =            Menu Open / Close Functions            =
    ===================================================*/

    toggleOnMenuClick(e) {
      const button = e.currentTarget
      const expanded = button.getAttribute('aria-expanded');
      const submenu = document.getElementById(
        button.getAttribute('aria-controls')
      )

      if(expanded !== 'false')
      {
        button.setAttribute('aria-expanded', false)
        submenu.setAttribute('aria-hidden', true)
      }
      else
      {
        this.parent = button.closest('[aria-hidden="false"]') ? button.closest('[aria-hidden="false"]') : button.closest('nav');
        this.closeMenu()

        button.setAttribute('aria-expanded', true);
        submenu.setAttribute('aria-hidden', false);

      }

    }

    closeMenu() {

      const buttons = this.parent.querySelectorAll('button[aria-expanded="true"]');
      const submenus = this.parent.querySelectorAll('[aria-hidden="false"]');

      buttons.forEach( (btn) => {
        btn.setAttribute('aria-expanded', false)
      });

      submenus.forEach( (snav) => {
        snav.setAttribute('aria-hidden', true);
      });

    }

    closeOnEscKey(e) {
      console.log(e.keyCode);
        if (27 === e.keyCode) {
            // we're in a submenu item
            if (null !== e.target.closest('ul[aria-hidden="false"]')) {
                this.currentMenuItem.focus()
                this.toggleSubmenu(this.currentMenuItem)

                // we're on a parent item
            } else if ('true' === e.target.getAttribute('aria-expanded')) {
                this.toggleSubmenu(this.currentMenuItem)
            }
        }
    }

    /*===========================================================
    =            Modify Menu Markup & Bind Listeners            =
    =============================================================*/
    menuSetup() {
      const buttons = this.menu.getElementsByTagName('button')
      console.log('this',this);
      for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];

        button.addEventListener('click', (e) =>
          this.toggleOnMenuClick(e)
        )

        this.menu.addEventListener('keyup', (e) =>
            this.closeOnEscKey(e)
        )
      }
    }
}

export default ClickyMenus
