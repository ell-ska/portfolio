import { permanentRedirect } from 'next/navigation'

export default function AboutPage() {
  return permanentRedirect('/about/me')
}
