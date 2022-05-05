import Container from './container'
import cn from 'classnames'
import data from '../contentrain/Alert/Alert.json'
const alertData = data[0]

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              {alertData.text}{' '}
              <a
                href={alertData.examplelink}
                className="underline hover:text-success duration-200 transition-colors"
              >
                {alertData.underlinetext}
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
