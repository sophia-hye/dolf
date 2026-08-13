// Daum(카카오) 우편번호 서비스 — 무료, API 키 불필요.
// 도로명/지번 주소 + 우편번호(zonecode)를 채워줍니다.
// 팝업(.open())은 팝업 차단에 막힐 수 있어, 페이지 내 모달로 embed 합니다.
// https://postcode.map.daum.net/guide

declare global {
  interface Window {
    daum?: {
      Postcode: new (opts: {
        oncomplete: (data: DaumPostcodeData) => void
        onclose?: (state: string) => void
        width?: string | number
        height?: string | number
      }) => { open: () => void; embed: (el: HTMLElement) => void }
    }
  }
}

interface DaumPostcodeData {
  zonecode: string // 우편번호 (5자리)
  roadAddress: string // 도로명 주소
  jibunAddress: string // 지번 주소
  address: string // 기본 주소
}

export interface PostcodeResult {
  readonly zonecode: string
  readonly address: string
}

const SCRIPT_ID = 'daum-postcode-sdk'
const SCRIPT_SRC =
  'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'

function loadPostcodeScript(): Promise<void> {
  if (window.daum?.Postcode) return Promise.resolve()
  return new Promise((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null
    if (existing) {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () => reject(new Error('postcode load failed')))
      return
    }
    const s = document.createElement('script')
    s.id = SCRIPT_ID
    s.src = SCRIPT_SRC
    s.async = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('postcode load failed'))
    document.head.appendChild(s)
  })
}

// Opens the address search embedded in an in-page modal (no popup, so it is not
// blocked by popup blockers). Resolves with the selected address, or null if
// the user closed it without choosing.
export async function openPostcode(): Promise<PostcodeResult | null> {
  await loadPostcodeScript()
  const daum = window.daum
  if (!daum?.Postcode) return null

  return new Promise((resolve) => {
    const overlay = document.createElement('div')
    overlay.style.cssText =
      'position:fixed;inset:0;background:rgba(31,31,33,0.45);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;'

    const box = document.createElement('div')
    box.style.cssText =
      'position:relative;width:100%;max-width:440px;height:540px;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 12px 44px rgba(0,0,0,0.28);'

    const closeBtn = document.createElement('button')
    closeBtn.type = 'button'
    closeBtn.setAttribute('aria-label', 'close')
    closeBtn.textContent = '✕'
    closeBtn.style.cssText =
      'position:absolute;top:6px;right:8px;z-index:2;width:32px;height:32px;border:none;background:transparent;font-size:16px;line-height:1;cursor:pointer;color:#1f1f21;'

    const container = document.createElement('div')
    container.style.cssText = 'width:100%;height:100%;'

    box.appendChild(closeBtn)
    box.appendChild(container)
    overlay.appendChild(box)
    document.body.appendChild(overlay)

    let done = false
    const cleanup = () => {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay)
    }
    closeBtn.onclick = () => {
      cleanup()
      if (!done) resolve(null)
    }
    overlay.onclick = (e) => {
      if (e.target === overlay) {
        cleanup()
        if (!done) resolve(null)
      }
    }

    new daum.Postcode({
      width: '100%',
      height: '100%',
      oncomplete: (data) => {
        done = true
        cleanup()
        resolve({
          zonecode: data.zonecode,
          address: data.roadAddress || data.jibunAddress || data.address,
        })
      },
    }).embed(container)
  })
}
