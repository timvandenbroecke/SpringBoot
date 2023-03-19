import React from 'react';
import { Trans, useTranslation } from 'react-i18next'

export function T(props) {
    const { t } = useTranslation('common');

  return <Trans t={t}>{props.children}</Trans>;
}