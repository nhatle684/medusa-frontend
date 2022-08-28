import Link from "next/link"
import React from "react"

const Help = () => {
  return (
    <div>
      <h2 className="text-base-semi">Bạn cần giúp đỡ?</h2>
      <div className="text-base-regular my-2">
        <ul className="gap-y-2 flex flex-col">
          <li>
            <Link href="/contact">
              <a>Liên lạc</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Đổi & trả hàng</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Help
