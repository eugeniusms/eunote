import { Head, ErrorComponent } from "blitz"

// ------------------------------------------------------
// This page is rendered if a route match is not found
// ------------------------------------------------------
export default function Page500() {
  const statusCode = 500
  const title = "jujurly gue gatau kenapa error"
  return (
    <>
      <Head>
        <title>
          {statusCode}: {title}
        </title>
      </Head>
      <ErrorComponent statusCode={statusCode} title={title} />
    </>
  )
}
