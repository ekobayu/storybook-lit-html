import { html } from 'lit'
import './CallOut.scss'

export interface CallOutProps {
  page_title?: string
}

export const CallOut = ({ page_title }: CallOutProps) => {
  return html`<div class="['content-block--call-out']">
    <div class="inner-call-out">
      ${page_title
        ? html`<div class="call-out-text">
            <div class="container">
              <h1>${page_title}</h1>
            </div>
          </div>`
        : ''}
    </div>
  </div>`
}
