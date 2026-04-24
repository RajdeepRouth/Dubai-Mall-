export function handleAction(action, context = {}) {
  if (!action) return;

  // Type 1: next/prev slide navigation
  if (action === 'next_slide') {
    window.dispatchEvent(
      new CustomEvent('deck-navigate', { detail: 'next' })
    );
    return;
  }
  if (action === 'prev_slide') {
    window.dispatchEvent(
      new CustomEvent('deck-navigate', { detail: 'prev' })
    );
    return;
  }

  // Type 2: open sub-deck
  if (action === 'open_subdeck') {
    window.dispatchEvent(
      new CustomEvent('open-subdeck', { detail: context.subDeckId })
    );
    return;
  }

  // Type 3: mailto links — open email client directly
  if (action.startsWith('mailto:')) {
    window.location.href = action;
    return;
  }

  // Type 4: external URL — open in new tab
  if (action.startsWith('http')) {
    window.open(action, '_blank', 'noopener,noreferrer');
    return;
  }
}
