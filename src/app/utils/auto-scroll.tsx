'use client';

import { MouseEvent } from 'react';

export function autoScroll(e: MouseEvent<HTMLButtonElement>, id: string) {
  e.preventDefault();
  const element = document.getElementById(id);
  if (!element) return;
  scrollTo({ top: element.offsetTop, behavior: 'smooth' });
}
