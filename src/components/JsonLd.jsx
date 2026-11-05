/** Structured data for search engines. `<` is escaped so the JSON can't break out of the tag. */
const JsonLd = ({ data }) => (
  <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replace(/</g, '\\u003c'),
    }}
  />
)

export default JsonLd
