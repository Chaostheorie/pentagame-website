import Toast from 'bootstrap/js/dist/toast';
import Collapse from 'bootstrap/js/dist/collapse';

function init_ui() {
    document.querySelectorAll('.toast').forEach((toastEl: HTMLElement) => {
        return new Toast(toastEl, { autohide: false });
    });

    document
        .querySelectorAll('.collapse')
        .forEach((collapseEl: HTMLElement) => {
            return new Collapse(collapseEl, { toggle: false });
        });

    document.querySelectorAll('.btn-close').forEach((btn: HTMLElement) => {
        let target = btn.getAttribute('data-target');
        if (target !== null) {
            btn.addEventListener('click', (_: Event) => {
                document.querySelector(target).remove();
            });
        }
    });

    // nav toggle
    let btn = document.getElementById('menu-toggle');

    btn.addEventListener('click', (evt) => {
        evt.preventDefault();
        btn.classList.toggle('toggled');
        document.getElementById('wrapper').classList.toggle('sidebar-toggled');
    });

    console.info('[MAIN]: Finished Initializing general UI Elements 🐱');
}

function CopyToClipBoard(value: string) {
    /* Get the text field */
    var shadow_input = document.createElement('input');
    shadow_input.classList.add('d-none');
    document.body.appendChild(shadow_input);

    if (shadow_input instanceof HTMLInputElement) {
        shadow_input.type = 'text';
        shadow_input.value = value;
        shadow_input.select();
        shadow_input.setSelectionRange(0, 1000);
        document.execCommand('copy');
        shadow_input.remove();
    } else {
        console.log('[UI]: Failed to copy text');
    }
}

// @ts-ignore
window.CopyToClipBoard = CopyToClipBoard;
if (document.readyState !== 'loading') {
    init_ui();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        init_ui();
    });
}
