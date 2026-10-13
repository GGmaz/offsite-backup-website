const mobile = matchMedia('(max-width: 767px)');

document.querySelectorAll<HTMLElement>('[data-mobile-accordion]').forEach(group => {
  const buttons = [...group.querySelectorAll<HTMLButtonElement>('[data-accordion-toggle]')];
  const sync = () => {
    buttons.forEach(button => {
      const panel = document.getElementById(button.getAttribute('aria-controls')!);
      button.hidden = !mobile.matches;
      button.setAttribute('aria-expanded', String(!mobile.matches));
      if (panel) panel.hidden = mobile.matches;
    });
    group.querySelectorAll<HTMLElement>('[data-static-heading]').forEach(heading => {
      heading.hidden = mobile.matches;
    });
    group.querySelectorAll<HTMLElement>('[data-mobile-heading]').forEach(heading => {
      heading.hidden = !mobile.matches;
    });
  };
  buttons.forEach(button => button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    buttons.forEach(other => {
      const expanded = other === button && open;
      other.setAttribute('aria-expanded', String(expanded));
      const panel = document.getElementById(other.getAttribute('aria-controls')!);
      if (panel) panel.hidden = !expanded;
    });
  }));
  sync();
  mobile.addEventListener('change', sync);
});
