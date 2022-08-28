import Button from "@modules/common/components/button"
import Link from "next/link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-start justify-between">
      <div>
        <h2 className="text-xl-semi">Đã có tài khoản?</h2>
        <p className="text-base-regular text-gray-700 mt-2">
          Đăng nhập để có trải nghiệm tốt hơn.
        </p>
      </div>
      <div>
        <Link href="/account/login">
          <a>
            <Button variant="secondary">Đang nhập</Button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
