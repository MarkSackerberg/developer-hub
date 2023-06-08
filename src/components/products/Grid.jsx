import clsx from 'clsx'
import { LogoWithName } from './Logo'
import { products } from './index'
import Link from 'next/link'

export function Grid({ onClick, className, ...props }) {
  return (
    <ul className={clsx(['grid gap-3', className])} {...props}>
      {products.map((product) => (
        <li key={product.path}>
          <Link
            href={`/${product.path}`}
            className="block rounded-lg p-3 hover:bg-slate-50 hover:dark:bg-slate-700"
            onClick={onClick}
          >
            <LogoWithName product={product}></LogoWithName>
          </Link>
        </li>
      ))}
    </ul>
  )
}