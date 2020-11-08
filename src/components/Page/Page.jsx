import React from 'react'
import {Helmet} from 'react-helmet'

export default function Page({
  children,
  title,
  description,
  keywords,
  robots,
  noindex,
}) {

  return (
    <>
      <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        {robots && <meta name="robots" content={robots || (noindex ? "noindex, follow" : "index, follow")} />}
      </Helmet>

      {children}
    </>
  )
}