export function handleAction(action, context = {}) {
  if (!action) return;

  // Navigate to next/prev slide
  if (action === 'next_slide') {
    window.dispatchEvent(new CustomEvent('deck:navigate',
      { detail: { direction: 'next' } }));
    return;
  }
  if (action === 'prev_slide') {
    window.dispatchEvent(new CustomEvent('deck:navigate',
      { detail: { direction: 'prev' } }));
    return;
  }

  // Jump to specific slide by index
  if (action.startsWith('goto_slide:')) {
    const index = parseInt(action.split(':')[1]);
    window.dispatchEvent(new CustomEvent('deck:goto',
      { detail: { index } }));
    return;
  }

  // Open a sub-deck
  if (action === 'open_subdeck') {
    window.dispatchEvent(new CustomEvent('deck:subdeck',
      { detail: { id: context.subDeckId } }));
    return;
  }

  // Go back to hub/chapter menu
  if (action === 'back_to_hub') {
    window.dispatchEvent(new CustomEvent('deck:hub'));
    return;
  }

  // Email — open mail client with pre-filled subject
  if (action.startsWith('mailto:')) {
    window.location.href = action;
    return;
  }

  // Login screen
  if (action === 'login') {
    window.dispatchEvent(new CustomEvent('deck:login'));
    return;
  }

  // External URL — open in new tab
  if (action.startsWith('http')) {
    window.open(action, '_blank', 'noopener,noreferrer');
    return;
  }
}
