import { html } from 'lit'
import './Hero.scss'

export interface HeroProps {
  wide_image: string
  wide_alignment: string
  large_image: string
  large_alignment: string
  mobile_image: string
  mobile_alt?: string
  mobile_alignment: string
  display_page_title: boolean
  page_title?: string
}

const alignments: { [index: string]: string } = {
  none: 'bg-cc',
  'center center': 'bg-cc',
  'top left': 'bg-tl',
  'top middle': 'bg-tc',
  'top right': 'bg-tr',
  'middle left': 'bg-cl',
  'middle right': 'bg-cr',
  'bottom left': 'bg-bl',
  'bottom middle': 'bg-bc',
  'bottom right': 'bg-br'
}

export const Hero = ({
  wide_image,
  wide_alignment,
  large_image,
  large_alignment,
  mobile_image,
  mobile_alt,
  mobile_alignment,
  display_page_title,
  page_title
}: HeroProps) => {
  wide_alignment = alignments[wide_alignment]
  large_alignment = alignments[large_alignment]
  mobile_alignment = alignments[mobile_alignment]

  return html`<div class="content-block--hero">
    <div class="inner-hero">
      ${wide_image && large_image && mobile_image
        ? html`<picture data-align-large=${large_alignment} data-align-wide=${wide_alignment} data-align-mobile=${mobile_alignment}>
            <source media={'(min-width:1200px)'} srcSet=${wide_image} />
            <source media={'(min-width:720px)'} srcSet=${large_image} />
            <img src=${mobile_image} alt=${mobile_alt} />
          </picture>`
        : ''}
      ${display_page_title
        ? html`<div class="hero-text">
            <div class="container">
              <h1>${page_title}</h1>
            </div>
          </div>`
        : ''}
    </div>
  </div>`
}
