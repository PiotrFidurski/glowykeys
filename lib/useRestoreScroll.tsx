import { useRouterScroll } from '@moxy/next-router-scroll';
import { NextScrollBehaviorContext } from '@moxy/next-router-scroll/scroll-behavior';
import * as React from 'react';

type UpdateScroll = (
  prevContext?: NextScrollBehaviorContext | null,
  context?: NextScrollBehaviorContext | null
) => void;

export function useRestoreScroll() {
  const { updateScroll } = useRouterScroll();

  const updateScrollRef = React.useRef<UpdateScroll | null>(updateScroll);

  React.useEffect(() => {
    updateScrollRef.current();
  }, []);
}
