/**
 * Figures laid out like line items on an invoice:
 * label on the left, a dotted leader, the figure on the right.
 */
const Ledger = ({ rows, classes = '' }) => (
  <dl className={classes}>
    {rows.map(({ label, value }) => (
      <div
        key={label}
        className='flex items-baseline gap-3 py-2.5 first:pt-0 last:pb-0'
      >
        <dt className="flex flex-1 items-baseline gap-3 text-sm md:text-base text-zinc-400 after:content-[''] after:flex-1 after:min-w-6 after:border-b after:border-dotted after:border-zinc-500 after:translate-y-[-0.3em]">
          {label}
        </dt>
        <dd className='text-lg md:text-xl font-semibold text-zinc-50 tabular-nums whitespace-nowrap'>
          {value}
        </dd>
      </div>
    ))}
  </dl>
)

export default Ledger
